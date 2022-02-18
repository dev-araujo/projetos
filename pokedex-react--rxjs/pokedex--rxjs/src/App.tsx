import { PokemonProvider } from "./store/store";
import Router from "./routes/Router";

import "./App.scss";

function App() {
  return (
    <PokemonProvider>
      <main>
        <Router />
      </main>
    </PokemonProvider>
  );
}

export default App;
