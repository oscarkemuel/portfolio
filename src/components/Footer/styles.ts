import styled from 'styled-components';

export const Container = styled.footer`
  background: var(--background-card);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  p{
    color: var(--text-dark);
  }

  b:nth-child(1){
    color: var(--blue);
  }

  b:nth-child(2){
    color: var(--red);
  }
`;
