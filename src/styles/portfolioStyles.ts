import styled from 'styled-components';

interface cardProps {
  language: string;
}

interface badgeButtonProps {
  isActive?: boolean;
}

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 140px !important;
  padding: 100px 4rem;

  h2 {
    font-size: 16px;
    color: var(--red);
  }
`;

export const BadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 1rem;
`;

export const BadgeButton = styled.button<badgeButtonProps>`
  width: 80px;
  padding: 6px 0;
  border-radius: 10px;
  background-color: var(--title);
  border: 2px solid transparent;
  border-color: ${({ isActive }) => isActive ? 'var(--blue)' : 'var(--title)'};
`

export const PortfolioContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: var(--background);
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

    return 'var(--red)'
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
        color: var(--red);
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a, button {
      background: transparent;
      color: var(--white);
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

    /* .icons {
      display: flex; */

`;

