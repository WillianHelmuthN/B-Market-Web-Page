"use client";

import { useState } from "react";
import {
  ProdutoComparacao,
  ResultadoComparacao,
  compararPrecos,
} from "@/utils/comparadorPrecos";
import ProdutoComparacaoItem from "@/components/comparador/ProdutoComparacaoItem";
import ResultadoComparacaoComponent from "@/components/comparador/ResultadoComparacao";
import InfoContainers from "@/components/comparador/InfoContainers";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";

export default function ComparadorPage() {
  const [produtos, setProdutos] = useState<ProdutoComparacao[]>([
    {
      nome: "",
      preco: 0,
      quantidade: 0,
      unidade: "unidade",
    },
  ]);

  const [resultados, setResultados] = useState<ResultadoComparacao[]>([]);
  const [hasCompared, setHasCompared] = useState<boolean>(false);

  const handleAddProduto = () => {
    setProdutos([
      ...produtos,
      {
        nome: "",
        preco: 0,
        quantidade: 0,
        unidade: "unidade",
      },
    ]);
  };

  const handleRemoveProduto = (index: number) => {
    const novosProdutos = [...produtos];
    novosProdutos.splice(index, 1);
    setProdutos(novosProdutos);

    // Se remover todos os produtos, limpar os resultados
    if (novosProdutos.length === 0) {
      setResultados([]);
      setHasCompared(false);
    }
  };

  const handleProdutoChange = (
    index: number,
    produtoAtualizado: ProdutoComparacao
  ) => {
    const novosProdutos = [...produtos];
    novosProdutos[index] = produtoAtualizado;
    setProdutos(novosProdutos);
  };

  const handleCompararClick = () => {
    // Validar se todos os produtos têm os campos obrigatórios preenchidos
    const produtosValidos = produtos.filter(
      (produto) =>
        produto.nome.trim() !== "" &&
        produto.preco > 0 &&
        produto.quantidade > 0
    );

    if (produtosValidos.length < 2) {
      alert(
        "É necessário informar pelo menos 2 produtos válidos para comparação."
      );
      return;
    }

    const resultadosComparacao = compararPrecos(produtosValidos);
    setResultados(resultadosComparacao);
    setHasCompared(true);
  };

  const handleLimparClick = () => {
    setProdutos([
      {
        nome: "",
        preco: 0,
        quantidade: 0,
        unidade: "unidade",
      },
    ]);
    setResultados([]);
    setHasCompared(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Comparador de Preços
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Compare produtos com diferentes unidades e embalagens para
              descobrir qual é a opção mais econômica.
            </p>
          </div>

          <div className="space-y-6">
            {produtos.map((produto, index) => (
              <ProdutoComparacaoItem
                key={index}
                produto={produto}
                index={index}
                onChange={(produtoAtualizado) =>
                  handleProdutoChange(index, produtoAtualizado)
                }
                onRemove={() => handleRemoveProduto(index)}
              />
            ))}

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                onClick={handleAddProduto}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Adicionar Produto
              </button>

              <button
                type="button"
                onClick={handleCompararClick}
                disabled={produtos.length < 2}
                className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  produtos.length < 2
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Comparar Preços
              </button>

              {hasCompared && (
                <button
                  type="button"
                  onClick={handleLimparClick}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <svg
                    className="-ml-1 mr-2 h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Limpar Tudo
                </button>
              )}
            </div>
          </div>

          {/* Exibir os resultados da comparação */}
          <ResultadoComparacaoComponent resultados={resultados} />

          {hasCompared && resultados.length > 0 && (
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">
                Como funciona a comparação?
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                Todas as quantidades são convertidas para uma unidade padrão
                (gramas, mililitros ou unidades) e o preço é dividido pela
                quantidade total para calcular o preço unitário. O produto com o
                menor preço unitário é destacado como a melhor opção.
              </p>
            </div>
          )}

          {!hasCompared && <InfoContainers />}
        </div>
      </main>

      <Footer />
    </div>
  );
}
