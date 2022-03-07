import styled from 'styled-components';

interface NavItemProps {
  isActive?: boolean;
}

export const Container = styled.header`
  background: rgba(33,33,33,.7);
  opacity: 1;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 4rem;
  height: 90px;

  h1{
    margin-bottom: 0;
    margin-right: 20px;
    font-size: 20px;
    font-weight: bold;
    color: var(--red);
  }

  .bars{
    display: none;
    background-color: transparent;
    color: var(--text);
    font-size: 20px;
  }

  ul {
    display: flex;
    font-weight: bold;
    align-items: center;
    margin-bottom: 0;
  }

  @media(max-width: 990px){
    h1 {
      display: none;
    }
  }

  @media(max-width: 768px){
    h1{
      display: block;
    }
    nav {
      display: none;
    }
    .bars{
      display: block;
    }
  }

  @media(max-width: 890px){
    padding: 0 2rem;
  }
`;

export const CanvasBody = styled.div`
  color: var(--text);

  ul {
    display: flex;
    font-weight: bold;
    flex-direction: column;
    gap: 1rem;
    
    li {
      font-size: 1.1rem;
      margin-right: 3.5rem;
      list-style: none;

      a{
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        background-color: var(--background-dark);
        width: 100%;
        padding: 1rem;
        border-radius: 10px;

        svg {
          margin-right: 8px;
        }
      }

      :hover {
          color: var(--text-highlight);
        }
    }
  }
`;

export const NavItem = styled.li<NavItemProps>`
  font-size: 1.1rem;
  margin-right: 3.5rem;
  list-style: none;

  a{
    color: ${({isActive}) => isActive ? 'var(--text-highlight)' : 'var(--text-dark)'};
    display: flex;
    align-items: center;
    text-decoration: none;

    svg {
      margin-right: 8px;
    }

    :hover {
      color: var(--text-highlight);
    }
  }
}

:last-child {
  a{
    background-color: var(--red);
    color: var(--white);
    padding: 1rem 2rem;
    border-radius: 25px;
  }
`