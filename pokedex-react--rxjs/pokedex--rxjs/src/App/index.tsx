import { PokemonProvider } from "../store/store";

import { Deck, Search } from "../components";
import "./styles.scss";

function App() {
  return (
    <PokemonProvider>
      <main>
        <Search />
        {/* <Deck /> */}
      </main>
    </PokemonProvider>
  );
}

export default App;
