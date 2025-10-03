// import { FilePenLine, Trash2 } from "lucide-react";
// import { Container } from "./container";
// import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import type { ShoppingItem } from "@/types/shopping";
import React, { useState } from "react";
import { useShoppingList } from "@/contexts/ShoppingListContext";

interface ItemProps {
  item: ShoppingItem;
}

export function Item({ item }: ItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(item.description);

  const { toggleItem, deleteItem, editItem } = useShoppingList();

  const handleToggle = () => {
    toggleItem(item.id);
  };

  const handleDelete = () => {
    deleteItem(item.id);
  };

  const handleEdit = () => {
    if (isEditing) {
      if (editDescription.trim() && editDescription !== item.description) {
        editItem(item.id, editDescription.trim());
      } else {
        setEditDescription(item.description);
      }
    }
    setIsEditing(!isEditing);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleEdit();
    } else if (e.key === "Escape") {
      setEditDescription(item.description);
      setIsEditing(false);
    }
  };

  const handleBlur = () => {
    if (isEditing) {
      handleEdit();
    }
  };

  return (
    <div className={`flex items-center justify-between p-3 border rounded-lg mb-2 transition-all duration-200 ${
      item.completed 
        ? 'bg-gray-50 border-gray-200' 
        : 'bg-white border-gray-300'
    }`}>
      {/* Checkbox e Texto/Input */}
      <div className="flex items-center flex-1 min-w-0">
        <Checkbox 
          checked={item.completed}
          onCheckedChange={handleToggle}
          className="h-5 w-5 mr-3 rounded-full border-2 border-gray-300"
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={handleBlur}
            autoFocus
            className="flex-1 px-2 py-1 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          <span
            className={`flex-1 truncate ${
              item.completed
                ? 'line-through text-gray-500'
                : 'text-gray-900'
            } cursor-pointer`}
            onDoubleClick={() => setIsEditing(true)}
            title="Duplo clique para editar"
          >
            {item.description}
          </span>
        )}
      </div>

      {/* Botões de Ação */}
      <div className="flex items-center gap-2 ml-3 flex-shrink-0">
        {/* Botão Editar/Salvar */}
        <button
          onClick={handleEdit}
          className={`p-2 rounded-lg transition-colors ${
            isEditing
              ? 'bg-green-500 text-white hover:bg-green-600'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          title={isEditing ? 'Salvar' : 'Editar'}
        >
          {isEditing ? (
            <CheckIcon className="h-4 w-4" />
          ) : (
            <EditIcon className="h-4 w-4" />
          )}
        </button>

        {/* Botão Excluir */}
        <button
          onClick={handleDelete}
          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          title="Excluir item"
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

// Ícones (mantenha os mesmos do exemplo anterior)
function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );
}