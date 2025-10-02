import { AddItem } from "@/components/AddItem.tsx";
// @ts-ignore
import { Header } from "../components/Header.tsx";
import { ShoppingList } from "@/components/ShoppingList.tsx";

export default function Home() {
  return (
    <div>
      <Header />
      <AddItem />
      <ShoppingList />
    </div>
  );
}