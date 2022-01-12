import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    hsla(197, 100%, 63%, 1) 0%,
    hsla(294, 100%, 55%, 1) 100%
  );

  @media (max-width: 380px) {
    overflow-y: hidden;
  }
`;
export const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 42rem;
  width: 18rem;
  padding: 1.5rem;

  border-radius: 1rem;
  background-color: white;
  box-shadow: 10px 10px 16px 0px rgba(0, 0, 0, 0.75);

  @media (max-width: 380px) {
    height: 36rem;
  }
`;
