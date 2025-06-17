import { ReactNode } from "react";

interface InfoContainerProps {
  title: string;
  children: ReactNode;
  icon: ReactNode;
}

function InfoContainer({ title, children, icon }: InfoContainerProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="mr-4 text-emerald-500 dark:text-emerald-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="text-gray-600 dark:text-gray-300">{children}</div>
    </div>
  );
}

export default function InfoContainers() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Como funciona o Comparador de Preços?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoContainer
          title="Unidades de Medida"
          icon={
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              />
            </svg>
          }
        >
          <p>
            O comparador converte automaticamente diferentes unidades (gramas,
            quilos, mililitros, litros) para uma unidade base comum, permitindo
            comparar produtos com diferentes medidas.
          </p>
        </InfoContainer>

        <InfoContainer
          title="Embalagens Múltiplas"
          icon={
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          }
        >
          <p>
            Se você estiver comparando pacotes com múltiplas unidades (como um
            pack com 6 unidades), o comparador leva isso em consideração no
            cálculo para determinar o verdadeiro valor por unidade.
          </p>
        </InfoContainer>

        <InfoContainer
          title="Economia Real"
          icon={
            <svg
              className="w-8 h-8"
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
          }
        >
          <p>
            O comparador calcula a diferença percentual entre o item mais
            econômico e os demais, mostrando exatamente quanto você pode
            economizar ao escolher a melhor opção.
          </p>
        </InfoContainer>
      </div>
    </div>
  );
}
