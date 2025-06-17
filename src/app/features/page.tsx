"use client";

import { useState } from "react";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Link from "next/link";
import Image from "next/image";

// Ícones para cada categoria
const FeatureIcons = {
  core: (
    <svg
      className="w-10 h-10 text-emerald-600 dark:text-emerald-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  ),
  quality: (
    <svg
      className="w-10 h-10 text-blue-600 dark:text-blue-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  premium: (
    <svg
      className="w-10 h-10 text-purple-600 dark:text-purple-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  ),
  monetization: (
    <svg
      className="w-10 h-10 text-yellow-600 dark:text-yellow-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  future: (
    <svg
      className="w-10 h-10 text-indigo-600 dark:text-indigo-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
      />
    </svg>
  ),
};

// Definição de todas as features do B-Market
const features = [
  {
    category: "Core Features",
    icon: FeatureIcons.core,
    color: "emerald",
    features: [
      {
        title: "Comparador de Preços",
        description:
          "Sistema que permite comparar preços de produtos com diferentes unidades de medida.",
        details: [
          "Seleção avançada de unidades (kg, g, ml, l, unidade, etc.)",
          "Comparação de múltiplos produtos simultaneamente",
          "Cálculo automático de valor por unidade padrão",
          "Suporte para embalagens complexas (caixas, packs, fardos)",
          "Exibição da porcentagem de economia",
        ],
        status: "Disponível",
        link: "/comparador",
      },
      {
        title: "Lista de Mercado",
        description: "Organização de compras com persistência local.",
        details: [
          "Armazenamento com AsyncStorage",
          "Interface para adicionar/remover itens",
          "Categorização e priorização de itens (em desenvolvimento)",
          "Histórico de listas (em desenvolvimento)",
          "Status de compra (itens marcados) (em desenvolvimento)",
        ],
        status: "Parcialmente implementado",
        link: null,
      },
      {
        title: "Despensa",
        description: "Gerenciamento de produtos disponíveis em casa.",
        details: [
          "Cadastro de produtos com quantidade e validade",
          "Visualização do status de validade",
          "Remoção de produtos",
          "Filtros por categoria e validade (planejado)",
          "Alertas para produtos vencendo (planejado)",
          "Estatísticas de consumo (planejado)",
        ],
        status: "Parcialmente implementado",
        link: null,
      },
    ],
  },
  {
    category: "Funcionalidades de Qualidade de Vida",
    icon: FeatureIcons.quality,
    color: "blue",
    features: [
      {
        title: "Sistema de Sugestões Inteligente",
        description:
          "Facilite suas compras com sugestões baseadas no seu histórico.",
        details: [
          "Autocomplete com imagens de produtos",
          "Sugestões baseadas no histórico de compras",
          "Interface intuitiva e responsiva",
        ],
        status: "Em desenvolvimento",
        link: null,
      },
      {
        title: "Especificação Detalhada de Produtos",
        description:
          "Organização minuciosa para melhor controle dos seus produtos.",
        details: [
          "Distinção entre variantes do mesmo produto (lata, sachê, in-natura)",
          "Setorização por categorias (alimentos, higiene, farmácia, etc.)",
          "Sistema de tags para organização personalizada",
        ],
        status: "Planejado",
        link: null,
      },
      {
        title: "Notificações Contextuais",
        description:
          "Receba alertas inteligentes baseados no seu consumo e estoque.",
        details: [
          "Alertas de estoque baixo para produtos essenciais",
          "Notificações de validade próxima do vencimento",
          "Lembretes baseados em padrões de consumo",
        ],
        status: "Planejado",
        link: null,
      },
    ],
  },
  {
    category: "Funcionalidades Premium",
    icon: FeatureIcons.premium,
    color: "purple",
    features: [
      {
        title: "Sincronização Multi-dispositivo",
        description:
          "Acesse seus dados em qualquer dispositivo, a qualquer momento.",
        details: [
          "Conta de usuário na nuvem",
          "Acesso em smartphones, tablets e web",
          "Edição simultânea e sincronização em tempo real",
        ],
        status: "Planejado",
        link: null,
      },
      {
        title: "Relatórios e Análises",
        description:
          "Visualize seus hábitos de consumo com análises detalhadas.",
        details: [
          "Histórico detalhado de compras com gráficos",
          "Tendências de consumo e sugestões de economia",
          "Leitor OCR para notas fiscais",
        ],
        status: "Planejado",
        link: null,
      },
      {
        title: "Versão para Estabelecimentos",
        description:
          "Solução específica para pequenos negócios e restaurantes.",
        details: [
          "Controle refinado para restaurantes e pequenos comércios",
          "Relatórios detalhados de consumo e estoque",
          "Previsões de demanda baseadas em histórico",
        ],
        status: "Futuro",
        link: null,
      },
    ],
  },
  {
    category: "Monetização",
    icon: FeatureIcons.monetization,
    color: "yellow",
    features: [
      {
        title: "Sistema B2B de Dados (Opt-in)",
        description:
          "Fornecimento opcional de dados anônimos para parceiros comerciais.",
        details: [
          "Coleta anônima de dados de usuários que optarem",
          "API para estabelecimentos parceiros",
          "Dashboard de análise de tendências",
          "Mapa de densidade geográfica de demanda",
          "Implementação completa de LGPD/GDPR",
        ],
        status: "Planejado",
        link: null,
      },
      {
        title: "Publicidade Não-intrusiva",
        description:
          "Anúncios relevantes e não-intrusivos para suportar a plataforma.",
        details: [
          "Anúncios relevantes via AdMob",
          "Modelo freemium com opção de remoção",
          "Ads contextuais baseados na lista de compras",
        ],
        status: "Planejado",
        link: null,
      },
    ],
  },
  {
    category: "Recursos Futuros",
    icon: FeatureIcons.future,
    color: "indigo",
    features: [
      {
        title: "Assistente de Receitas com IA",
        description:
          "Integração entre suas receitas e seu estoque de alimentos.",
        details: [
          "Scanner para extrair ingredientes de receitas",
          "Verificação automática com estoque disponível",
          "Adição de ingredientes faltantes à lista",
        ],
        status: "Futuro",
        link: null,
      },
      {
        title: "Mapeamento de Supermercados",
        description: "Navegue com eficiência pelos corredores do supermercado.",
        details: [
          "Layout interno de estabelecimentos",
          "Rota otimizada para compras",
          "Localização aproximada de produtos nas prateleiras",
        ],
        status: "Futuro",
        link: null,
      },
    ],
  },
];

// Status badges com diferentes cores
const StatusBadge = ({ status }: { status: string }) => {
  let color = "";

  switch (status) {
    case "Disponível":
      color =
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400";
      break;
    case "Parcialmente implementado":
      color =
        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      break;
    case "Em desenvolvimento":
      color =
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      break;
    case "Planejado":
      color =
        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      break;
    case "Futuro":
      color =
        "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
      break;
    default:
      color =
        "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}
    >
      {status}
    </span>
  );
};

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredFeatures = activeCategory
    ? features.filter((category) => category.category === activeCategory)
    : features;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Funcionalidades do B-Market
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Conheça todas as funcionalidades atuais e planejadas para o
              aplicativo que vai transformar sua experiência de compras.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-16 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-4 overflow-x-auto py-4 scrollbar-hide">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors
                  ${
                    activeCategory === null
                      ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
              >
                Todas as Funcionalidades
              </button>

              {features.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors
                    ${
                      activeCategory === category.category
                        ? `bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-800 dark:text-${category.color}-400`
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Categories */}
        <div className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-20">
              {filteredFeatures.map((category, catIndex) => (
                <div key={catIndex} className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2 rounded-lg bg-${category.color}-100 dark:bg-${category.color}-900/30`}
                    >
                      {category.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {category.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`
                          bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow
                          border border-gray-200 dark:border-gray-700
                          ${feature.link ? "cursor-pointer" : ""}
                        `}
                      >
                        {feature.link ? (
                          <Link href={feature.link} className="block h-full">
                            <FeatureCard feature={feature} />
                          </Link>
                        ) : (
                          <FeatureCard feature={feature} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Componente para o card de feature
function FeatureCard({ feature }: { feature: any }) {
  return (
    <div className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {feature.title}
        </h3>
        <StatusBadge status={feature.status} />
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {feature.description}
      </p>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Características:
        </h4>
        <ul className="space-y-1">
          {feature.details.map((detail: string, index: number) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-emerald-500 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {detail}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {feature.link && (
        <div className="mt-6 text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center">
          Experimentar agora
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
