import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 766px) {
    flex-direction: column-reverse;
    width: 100%;
    height: 80vh;
  }
`;

export const OptionsSide = styled.section`
  padding: 4.5rem;

  @media (max-width: 1014px) {
    padding: 1rem;
  }

  @media (max-width: 900px) {
    padding: 10px;
  }
  @media (max-width: 766px) {
    width: auto;
    max-height:50%;
    padding: 0;
    margin: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
