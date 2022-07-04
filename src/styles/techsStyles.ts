import styled from 'styled-components';

interface cardProps {
  color: string;
}

export const TechsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-color: var(--background);
  width: 100%;
  padding: 4rem 0;

  @media(max-width: 890px){
    padding: 100px 2rem;
  }
`;

export const Card = styled.div<cardProps>`
  background: var(--background-card);
  box-shadow: 0 1.6rem 2.4rem rgb(0 0 0 / 25%);
  border-radius: 0.8rem;
  border-bottom: 10px solid ${({color}) => color};
  width: 300px;
  min-height: 300px;
  padding: 1.5rem 2rem;
  margin-bottom: 2.7rem;
  margin-right: 1rem;
  margin-left: 1rem;

  .icon {
    background-color: ${({color}) => color};
    padding: 1rem;
    max-width: 65px;
    height: 65px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 40px;
    }
  }

  .title {
    margin: 1rem 0;
    font-weight: bold;
    font-size: 20px;
  }

  ul{
    li{
      font-weight: bold;
      font-size: 14px;
    }
  }
`;
