import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
// @ts-ignore
import { Container } from "@/components/Container";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Plus } from "lucide-react";
import { useShoppingList } from "@/contexts/ShoppingListContext";
import React, { useState } from "react";

export function AddItem() {
  const { addItem } = useShoppingList();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addItem(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <Container className="mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Adicionar Item</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2">
              <Input 
                type="text" 
                placeholder="Digite o nome do item" 
                className="h-10" 
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button 
                type="submit"
                variant="default" 
                size="lg" 
                className="h-10 bg-blue-600 cursor-pointer"
              >
                <Plus color="#FFF" />
                Adicionar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}