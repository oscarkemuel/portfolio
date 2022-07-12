import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { gql, useQuery } from "urql";
import { ExperienceCard } from "../../components/ExperienceCard";
import { client, ssrCache } from "../../lib/urql";
import { Container } from "../../styles/aboutStyles";

const YEAR_OF_BIRTH = new Date("09/04/2002");

export interface ExperienceInterface {
  id: string;
  office: string;
  type: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  localization: string;
  companyUrl: string;
  companyImage: {
    url: string;
  };
}

const GET_EXPERIENCES_QUERY = gql`
  query GetExperiences {
    experiences(orderBy: startDate_DESC) {
      id
      office
      type
      company
      companyUrl
      startDate
      description
      endDate
      localization
      companyImage {
        url
      }
    }
  }
`;

const About: NextPage = () => {
  const [result] = useQuery<{ experiences: ExperienceInterface[] }>({
    query: GET_EXPERIENCES_QUERY,
  });
  const { data } = result;

  const age = new Date().getFullYear() - YEAR_OF_BIRTH.getFullYear();

  return (
    <>
      <Head>
        <title>Oscar Kemuel - Sobre mim</title>
        <meta name="description" content="Oscar Kemuel - Sobre mim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <div className="about">
            <h2>Sobre mim</h2>
            <p>
              Olá, sou Oscar Kemuel, sou <b>desenvolvedor web</b> com foco em{" "}
              <b>front-end</b> e <b>mobile</b>.
            </p>
            <p>
              Tenho {age} anos e estou no 5º semestre de Engenharia de Software
              pela UFRN. Comecei a brincar com <b>HTML</b> e <b>CSS</b> desde
              pequeno, hoje sou bolsista como dev front-end e mobile em uma
              pesquisa que produz aplicações para cidades inteligentes.
            </p>
          </div>
        </Container>
        <Container>
          <div className="experience">
            <h2>Experiências</h2>

            <div className="cards">
              {data?.experiences.map((experience) => (
                <ExperienceCard data={experience} key={experience.id} />
              ))}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await client.query(GET_EXPERIENCES_QUERY).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    revalidate: 60 * 60, // 1 hour
  };
};

export default About;
