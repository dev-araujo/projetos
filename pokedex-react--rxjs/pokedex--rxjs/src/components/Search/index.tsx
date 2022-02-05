import { useMemo } from "react";
import { useObservableState } from "observable-hooks";
import { BehaviorSubject, combineLatestWith, map } from "rxjs";
import { usePokemon } from "../../store/store";

import Pokeball from "../../assets/pokeball.png";
import PokeballShape from "../../assets/pokeball_shape.jpg";

function Search() {
  const { pokemon$, captured$ } = usePokemon();
  const search$ = useMemo(() => new BehaviorSubject(""), []);
  const pokemon = useObservableState(pokemon$, []);

  const [filterPokemon] = useObservableState(
    () =>
      pokemon$.pipe(
        combineLatestWith(search$),
        map(([pokemon, search]) =>
          pokemon.filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          )
        )
      ),
    []
  );

  return (
    <form>
      <input
        type="search"
        value={search$.value}
        onChange={(e) => search$.next(e.target.value)}
      />

      <section>
        {filterPokemon.map((p) => {
          return (
            <div key={p.name}>
              <img
                onClick={() => {
                  if (captured$.value.includes(p.id)) {
                    captured$.next(captured$.value.filter((id) => id !== p.id));
                  } else {
                    captured$.next([...captured$.value, p.id]);
                  }
                }}
                className={"pokeball"}
                src={captured$.value.includes(p.id) ? Pokeball : PokeballShape}
                alt={"pokeball"}
              />
              <strong>{p.name}</strong>
            </div>
          );
        })}
      </section>
    </form>
  );
}

export default Search;
