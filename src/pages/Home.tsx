import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Header } from "../components/header.tsx";
import { Container } from "@/components/container.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="mt-6">
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
                    size="sm" 
                    className="h-10 cursor-pointer"
                  >
                    <Plus color="#FFF" />
                    Adicionar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </Container>
      </div>
    </div>
  );
}