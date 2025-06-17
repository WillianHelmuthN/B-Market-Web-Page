import { useState } from "react";
import { TipoUnidade } from "@/utils/comparadorPrecos";

interface UnidadeSelectorAvancadoProps {
  unidade: TipoUnidade;
  onChange: (unidade: TipoUnidade) => void;
}

export default function UnidadeSelectorAvancado({
  unidade,
  onChange,
}: UnidadeSelectorAvancadoProps) {
  const [expanded, setExpanded] = useState(false);

  const unidades: TipoUnidade[] = ["g", "kg", "ml", "l", "unidade"];

  const handleUnidadeClick = (novaUnidade: TipoUnidade) => {
    onChange(novaUnidade);
    setExpanded(false);
  };

  const getUnidadeLabel = (unidade: TipoUnidade): string => {
    switch (unidade) {
      case "g":
        return "Gramas";
      case "kg":
        return "Quilos";
      case "ml":
        return "Mililitros";
      case "l":
        return "Litros";
      case "unidade":
        return "Unidades";
      default:
        return unidade;
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
      >
        <span>{getUnidadeLabel(unidade)}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            expanded ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {expanded && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg rounded-md py-1 max-h-60 overflow-auto">
          {unidades.map((opcao) => (
            <button
              key={opcao}
              type="button"
              className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 ${
                unidade === opcao
                  ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => handleUnidadeClick(opcao)}
            >
              {getUnidadeLabel(opcao)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
