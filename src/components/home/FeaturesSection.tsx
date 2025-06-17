import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section
      id="recursos"
      className="w-full py-16 px-6 md:px-12 bg-white dark:bg-[#111111]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Principais{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Funcionalidades
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Link href="/comparador" className="block">
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-all hover:bg-emerald-50 dark:hover:bg-emerald-900/20 cursor-pointer">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                Comparador de Preços
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Compare produtos com diferentes unidades de medida e identifique
                a melhor opção de custo-benefício com cálculos inteligentes.
              </p>
            </div>
          </Link>

          {/* Feature 2 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-emerald-600 dark:text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Lista de Compras
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Crie e gerencie suas listas de compras de forma intuitiva, com
              persistência de dados e organização por categorias.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-emerald-600 dark:text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Gerenciamento de Despensa
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Controle seu estoque doméstico, acompanhe validades e receba
              alertas para produtos que estão acabando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
