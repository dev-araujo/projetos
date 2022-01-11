import styled from "styled-components";
import {colorsDefault,hoverDefault} from '../../styles/variables'


export const SearchBar = styled.input`
  ${colorsDefault}

  width: 17rem;
  height: 2.5rem;
  border-right: none;
  border-top: solid 1px #cacaca;
  border-bottom: solid 1px #cacaca;
  border-left: solid 1px #cacaca;
  padding: 6px;
  border-radius: 6px 0 0 6px;
  letter-spacing: 2px;
  margin-bottom: 1rem;

  ::-webkit-input-placeholder {
    color: #f5e1bc;
    letter-spacing: 1px;
  }
  :focus {
    outline: none;
    box-shadow: none;
  }
`;
export const ButtonSearch = styled.button`
  ${colorsDefault}

  width: 3rem;
  height: 37.5px;
  border-right: solid 1px #cacaca;
  border-top: solid 1px #cacaca;
  border-bottom: solid 1px #cacaca;
  border-left: none;
  padding: 0.6rem;
  border-radius: 0 4px 4px 0;

  :hover {
    ${hoverDefault}
  }
`;
