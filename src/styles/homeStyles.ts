import styled from 'styled-components';

interface cardProps {
  color: string;
}

export const Home = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: var(--background);
  width: 100%;
  padding: 4rem 0;

  h1{
    text-align: center;
  }

  img {
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }

  .presentation{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 3.5rem;
      font-weight: bold;
    }

    p{
      text-align: center;
    }
  }

  .description {
    font-size: 1.5rem;
    color: var(--text-dark);

    b {
      color: var(--red);
    }
  }

  .bio {
    margin-top: 2rem;
    font-size: 1.1rem;
    color: #818189;
    max-width: 500px;
  }

  .social {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media(max-width: 890px){
    padding: 90px 2rem;
  }
`;

export const About = styled.section`
  background-color: var(--background);
`;

export const Card = styled.a.attrs(props => ({target: '_blank'}))<cardProps>`
  background-color: ${({color}) => color};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 5px 15px;
  border-radius: 15px;
  border: 1px solid transparent;

  svg {
    margin-right: 10px;
  }

  :hover{
    border-color: var(--white);
    color: var(--white);
  }
`;
