import { usePokemon } from "../../store/store";
import { pokeImage } from "../../constant/url";
import Pokeball from "../../assets/pokeball.png";
import "./styles.scss";

function Card({ pokeName, pokeId }: PokeProps) {
  const { captured$ } = usePokemon();

  return (
    <section key={pokeName} className="poke-card">
      <img
        className={
          captured$.value.includes(pokeId)
            ? "poke-card__captured"
            : "poke-card__no-captured"
        }
        onClick={() => {
          captured$.value.includes(pokeId)
            ? captured$.next(captured$.value.filter((id) => id !== pokeId))
            : captured$.next([...captured$.value, pokeId]);
        }}
        src={
          captured$.value.includes(pokeId)
            ? Pokeball
            : `${pokeImage}${pokeId}.png`
        }
        alt={pokeName}
      />
      <strong>detalhes</strong> <strong>{pokeName}</strong>
    </section>
  );
}

export default Card;
