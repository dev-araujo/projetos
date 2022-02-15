import { createContext, useContext } from "react";
import { BehaviorSubject, map, combineLatestWith } from "rxjs";

export const rawPokemon$ = new BehaviorSubject<Pokemon[]>([]);
export const captured$ = new BehaviorSubject<number[]>([]);
export const paginate$ = new BehaviorSubject<ControlPages | any>({ initial: 0, end: 15 });
export const openModal$ = new BehaviorSubject<boolean>(false);

const pokemonWithPower$ = rawPokemon$.pipe(
  map((pokemon) =>
    pokemon.map((p) => ({
      ...p,
      captured: false,
      power: p.hp + p.attack + p.defense + p.special_attack + p.special_defense + p.speed,
    }))
  )
);

export const pokemon$ = pokemonWithPower$.pipe(
  combineLatestWith(captured$),
  map(([pokemon, captured]) =>
    pokemon.map((p) => ({
      ...p,
      captured: captured.includes(p.id),
    }))
  )
);

export const deck$ = pokemon$.pipe(map((pokemon) => pokemon.filter((p) => p.captured)));

fetch("data/pokemon-simplified.json")
  .then((res) => res.json())
  .then((data) => rawPokemon$.next(data.splice(0, 151)));

// -- CONTEXT

const PokemonContext = createContext({
  pokemon$,
  captured$,
  deck$,
  paginate$,
  openModal$,
});

export const usePokemon = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider: React.FunctionComponent = ({ children }) => (
  <PokemonContext.Provider value={{ pokemon$, captured$, deck$, paginate$, openModal$ }}>
    {children}
  </PokemonContext.Provider>
);
