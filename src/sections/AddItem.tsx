import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Container } from "@/components/container.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Plus } from "lucide-react";

export function AddItem() {
  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>Adicionar Item</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex items-center gap-2">
              <Input 
                type="text" 
                placeholder="Digite o nome do item" 
                className="h-10" 
                required
              />
              <Button 
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