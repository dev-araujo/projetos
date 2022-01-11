import { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { api_getCategories, api_getRandomJokes } from "../services/apis";

const GlobalState = (props) => {
  const [jokes, setJokes] = useState('');
  const [search,setSearch] = useState('')
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api_getCategories(setCategories);
  }, []);

  const data = {
    jokes,
    setJokes,
    categories,
    search,setSearch,
  };
  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
