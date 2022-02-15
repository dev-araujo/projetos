interface Pokemon { // pokemons
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




// pagination
interface ControlPages{
  initial:number;
  end:number;
}

// props paginate
interface PaginateProps {
  onClickGo: any;
  onClickBack: any;
}


// props Card
interface PokeProps {
  pokeName: string;
  pokeId: number;
  pokeDetailGo: any;
}

// props Modal
interface ModalProps {
  open: any;
  close: any;
}

// search
interface SearchProps {
  searchValue: any;
  onChangeCall: any;
}

type Anchor = "right";
