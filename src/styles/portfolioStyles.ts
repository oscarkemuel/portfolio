import styled from 'styled-components';

interface cardProps {
  language: string;
}

export const PortfolioContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: var(--background);
  padding-top: 140px !important;
  width: 100%;
  padding: 100px 4rem;

  @media(max-width: 890px){
    padding: 100px 2rem;
    height: 130vh;
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div<cardProps>`
  background: #2b2b2b;
  box-shadow: 0 1.6rem 2.4rem rgb(0 0 0 / 25%);
  border-radius: 0.8rem;
  border-bottom: 10px solid ${({language}) => {
    if(language === 'TypeScript') {
      return '#2B72BF'
    } else if (language === 'JavaScript'){
      return '#EFD81D'
    }

    return 'var(--green)'
  }};
  width: 300px;
  min-height: 300px;
  padding: 1rem 1rem 1rem 1.5rem;
  margin-bottom: 2.7rem;
  margin-right: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    
    p {
      font-size: 18px;
      font-weight: bold;
      
      b{
        color: var(--green);
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-size: 28px;
      margin-right: 10px;
    }
  }
  
  .about {  
    display: flex;
    color: var(--text-dark);
    font-size: 12px;

    .image {
      margin-top: 5px;
      margin-right: 10px;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      background-size: cover;
      background-repeat: no-repeat
    }
  }
`;

