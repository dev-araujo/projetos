import { usePokemon } from "../../store/store";
import { pokeImage } from "../../constant/url";

import Tooltip from "@mui/material/Tooltip";

import Pokeball from "../../assets/pokeball.png";

import "./styles.scss";

function Card({ pokeName, pokeId, pokeDetailGo }: PokeProps) {
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
        <Tooltip
          title={
            <p className="poke-card__pokedetails" onClick={pokeDetailGo}>
              DETALHES
            </p>
          }
          placement="top-start"
        >
          <div onClick={pokeDetailGo} className="poke-card__pokedetails">
            {pokeName}
          </div>
        </Tooltip>
      </section>
    </section>
  );
}

export default Card;
