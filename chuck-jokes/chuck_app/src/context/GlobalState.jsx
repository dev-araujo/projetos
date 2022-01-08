import { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { getRandomJokes } from "../services/apis";

const GlobalState = (props) => {
  const [jokes, setJokes] = useState({});

  useEffect(() => {
    getRandomJokes(setJokes);
  }, [setJokes]);

  const data = {
    jokes,
    setJokes,
  };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
