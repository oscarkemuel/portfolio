import styled from 'styled-components';

export const ContactContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--background);
  padding-top: 140px !important;
  width: 100%;
  padding: 100px 4rem;
  margin-bottom: 1rem;

  @media(max-width: 890px){
    padding: 100px 2rem;
    height: 130vh;
  }

  .location {
    font-size: 20px;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .item {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: var(--green);
        margin-right: 10px;
      }
    }
  }

  form {
    margin-top: 2rem;
    width: 60%;

    label {
      color: var(--green);
    }

    input, textarea {
      background-color: transparent;
      color: var(--white);

      :focus {
        color: var(--white);
        background: transparent;
      }
    }

    button {
      width: 100%;
      background-color: var(--red);
      color: var(--white);
      padding: 0.5rem 0;
      border-radius: 10px;

      :hover {
        font-weight: bold;
      }
    }

    @media(max-width: 768px){
      width: 100%;
    }
  }
`;
