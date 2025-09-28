import { AddItem } from "@/sectons/AddItem.tsx";
import { Header } from "../components/header.tsx";

export default function Home() {
  return (
    <div>
      <Header />

      <section className="mt-6">
        <AddItem />
      </section>
    </div>
  );
}