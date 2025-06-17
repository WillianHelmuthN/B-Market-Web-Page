import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vídeo/BannerVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-blue-900/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full py-16 md:py-24 px-6 md:px-12 flex flex-col items-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6 dark:bg-gray-950/40 p-8 md:p-12 rounded-2xl shadow-lg backdrop-blur-md">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white">
              Economize nas suas{" "}
              <span className="text-emerald-600 dark:text-emerald-400">
                compras
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              O B-Market é um aplicativo que te ajuda a economizar nas compras
              através de comparação inteligente de preços, gerenciamento de
              listas e controle da sua despensa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/downloads" className="w-full sm:w-auto">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors w-full">
                  Baixar App
                </button>
              </Link>
              <Link href="/comparador" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white px-6 py-3 rounded-full text-lg font-medium transition-colors">
                  Saiba mais
                </button>
              </Link>
            </div>
          </div>
          <div className="relative w-full h-[400px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-500/20 rounded-2xl overflow-hidden flex items-center justify-center">
              <Link href="/downloads">
                <Image
                  src="/app-preview.svg"
                  alt="B-Market App Preview"
                  width={300}
                  height={600}
                  className="object-contain shadow-2xl rounded-2xl transition-transform hover:scale-105 cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
