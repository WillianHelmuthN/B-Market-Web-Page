import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 backdrop-blur-md bg-white/70 dark:bg-black/70 z-50">
      <Link href="/" className="flex items-center">
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
      </Link>
      <nav className="hidden md:flex space-x-6">
        <Link
          href="/#recursos"
          className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
        >
          Recursos
        </Link>
        <Link
          href="/comparador"
          className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
        >
          Comparador
        </Link>
        <Link
          href="/features"
          className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
        >
          Features
        </Link>
      </nav>
      <div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
          Download App
        </button>
      </div>
    </header>
  );
}
