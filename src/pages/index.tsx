/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { Home } from "../styles/homeStyles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { SocialBadge } from "../components/SocialBadge";
import { gql, useQuery } from "urql";
import { client, ssrCache } from "../lib/urql";

interface OwnerInterface {
  description: string;
  linkedinUrl: string;
  githubUrl: string;
  cvUrl: string;
  githubSlug: string;
  image: {
    url: string;
  };
}

const GET_OWNER_QUERY = gql`
  query GetOwner {
    owner(where: { githubSlug: "oscarkemuel" }) {
      id
      description
      image {
        url
      }
      linkedinUrl
      githubUrl
      cvUrl
      githubSlug
    }
  }
`;

const HomePage: NextPage = () => {
  const [result] = useQuery<{ owner: OwnerInterface }>({
    query: GET_OWNER_QUERY,
  });
  const { data } = result;

  return (
    <div>
      <Head>
        <title>Oscar Kemuel - Desenvolvedor Web</title>
        <meta name="description" content="Oscar Kemuel - Web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home id="home">
          <img src={data?.owner.image.url} alt={data?.owner.githubSlug} />

          <div className="presentation">
            <h2>Olá, sou Oscar</h2>

            <p className="description">
              Sou <b>desenvolvedor web</b> e minha especialidade é{" "}
              <b>front-end</b> e mobile híbrido
            </p>

            <p className="bio">{data?.owner.description}</p>
          </div>

          <div className="social">
            <SocialBadge
              icon={AiFillGithub}
              href={data?.owner.githubUrl!}
              color="#161B22"
            />
            <SocialBadge
              icon={AiFillLinkedin}
              href={data?.owner.linkedinUrl!}
              color="#0A66C2"
            />
            <SocialBadge
              icon={HiDocumentText}
              href={data?.owner.cvUrl!}
              color="var(--red)"
            />
          </div>
        </Home>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  await client.query(GET_OWNER_QUERY).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};

export default HomePage;
