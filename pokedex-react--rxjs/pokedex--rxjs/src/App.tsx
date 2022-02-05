import { PokemonProvider } from "./store/store";

import { Deck, Search } from "./components";
import "./App.css";

function App() {
  return (
    <PokemonProvider>
      <main style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Search />
        <Deck />
      </main>
    </PokemonProvider>
  );
}

export default App;
