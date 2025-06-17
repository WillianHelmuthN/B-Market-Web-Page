import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 backdrop-blur-md bg-white/70 dark:bg-black/70 z-50">
      <div className="flex items-center">
        <Image
          src="/app-logo.svg"
          alt="B-Market Logo"
          width={32}
          height={32}
          className="mr-2"
        />
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
          href="#roadmap"
          className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
        >
          Features
        </a>
      </nav>
      <div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
          Download App
        </button>
      </div>
    </header>
  );
}
