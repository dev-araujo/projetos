import Drawer from "@mui/material/Drawer";
import {Deck} from '../index'

function Modal({ open, close }: ModalProps) {
  return (
    <Drawer anchor={"right"} open={open} onClose={close}>
      <Deck />
    </Drawer>
  );
}

export default Modal;
