import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">B-Market</h2>
            <p className="mb-4 text-gray-400 max-w-md">
              Aplicativo que auxilia usuários a economizar nas compras através
              de funcionalidades de comparação de preços, gerenciamento de
              listas e controle de estoque doméstico.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#recursos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  href="/comparador"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Comparador
                </Link>
              </li>
              <li>
                <Link
                  href="/#despensa"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Despensa
                </Link>
              </li>
              <li>
                <Link
                  href="/#roadmap"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-400">contato@b-market.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span className="text-gray-400">São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} B-Market. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Desenvolvido por{" "}
            <a
              href="https://github.com/WillianHelmuthN"
              className="text-emerald-400 hover:underline"
            >
              @willian
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
