import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--background);
  width: 100%;
  padding: 4rem 0;

  @media(max-width: 890px){
    padding: 100px 2rem;
  }

  h2 {
    text-align: center;
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
    align-items: center;
    justify-content: center;

    p {
      margin-top: 10px;
      max-width: 800px;
      text-align: center;
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
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    .cards {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;
