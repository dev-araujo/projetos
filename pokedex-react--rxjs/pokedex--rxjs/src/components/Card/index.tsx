import { useState } from "react";
import { usePokemon } from "../../store/store";
import { pokeImage } from "../../constant/url";

import Pokeball from "../../assets/pokeball.png";

import "./styles.scss";

function Card({ pokeName, pokeId, pokeDetailGo }: PokeProps) {
  const [pokeInfo, setPokeInfo] = useState<boolean>(false);
  const { captured$ } = usePokemon();

  return (
    <section key={pokeName} className="poke-card">
      <figure className="poke-card__figure">
        <img
          className={
            captured$.value.includes(pokeId) ? "poke-card__captured" : "poke-card__no-captured"
          }
          onClick={() => {
            captured$.value.includes(pokeId)
              ? captured$.next(captured$.value.filter((id) => id !== pokeId))
              : captured$.next([...captured$.value, pokeId]);
          }}
          src={captured$.value.includes(pokeId) ? Pokeball : `${pokeImage}${pokeId}.svg`}
          alt={pokeName}
        />
      </figure>

      <section className="poke-card__footer">
        {pokeInfo ? (
          <p
            className="poke-card__pokedetails"
            onMouseLeave={() => setPokeInfo(!pokeInfo)}
            onClick={pokeDetailGo}
          >
            Detalhes
          </p>
        ) : (
          <p onMouseOver={() => setPokeInfo(!pokeInfo)} className="poke-card__pokename">
            {pokeName}
          </p>
        )}
      </section>
    </section>
  );
}

export default Card;
