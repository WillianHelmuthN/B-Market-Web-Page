import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f5f7fa] to-[#e0e6ed] dark:from-[#0a0a0a] dark:to-[#131313]">
      {/* Header */}
      <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 backdrop-blur-md bg-white/70 dark:bg-black/70 z-50">
        <div className="flex items-center">
          <Image src="/app-logo.svg" alt="B-Market Logo" width={32} height={32} className="mr-2" />
          <h1 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
            B-Market
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#recursos"
            className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            Recursos
          </a>
          <a
            href="#comparador"
            className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            Comparador
          </a>
          <a
            href="#despensa"
            className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            Despensa
          </a>
          <a
            href="#roadmap"
            className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
          >
            Roadmap
          </a>
        </nav>
        <div>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
            Download App
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
              Economize nas suas <span className="text-emerald-600 dark:text-emerald-400">compras</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              O B-Market é um aplicativo que te ajuda a economizar nas compras através de comparação inteligente de preços, gerenciamento de listas e controle da sua despensa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors">
                Baixar App
              </button>
              <button className="border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white px-6 py-3 rounded-full text-lg font-medium transition-colors">
                Saiba mais
              </button>
            </div>
          </div>
          <div className="relative w-full h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src="/app-preview.svg"
                alt="B-Market App Preview"
                width={300}
                height={600}
                className="object-contain shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="w-full py-16 px-6 md:px-12 bg-white dark:bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Principais <span className="text-emerald-600 dark:text-emerald-400">Funcionalidades</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Comparador de Preços</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Compare produtos com diferentes unidades de medida e identifique a melhor opção de custo-benefício com cálculos inteligentes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Lista de Compras</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Crie e gerencie suas listas de compras de forma intuitiva, com persistência de dados e organização por categorias.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Gerenciamento de Despensa</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Controle seu estoque doméstico, acompanhe validades e receba alertas para produtos que estão acabando.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-6 md:px-12 bg-gradient-to-r from-emerald-500 to-teal-600 dark:from-emerald-800 dark:to-teal-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para economizar em suas compras?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Baixe agora o B-Market e transforme sua experiência de compras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Download App
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors">
              Ver demonstração
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-12 bg-gray-900 text-gray-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">B-Market</h2>
              <p className="mb-4 text-gray-400 max-w-md">
                Aplicativo que auxilia usuários a economizar nas compras através de funcionalidades de comparação de preços, 
                gerenciamento de listas e controle de estoque doméstico.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#recursos" className="text-gray-400 hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#comparador" className="text-gray-400 hover:text-white transition-colors">Comparador</a></li>
                <li><a href="#despensa" className="text-gray-400 hover:text-white transition-colors">Despensa</a></li>
                <li><a href="#roadmap" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">contato@b-market.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span className="text-gray-400">São Paulo, Brasil</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} B-Market. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido por <a href="https://github.com/WillianHelmuthN" className="text-emerald-400 hover:underline">@willian</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
