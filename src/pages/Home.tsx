import { AddItem } from "@/sections/AddItem.tsx";
import { Header } from "../components/header.tsx";
import { ListItem } from "@/sections/ListItem.tsx";
import { CheckCheck, CheckCircle, Clock, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { EmptyList } from "@/components/emptyList.tsx";

export default function Home() {
  const [pendingItens, setPendingItens] = useState(0);
  const [purchasedItens, setPurchasedItens] = useState(0);

  return (
    <div>
      <Header />

      <section className="mt-6">
        <AddItem />
      </section>

      <section className="mt-6">
        <ListItem 
          title="Itens Pendentes"
          icon={Clock}
          iconColor="bg-orange-500"
          countItemTextColor="text-orange-800"
          countItemBgColor="bg-orange-100"
          countItem={pendingItens}
        />

        {pendingItens === 0
          ? <div className="flex items-center justify-center h-60">
            <EmptyList 
              icon={ShoppingBasket}
              iconProps={{ size: 54 }}
              label="Nenhum item pendente"
            />
          </div>
          : <span></span> 
        }
      </section>

      <section className="mt-6">
        <ListItem 
          title="Itens Comprados"
          icon={CheckCircle}
          iconColor="bg-green-500"
          countItemTextColor="text-green-800"
          countItemBgColor="bg-green-100"
          countItem={purchasedItens}
        />

        {purchasedItens === 0
          ? <div className="flex items-center justify-center h-60">
            <EmptyList 
              icon={CheckCheck}
              iconProps={{ size: 54 }}
              label="Nenhum item comprado ainda"
            />
          </div>
          : <span></span> 
        }
      </section>
    </div>
  );
}