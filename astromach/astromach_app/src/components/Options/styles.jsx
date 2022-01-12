import styled from 'styled-components'

export const Container = styled.section`
  width: 18rem;
  height:8rem;
  display: flex;
  justify-content: space-around;
  align-items:flex-end;

  @media(max-width:380px){
    height:6rem;
  }
`;
