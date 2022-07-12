/* eslint-disable @next/next/no-img-element */

import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { AiFillGithub } from 'react-icons/ai'
import { FaLocationArrow } from 'react-icons/fa'
import { PortfolioContainer, Cards, Card, CardContent } from '../../styles/portfolioStyles'
import { client, ssrCache } from '../../lib/urql';
import { gql, useQuery } from 'urql';

interface ProjectInterface {
  id: string;
  title: string;
  description: string;
  firstCommit: string;
  githubSlug: string;
  url: string;
  image: {
    url: string;
  }
  owner: {
    name: string;
    githubUrl: string;
    image: {
      url: string;
    }
  }
}

const GET_PROJECTS_QUERY = gql`
  query GetProjects {
    projects(orderBy: firstCommit_DESC) {
      id
      title
      description
      firstCommit
      githubSlug
      url
      image {
        url
      }
      owner {
        name
        githubUrl
        image {
          url
        }
      }
    }
  }
`

const Portfolio: NextPage = () => {
  const [result] = useQuery<{projects: ProjectInterface[]}>({query: GET_PROJECTS_QUERY});
  const {data: projects} = result;

  return (
    <div>
      <Head>
        <title>Oscar Kemuel - Portfólio</title>
        <meta name="description" content="Oscar Kemuel - Portfólio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PortfolioContainer>
        <Cards>
          {projects?.projects.map((project) => {
            const date = new Date(project.firstCommit);
            const dateString = date.toLocaleDateString("pt-br")

            return (
              <Card key={project.title}>
                <img src={project.image.url} alt="" srcSet="" />

                <CardContent>
                  <div className="title">
                    <p><b>{project.title}</b></p>
                  </div>
                  
                  <p className="description">{project.description || 'Sem descrição'}</p>

                  <div className="footer">
                    <div className="about">
                      <img src={project.owner.image.url} alt="" />

                      <div className="date">
                        <p>{project.owner.name}</p>
                        <p>{dateString}</p>
                      </div>
                  </div>

                  <div className="icons">
                    <a 
                      href={`https://github.com/${project.owner.githubUrl}/${project.githubSlug}`} 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                    {project.url && <a href={project.url} target="_blank" rel="noreferrer"><FaLocationArrow size={22} /></a>}
                  </div>
                </div>
                </CardContent>
              </Card>
            )
          })}
        </Cards>
      </PortfolioContainer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  await client.query(GET_PROJECTS_QUERY).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData()
    },
    revalidate: 60 * 60 // 1 hour
  }
}

export default Portfolio
