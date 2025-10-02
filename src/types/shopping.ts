export interface ShoppingItem {
  id: string;
  description: string;
  completed: boolean;
}

export interface ShoppingListContextType {
  items: ShoppingItem[];
  addItem: (description: string) => void;
  editItem: (id: string, newDescription: string) => void;
  toggleItem: (id: string) => void;
  deleteItem: (id: string) => void;
}