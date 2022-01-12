import React, { useState, useEffect } from "react";
import Context from "./Context";
import { getIsMatch, getGaveMatch } from "./../services/api-services";

const GlobalState = (props) => {
  const [isMatch, setIsMatch] = useState("");
  const [listMatched, setListMatched] = useState([]);
  const [changeView, setChangeView] = useState(false);

  useEffect(() => {
    getGaveMatch(setListMatched);
  }, []);

  useEffect(() => {
    getIsMatch(setIsMatch, isMatch);
  }, []);

  const data = {
    isMatch,
    setIsMatch,
    listMatched,
    setListMatched,
    changeView,
    setChangeView,
  };

  return <Context.Provider value={data}>{props.children}</Context.Provider>;
};
export default GlobalState;
