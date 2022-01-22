import styled from "styled-components";

export const Container = styled.div`
  height: 42rem;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Persons = styled.div`
  display: flex;
  padding: 1rem;
  > img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;
