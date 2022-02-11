import { useState, useMemo } from "react";

import { BehaviorSubject, combineLatestWith, map } from "rxjs";

import { useObservableState } from "observable-hooks";
import { useNavigate } from "react-router";

import { goToPokemonDetails } from "../../routes/Coordinator";
import { usePokemon } from "../../store/store";

import { Card, Search } from "../../components/index";
import Logo from "../../assets/logo.svg";

import "./styles.scss";

function Initial() {
  const [page, setPage] = useState({
    initial: 0,
    end: 12,
  });
  let navigate = useNavigate();
  const { pokemon$ } = usePokemon();
  const search$ = useMemo(() => new BehaviorSubject(""), []);
  const pokemon = useObservableState(pokemon$, []);

  const [filterPokemon] = useObservableState(
    () =>
      pokemon$.pipe(
        combineLatestWith(search$),
        map(([pokemon, search]) =>
          pokemon.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
        )
      ),
    []
  );

  const less = (e: React.FormEvent) => {
    e.preventDefault();

    if (page.initial > 0) {
      setPage({ ...page, initial: page.initial - 12, end: page.end - 12 });
    }
  };

  const more=(e: React.FormEvent)=> {
    e.preventDefault();
    if (page.end < 150) setPage({ ...page, initial: page.initial + 12, end: page.end + 12 });
  }

  return (
    <form>
      <figure>
        <img src={Logo} alt="logo" />
      </figure>
      <Search
        searchValue={search$}
        onChangeCall={(e: React.ChangeEvent<HTMLInputElement>) => search$.next(e.target.value)}
      />

      <section className="poke-list">
        {filterPokemon
          .map((p) => (
            <div key={p.name}>
              <Card
                pokeName={p.name}
                pokeId={p.id}
                pokeDetailGo={() => goToPokemonDetails(navigate, p.id)}
              />
            </div>
          ))
          .slice(page.initial, page.end)}
      </section>
      <footer>
        <button onClick={less}>Menos</button>
        <button onClick={more}>Mais</button>
      </footer>
    </form>
  );
}

export default Initial;
