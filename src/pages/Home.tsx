import { AddItem } from "@/sections/AddItem.tsx";
import { Header } from "../components/header.tsx";
import { List } from "@/sections/List.tsx";
import { CheckCheck, CheckCircle, Clock, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { EmptyList } from "@/components/emptyList.tsx";
import { Item } from "@/components/item.tsx";

export default function Home() {
  const [pendingItems, setPendingItems] = useState(4);
  const [purchasedItems, setPurchasedItems] = useState(0);

  const items = [
    { id: 1, text: "Leite integral" },
    { id: 2, text: "Pão francês" },
    { id: 3, text: "Arroz branco 5kg" },
    { id: 4, text: "Banana prata" },
  ];

  return (
    <div>
      <Header />

      <section className="mt-6">
        <AddItem />
      </section>

      <section className="mt-6">
        <List 
          title="Items Pendentes"
          icon={Clock}
          iconColor="bg-orange-500"
          countItemTextColor="text-orange-800"
          countItemBgColor="bg-orange-100"
          countItem={pendingItems}
        />

        {pendingItems === 0
          ? <div className="flex items-center justify-center h-60">
            <EmptyList 
              icon={ShoppingBasket}
              iconProps={{ size: 54 }}
              label="Nenhum item pendente"
            />
          </div>
          : <Item items={items}/>
        }
      </section>

      <section className="mt-6">
        <List 
          title="Items Comprados"
          icon={CheckCircle}
          iconColor="bg-green-500"
          countItemTextColor="text-green-800"
          countItemBgColor="bg-green-100"
          countItem={purchasedItems}
        />

        {purchasedItems === 0
          ? <div className="flex items-center justify-center h-60">
            <EmptyList 
              icon={CheckCheck}
              iconProps={{ size: 54 }}
              label="Nenhum item comprado ainda"
            />
          </div>
          : null 
        }
      </section>
    </div>
  );
}