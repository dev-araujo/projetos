import styled from "styled-components";

export const Container = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 2px #762d93;
`;

export const LogoImage = styled.img`
  width: 60%;
  cursor:pointer;

`;

export const ClearMatchesButton = styled.button`
  background-color: white;
  border: none;
  outline: none;
  color: #48a498;
  font-weight: bolder;
  cursor:pointer;
`;

export const MatchesButton = styled.button`
  border: none;
  outline: none;
  background-color: white;
  font-weight: bolder;
  color: #762d93;
  cursor:pointer;

`;
