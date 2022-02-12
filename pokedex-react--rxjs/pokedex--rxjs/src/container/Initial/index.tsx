import { useState, useMemo } from "react";
import { BehaviorSubject, combineLatestWith, map } from "rxjs";
import { useObservableState } from "observable-hooks";
import { usePokemon } from "../../store/store";
import { go, back } from "../../utils/changePage";
import { Search, Banner, List, FooterPaginate } from "../../components/index";
import Logo from "../../assets/logo.svg";
import NotFound from "../../assets/not_found.png";

import "./styles.scss";

function Initial() {
  const [page, setPage] = useState({
    initial: 0,
    end: 12,
  });
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

  return (
    <form className="initial">
      <Banner image={Logo} />
      <Search
        searchValue={search$.value}
        onChangeCall={(e: React.ChangeEvent<HTMLInputElement>) => search$.next(e.target.value)}
      />
      <section className="initial__list">
        {filterPokemon.length > 0 ? (
          <List
            pokemons={
              search$.value.length <= 0
                ? filterPokemon.slice(page.initial, page.end)
                : filterPokemon.slice(0, 150)
            }
          />
        ) : (
          <img  src={NotFound} alt={"not found"} />
        )}
      </section>
      <FooterPaginate
        onClickBack={(e: React.FormEvent) => back(e, setPage, page)}
        onClickGo={(e: React.FormEvent) => go(e, setPage, page)}
      />
    </form>
  );
}

export default Initial;
