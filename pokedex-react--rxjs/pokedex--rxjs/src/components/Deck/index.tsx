import { usePokemon } from "../../store/store";
import { useObservableState } from "observable-hooks";

function Deck() {
  const { deck$ } = usePokemon();
  const deck = useObservableState(deck$, []);

  
  return (
    <section>
      <h4>Deck</h4>
      <section>
        {deck.map((p) => (
          <div key={p.id}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
              alt={p.name}
            />
            <div>
              <div>{p.name}</div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Deck;
