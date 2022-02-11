import { usePokemon } from "../../store/store";
import { useObservableState } from "observable-hooks";
import Drawer from "@mui/material/Drawer";

import { pokeImage } from "../../constant/url";

function Modal({ open, close }: ModalProps) {
  const { deck$ } = usePokemon();
  const deck = useObservableState(deck$, []);

  return (
    <Drawer anchor={"right"} open={open} onClose={close}>
      <section>
        <h4>Deck</h4>
        <section>
          {deck.map((p) => (
            <div key={p.id}>
              <img src={`${pokeImage}${p.id}.png`} alt={p.name} />
              <div>
                <div>{p.name}</div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </Drawer>
  );
}

export default Modal;
