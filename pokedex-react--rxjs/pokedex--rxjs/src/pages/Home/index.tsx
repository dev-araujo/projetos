import { useState } from "react";
import Button from "@mui/material/Button";
import { toggleDrawer } from "../../utils/toggleDrawer";
import { SearchList, Modal } from "../../components/index";

function Home() {
  const [capturedPokemons, setCapturedPokemons] = useState(false);

  return (
    <section>
      <SearchList />
      <Button onClick={toggleDrawer("right", true, setCapturedPokemons)}>
        {"See Catched Pokemon"}
      </Button>
      <Modal
        open={capturedPokemons}
        close={toggleDrawer("right", false, setCapturedPokemons)}
      />
    </section>
  );
}

export default Home;
