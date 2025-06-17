export type TipoUnidade = "g" | "kg" | "ml" | "l" | "unidade";

export type ProdutoComparacao = {
  nome: string;
  preco: number;
  quantidade: number;
  unidade: TipoUnidade;
  embalagem?: number; // Número de itens na embalagem (ex: pack com 6 unidades)
};

export type ResultadoComparacao = ProdutoComparacao & {
  precoUnitario: number;
  economia: number;
  maisEconomico: boolean;
};

// Fatores de conversão para a unidade base (g ou ml)
const FATORES_CONVERSAO: Record<TipoUnidade, number> = {
  g: 1,
  kg: 1000,
  ml: 1,
  l: 1000,
  unidade: 1,
};

// Converte qualquer quantidade para a unidade padrão (g ou ml)
export const converterParaUnidadePadrao = (
  quantidade: number,
  unidade: TipoUnidade,
  embalagem: number = 1
): number => {
  return quantidade * FATORES_CONVERSAO[unidade] * embalagem;
};

// Calcula o preço por unidade padrão (g ou ml)
export const calcularPrecoUnitario = (produto: ProdutoComparacao): number => {
  const quantidadePadrao = converterParaUnidadePadrao(
    produto.quantidade,
    produto.unidade,
    produto.embalagem || 1
  );

  return produto.preco / quantidadePadrao;
};

// Compara produtos e identifica o mais econômico
export const compararPrecos = (
  produtos: ProdutoComparacao[]
): ResultadoComparacao[] => {
  if (produtos.length === 0) return [];

  // Calcula o preço unitário para cada produto
  const resultados: ResultadoComparacao[] = produtos.map((produto) => {
    const precoUnitario = calcularPrecoUnitario(produto);

    return {
      ...produto,
      precoUnitario,
      economia: 0,
      maisEconomico: false,
    };
  });

  // Encontra o produto mais econômico
  const maisEconomico = resultados.reduce((prev, current) =>
    prev.precoUnitario < current.precoUnitario ? prev : current
  );

  // Calcula a economia percentual em relação ao mais econômico
  return resultados.map((resultado) => {
    if (resultado.precoUnitario === maisEconomico.precoUnitario) {
      return { ...resultado, maisEconomico: true };
    }

    const economia =
      ((resultado.precoUnitario - maisEconomico.precoUnitario) /
        resultado.precoUnitario) *
      100;

    return {
      ...resultado,
      economia: Math.abs(economia),
      maisEconomico: false,
    };
  });
};

// Formata o preço unitário para exibição
export const formatarPrecoUnitario = (
  precoUnitario: number,
  unidade: TipoUnidade
): string => {
  const valorFormatado = precoUnitario.toFixed(2);

  if (unidade === "g" || unidade === "kg") {
    return `R$ ${valorFormatado}/g`;
  } else if (unidade === "ml" || unidade === "l") {
    return `R$ ${valorFormatado}/ml`;
  } else {
    return `R$ ${valorFormatado}/un`;
  }
};

// Converte o valor para a moeda brasileira
export const formatarMoeda = (valor: number): string => {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
