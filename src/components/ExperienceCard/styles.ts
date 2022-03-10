import styled from 'styled-components';

export const Container = styled.div`
  .content {
    border-left: 6px solid var(--red);
    border-radius: 10px;
    margin-top: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    flex-wrap: wrap;

    background-color: var(--background-card);
    border-radius: 10px;
    box-shadow: 0 1.6rem 2.4rem rgb(0 0 0 / 10%);

    .image {
      border-radius: 50%;
      min-width: 50px;
      min-height: 50px;
      background-size: cover;
      background-repeat: no-repeat
    }

    .infos {
      .title {
        font-weight: bold;
      }

      .date, .location {
        color: var(--text-dark);
      }

      .description {
        margin-top: 10px;
      }

      p{
        line-height: 22px;
      }
    }
  }
`;

