import styled from 'styled-components';

interface cardProps {
  language?: string;
}

interface badgeButtonProps {
  isActive?: boolean;
}

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

export const PortfolioContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: var(--background);
  padding: 4rem 0;
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 290px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1.6rem 2.4rem rgb(0 0 0 / 25%);
  margin-bottom: 2.7rem;
  margin-right: 1rem;
  margin-left: 1rem;

  img {
    width: 100%;
    height: 200px;
    border-radius: 0.8rem 0.8rem 0 0;
  }
`

export const CardContent = styled.div<cardProps>`
  background: var(--background-card);
  border-radius:  0 0 0.8rem 0.8rem;
  /* border-bottom: 10px solid ${({language}) => {
    if(language === 'TypeScript') {
      return '#2B72BF'
    } else if (language === 'JavaScript'){
      return '#EFD81D'
    }

    return 'var(--red)'
  }}; */
  width: 290px;
  flex: 1;
  padding: 1rem 1rem 1rem 1.5rem;

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
        color: var(--text);
      }
    }
  }

  .description {
    margin: 1rem 0;
    color: var(--text-dark);
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 16px;     /* fallback */
   max-height: 50px;      /* fallback */
   -webkit-line-clamp: 3; /* number of lines to show */
   -webkit-box-orient: vertical;
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

    img {
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

