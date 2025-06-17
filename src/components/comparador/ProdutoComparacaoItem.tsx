import { useState } from "react";
import { ProdutoComparacao, TipoUnidade } from "@/utils/comparadorPrecos";
import UnidadeSelectorAvancado from "./UnidadeSelectorAvancado";

interface ProdutoComparacaoItemProps {
  produto: ProdutoComparacao;
  onChange: (produtoAtualizado: ProdutoComparacao) => void;
  onRemove: () => void;
  index: number;
}

export default function ProdutoComparacaoItem({
  produto,
  onChange,
  onRemove,
  index,
}: ProdutoComparacaoItemProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Para os campos numéricos, convertemos o valor para número
    if (name === "preco" || name === "quantidade" || name === "embalagem") {
      onChange({
        ...produto,
        [name]: parseFloat(value) || 0,
      });
    } else {
      onChange({
        ...produto,
        [name]: value,
      });
    }
  };

  const handleUnidadeChange = (unidade: TipoUnidade) => {
    onChange({
      ...produto,
      unidade,
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Produto {index + 1}
        </h3>
        <button
          type="button"
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          aria-label="Remover produto"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor={`nome-${index}`}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Nome do produto
          </label>
          <input
            type="text"
            name="nome"
            id={`nome-${index}`}
            value={produto.nome}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white"
            placeholder="Ex: Arroz Integral"
          />
        </div>

        <div>
          <label
            htmlFor={`preco-${index}`}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Preço (R$)
          </label>
          <input
            type="number"
            name="preco"
            id={`preco-${index}`}
            value={produto.preco || ""}
            onChange={handleChange}
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white"
            placeholder="Ex: 8.90"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`quantidade-${index}`}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Quantidade
            </label>
            <input
              type="number"
              name="quantidade"
              id={`quantidade-${index}`}
              value={produto.quantidade || ""}
              onChange={handleChange}
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white"
              placeholder="Ex: 1"
            />
          </div>

          <div>
            <label
              htmlFor={`unidade-${index}`}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Unidade
            </label>
            <UnidadeSelectorAvancado
              unidade={produto.unidade}
              onChange={handleUnidadeChange}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor={`embalagem-${index}`}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Itens por embalagem (opcional)
          </label>
          <input
            type="number"
            name="embalagem"
            id={`embalagem-${index}`}
            value={produto.embalagem || ""}
            onChange={handleChange}
            min="1"
            step="1"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white"
            placeholder="Ex: 6 (para um pack com 6 unidades)"
          />
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Deixe em branco para produtos individuais
          </p>
        </div>
      </div>
    </div>
  );
}
