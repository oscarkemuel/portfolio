import styled from 'styled-components';

interface NavItemProps {
  isActive?: boolean;
}

export const Container = styled.header`
  background: var(--background-card);
  opacity: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem;

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
    justify-content: center;
    margin-bottom: 0;
    padding: 0;
  }

  @media(max-width: 768px){
    nav {
      display: none;
    }
    .bars{
      display: block;
    }
  }

  @media(max-width: 890px){
    padding: 1rem;
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
        background-color: var(--background-card);
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
  margin: 0 1rem;
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
`;