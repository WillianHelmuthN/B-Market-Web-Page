import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
            Economize nas suas{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              compras
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            O B-Market é um aplicativo que te ajuda a economizar nas compras
            através de comparação inteligente de preços, gerenciamento de listas
            e controle da sua despensa.
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
  );
}
