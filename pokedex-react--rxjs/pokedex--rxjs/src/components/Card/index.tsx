import { usePokemon } from "../../store/store";
import Pokeball from "../../assets/pokeball.png";
import "./styles.scss";

interface PokeProps {
  pokeName: string;
  pokeId: number;
}

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
          if (captured$.value.includes(pokeId)) {
            captured$.next(captured$.value.filter((id) => id !== pokeId));
          } else {
            captured$.next([...captured$.value, pokeId]);
          }
        }}
        src={
          captured$.value.includes(pokeId)
            ? Pokeball
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`
        }
        alt={pokeName}
      />
      <strong>detalhes</strong> <strong>{pokeName}</strong>
    </section>
  );
}

export default Card;
