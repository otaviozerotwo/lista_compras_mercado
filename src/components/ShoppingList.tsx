import { useShoppingList } from "@/contexts/ShoppingListContext";
import { CheckCheck, CheckCircle, Clock, ShoppingBasket } from "lucide-react";
import { Item } from "./item";
import { Container } from "./Container";
// @ts-ignore
import { EmptyList } from "./EmptyList";

export function ShoppingList() {
  const { items } = useShoppingList();

  const pendingItems = items.filter(item => !item.completed);
  const completedItems = items.filter(item => item.completed);

  return (
    <Container>
      <div>
        {/* Lista de pendentes */}
        <div>
          <div className="flex items-center gap-3 mb-4 mt-6">
            <Clock color="#FFF" className="bg-orange-500 rounded-full" />
            <h2 className="text-lg font-semibold">Itens Pendentes</h2>
            <span className="text-orange-800 bg-orange-100 px-2 rounded-full">{pendingItems.length}</span>
          </div>

          {pendingItems.map(item => (
            <Item key={item.id} item={item} />
          ))}
          {pendingItems.length === 0 && (
            <div className="my-12">
              <EmptyList
                icon={ShoppingBasket}
                iconProps={{ size:54 }}
                label="Nenhum item pendente"
              />
            </div>
          )}
        </div>
        
        {/* Lista de comprados */}
        <div>
          <div className="flex items-center gap-3 mb-4 mt-6">
            <CheckCircle color="#FFF" className="bg-green-500 rounded-full" />
            <h2 className="text-lg font-semibold">Itens Comprados</h2>
            <span className="text-green-800 bg-green-100 px-2 rounded-full">{completedItems.length}</span>
          </div>

          {completedItems.map(item => (
            <Item key={item.id} item={item} />
          ))}
          {completedItems.length === 0 && (
            <div className="my-12">
            <EmptyList
              icon={CheckCheck}
              iconProps={{ size:54 }}
              label="Nenhum item comprado ainda"
            />
          </div>
          )}
        </div>
      </div>
    </Container>
  );
}