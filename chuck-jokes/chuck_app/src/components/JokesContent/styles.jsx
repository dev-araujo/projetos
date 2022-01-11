import styled from "styled-components";
export const Container = styled.section`
  width: 34rem;
  height: 32.5rem;
  background: #ffefd2;
  border-radius: 10px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 20rem;
    background: #ffefd2;
  }
  .visible {
    display: auto;
  }

  .invisible {
    display: none;
  }

  @media (max-width: 900px) {
    padding: 1rem;
    width: 30rem;
    overflow: auto;
  }

  @media (max-width: 490px) {
    border-radius: 0;
    width: 91%;
    
    
  }
`;

export const List = styled.li`
  background: none;
  margin-top: 1rem;
  color: #7a3004;
`;
