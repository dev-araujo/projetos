import { usePokemon } from "../../store/store";
import { useObservableState } from "observable-hooks";
import { useNavigate } from "react-router";
import Drawer from "@mui/material/Drawer";

import { goToPokemonDetails } from "../../routes/Coordinator";
import { pokeImage } from "../../constant/url";

import NotHaveAny from "../../assets/not_found.png";
import "./styles.scss";

function Modal({ open, close }: ModalProps) {
  const navigate = useNavigate();
  const { deck$, openModal$ } = usePokemon();
  const deck = useObservableState(deck$, []);
  const closeModal = useObservableState(openModal$, false);

  return (
    <Drawer anchor={"right"} open={open} onClose={close}>
      <section className="modal">
        <div className="modal__header">
          <div className="modal__close" onClick={() => openModal$.next(!closeModal)}>
            X
          </div>
          <div className="modal__title">
            <h2>Pokemons Capturados</h2>
          </div>
        </div>
        <section className="modal__captured">
          {deck.length === 0 ? (
            <div className="modal__not-found">
              <img src={NotHaveAny} alt={"psyduck confused"} />
              <h3>Nenhum Pokemon Capturado</h3>
            </div>
          ) : (
            deck.map((p) => (
              <div key={p.id} className="modal__pokemon">
                <img
                  onClick={() => goToPokemonDetails(navigate, p.id)}
                  className="modal__figure"
                  src={`${pokeImage}${p.id}.svg`}
                  alt={p.name}
                />
                <div>{p.name}</div>
              </div>
            ))
          )}
        </section>
      </section>
    </Drawer>
  );
}

export default Modal;
