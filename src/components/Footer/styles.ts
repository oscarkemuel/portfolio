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

    a{
      color: var(--red);
      text-decoration: none;
    }
  }
`;
