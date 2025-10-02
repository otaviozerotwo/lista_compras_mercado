import type { ShoppingItem, ShoppingListContextType } from "@/types/shopping";
import { createContext, useContext, useState } from "react";

const ShoppingListContext = createContext<ShoppingListContextType | undefined>(undefined);

export const ShoppingListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  const addItem = (description: string) => {
    const newItem: ShoppingItem = {
      id: Date.now().toString(),
      description,
      completed: false,
    };
    setItems(prev => [...prev, newItem]);
  };

  const editItem = (id: string, newDescription: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, description: newDescription }: item
      )
    );
  };

  const toggleItem = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, completed: !item.completed }: item
      )
    );
  };

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <ShoppingListContext.Provider value={{ items, addItem, editItem, toggleItem, deleteItem }}>
      {children}
    </ShoppingListContext.Provider>
  );
};

export const useShoppingList = () => {
  const context = useContext(ShoppingListContext);
  if (!context) {
    throw new Error('useShoppingList must be used within a ShoppingListProvider');
  }
  return context;
};