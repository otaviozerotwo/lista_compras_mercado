import { Container } from "./container";

export function Header() {
  return (
    <header className="w-full border-b border-b-gray-300">
      <Container className="flex justify-between items-center">
        <div className="h-16 flex items-center gap-3">
          <img className="h-12" src="/carrinho.png" alt="Carrinho de compras" />
          <h1 className="text-lg text-gray-900 font-bold">Compras Mercado</h1>
        </div>
        <span className="text-gray-500">0 itens</span>
      </Container>
    </header>
  );
}