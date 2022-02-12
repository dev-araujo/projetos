interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  power?: number;
  captured?: boolean;
}

interface PokeProps {
  pokeName: string;
  pokeId: number;
  pokeDetailGo: any;
}

interface ModalProps {
  open: any;
  close: any;
}

interface PaginateProps {
  onClickGo: any;
  onClickBack: any;
}

interface SearchProps {
  searchValue: any;
  onChangeCall: any;
}

type Anchor = "right";
