import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  img {
    height: 26rem;
    width: 18rem;

    @media (max-width: 380px) {
      height: 22rem;
    }
  }
`;

export const Information = styled.section`
  padding-top: 1rem;
  width: 18rem;
  height: 4.5rem;
  max-height: 4.5rem;
  text-align: justify;

  h1 {
    font-size: 1.2rem;
  }
`;
export const Loading = styled.section`
  width: 18rem;
  height:26rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
