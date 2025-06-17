"use client";

import Image from "next/image";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { useState, useEffect } from "react";

export default function Downloads() {
  const [apkLink, setApkLink] = useState("");

  useEffect(() => {
    // O link está no .env, mas precisamos usar uma variável de ambiente no lado do cliente
    // que deve ser definida no next.config.ts com o prefixo NEXT_PUBLIC_
    setApkLink(
      process.env.NEXT_PUBLIC_LINK_DOWNLOAD ||
        "https://expo.dev/artifacts/eas/4q9MLuSJYoRoWiueUmGahD.apk"
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#f5f7fa] to-[#e0e6ed] dark:from-[#0a0a0a] dark:to-[#131313]">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Download do App B-Market
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <div className="w-32 h-32 relative flex-shrink-0">
              <Image
                src="/images/AppIco.png"
                alt="B-Market App Icon"
                width={128}
                height={128}
                className="rounded-2xl"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                B-Market - Economize nas suas compras
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Versão 1.0.0 • Atualizado em 17 de junho de 2025
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  Comparador de Preços
                </span>
                <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  Lista de Compras
                </span>
                <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 text-xs font-medium px-2.5 py-0.5 rounded">
                  Gerenciamento de Despensa
                </span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 mb-8 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-amber-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-amber-800 dark:text-amber-300">
                  Atenção: Instalação de APK
                </h3>
                <div className="mt-2 text-sm text-amber-700 dark:text-amber-200">
                  <p>
                    Ao instalar um arquivo APK fora da Google Play Store, você
                    está realizando o que é conhecido como &ldquo;sideloading&rdquo;. Este
                    processo requer que você habilite a instalação de apps de
                    fontes desconhecidas nas configurações do seu dispositivo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Por que disponibilizamos via APK?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Atualmente, disponibilizamos o B-Market apenas via arquivo APK
              devido aos custos associados à publicação nas lojas oficiais de
              aplicativos. Como um projeto em desenvolvimento, estamos
              priorizando a melhoria das funcionalidades antes de seguirmos para
              uma distribuição mais ampla.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Planejamos disponibilizar o aplicativo nas lojas oficiais (Google
              Play e App Store) assim que alcançarmos uma base sólida de
              usuários e funcionalidades estáveis.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Segurança e Riscos
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ao instalar um APK fora das lojas oficiais, é importante estar
              ciente dos riscos potenciais:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
              <li>
                Menor nível de verificação de segurança em comparação com apps
                publicados nas lojas oficiais
              </li>
              <li>
                Possibilidade de instalação de software malicioso se o APK for
                obtido de fontes não confiáveis
              </li>
              <li>
                Ausência de atualizações automáticas (você precisará baixar
                novas versões manualmente)
              </li>
              <li>
                Possíveis alertas de segurança do sistema operacional durante a
                instalação
              </li>
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Nosso APK é seguro e não contém software malicioso, mas é
              importante que você obtenha o arquivo apenas através desta página
              oficial.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Como instalar
            </h3>
            <ol className="list-decimal pl-5 space-y-4 text-gray-600 dark:text-gray-300">
              <li>
                <strong>Permita instalações de fontes desconhecidas:</strong>
                <p className="mt-1">
                  Vá para Configurações &gt; Segurança &gt; Instalar apps
                  desconhecidos e habilite a permissão para o seu navegador.
                </p>
              </li>
              <li>
                <strong>Baixe o arquivo APK:</strong>
                <p className="mt-1">
                  Clique no botão de download abaixo para baixar o arquivo APK
                  do B-Market.
                </p>
              </li>
              <li>
                <strong>Instale o aplicativo:</strong>
                <p className="mt-1">
                  Abra o arquivo baixado e siga as instruções para instalar o
                  aplicativo.
                </p>
              </li>
              <li>
                <strong>Configure as permissões:</strong>
                <p className="mt-1">
                  Na primeira execução, o aplicativo solicitará as permissões
                  necessárias para seu funcionamento.
                </p>
              </li>
            </ol>
          </div>

          <div className="text-center">
            <a
              href={apkLink}
              className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download APK (v1.0.0)
            </a>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Tamanho aproximado: 35MB • Android 8.0+ necessário
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Precisa de ajuda?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Se você encontrar problemas durante o download ou instalação, ou
            tiver dúvidas sobre o aplicativo, entre em contato conosco:
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <a
              href="mailto:contato@b-market.com"
              className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              contato@b-market.com
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
