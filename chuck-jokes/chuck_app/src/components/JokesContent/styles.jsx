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
    width: 50%;
    background: #ffefd2;
  }

  .visible{
      display:auto;
  }

  .invisible{
      display:none;
  }
`;

export const List = styled.li`
  background: none;
  margin-top: 1rem;
  color: #7a3004;
`;
