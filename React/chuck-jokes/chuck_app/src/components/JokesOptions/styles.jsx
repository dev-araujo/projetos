import styled from "styled-components";

import { colorsDefault, hoverDefault } from "../../styles/variables";

export const Container = styled.section`
  width: 20rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


`;
export const Options = styled.section`
  width: 20rem;
  height: 14rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Button = styled.p`
  ${colorsDefault}

  height: 1rem;
  border: #cacaca 1px solid;
  border-radius: 4px;
  padding: 0.5rem;
  cursor: pointer;
  margin: 1px;
  :hover {
    ${hoverDefault}
  }
`;

export const RandomButton = styled.p`
  ${hoverDefault}

  cursor:pointer;
  padding: 1rem;
  border-radius: 2px;
  text-align: center;

  :hover {
    ${colorsDefault}

    border: #cacaca 1px solid;
  }
`;
