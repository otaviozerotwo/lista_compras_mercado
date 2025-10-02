import { ShoppingListProvider } from "./contexts/ShoppingListContext.js";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <ShoppingListProvider>
      <Home />
    </ShoppingListProvider>
  );
}
