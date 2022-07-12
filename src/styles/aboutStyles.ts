import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  background-color: var(--background);
  width: 100%;
  padding: 4rem 4rem 0 4rem;

  &:last-child {
    padding-top: 0;
    padding-bottom: 4rem;
  }

  @media(max-width: 890px){
    padding: 2rem;
  }

  h2 {
    max-width: 140px;
    font-size: 22px;
    font-weight: bold;
    color: var(--red);
    padding-bottom: 5px;
    border-bottom: 1px solid var(--green);
    margin-bottom: 0.5rem;
  }

  .about {
    display: flex;
    flex-direction: column;

    p {
      margin-top: 10px;
      max-width: 800px;
      color: var(--text-dark);

      b {
        color: var(--green);
      }
    }

    margin-bottom: 4rem;
  }

  .experience {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    .cards {
      max-width: 600px;
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;
