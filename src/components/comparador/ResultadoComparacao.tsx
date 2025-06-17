import {
  ResultadoComparacao,
  formatarPrecoUnitario,
} from "@/utils/comparadorPrecos";

interface ResultadoComparacaoProps {
  resultados: ResultadoComparacao[];
}

export default function ResultadoComparacaoComponent({
  resultados,
}: ResultadoComparacaoProps) {
  if (resultados.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Resultado da Comparação
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {resultados.map((resultado, index) => (
          <div
            key={index}
            className={`
              p-4 rounded-lg border 
              ${
                resultado.maisEconomico
                  ? "bg-emerald-50 dark:bg-emerald-900/30 border-emerald-200 dark:border-emerald-800"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              }
              shadow-sm transition-all hover:shadow-md
            `}
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {resultado.nome}
              </h3>
              {resultado.maisEconomico && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200">
                  Melhor Opção
                </span>
              )}
            </div>

            <div className="mt-2 space-y-1">
              <p className="text-gray-600 dark:text-gray-300">
                Preço:{" "}
                <span className="font-medium">
                  R$ {resultado.preco.toFixed(2)}
                </span>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Quantidade:{" "}
                <span className="font-medium">
                  {resultado.quantidade} {resultado.unidade}
                  {resultado.embalagem && resultado.embalagem > 1
                    ? ` (x${resultado.embalagem})`
                    : ""}
                </span>
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Preço unitário:{" "}
                <span className="font-medium">
                  {formatarPrecoUnitario(
                    resultado.precoUnitario,
                    resultado.unidade
                  )}
                </span>
              </p>
              {!resultado.maisEconomico && (
                <p className="text-red-600 dark:text-red-400">
                  <span className="font-medium">
                    {resultado.economia.toFixed(1)}% mais caro
                  </span>{" "}
                  que a melhor opção
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
