import styled from 'styled-components';

interface LinkProps {
  color: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.a.attrs(props => ({target: '_blank'}))<LinkProps>`
  text-align: center;
  padding: 12px;
  border-radius: 50%;
  background-color: ${({color}) => color};

  svg {
    font-size: 30px;
    color: var(--white);
  }

  :hover {
    background-color: var(--green);

    svg {
      color: var(--title);
    }
  }
`