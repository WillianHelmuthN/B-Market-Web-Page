"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fechar o menu quando o usuário navega para outra página
  useEffect(() => {
    // Fechar o menu quando o usuário pressiona ESC
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  // Desabilitar o scroll quando o menu estiver aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center sticky top-0  bg-white/70 dark:bg-black/70 z-50">
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
        <Link
          href="/downloads"
          className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
        >
          Downloads
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link
          href="/downloads"
          className="hidden md:block bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
        >
          Download App
        </Link>

        {/* Botão do menu mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-white transition-transform duration-300 ease-in-out ${
              menuOpen ? "transform rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-white transition-opacity duration-300 ease-in-out mt-1 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 dark:bg-white transition-transform duration-300 ease-in-out mt-1 ${
              menuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 text-center">
          <div
            className="fixed right-0 top-0 h-full w-full bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out"
            style={{
              transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Fechar menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col px-4 py-2">
              <Link
                href="/#recursos"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition py-3 border-b border-gray-200 dark:border-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                Recursos
              </Link>
              <Link
                href="/comparador"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition py-3 border-b border-gray-200 dark:border-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                Comparador
              </Link>
              <Link
                href="/features"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition py-3 border-b border-gray-200 dark:border-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/downloads"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition py-3 border-b border-gray-200 dark:border-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                Downloads
              </Link>
              <div className="mt-4 pt-4">
                <Link
                  href="/downloads"
                  className="w-1/2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Download App
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
