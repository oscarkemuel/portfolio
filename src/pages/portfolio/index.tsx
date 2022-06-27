/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'
import type { NextPage, GetServerSideProps, GetStaticProps } from 'next'
import Head from 'next/head'
import { AiFillGithub } from 'react-icons/ai'
import { FaLocationArrow, FaSearch } from 'react-icons/fa'
import { Header } from '../../components/Header'
import { Badge } from '../../components/Badge'
import { PortfolioContainer, Cards, Card, Content, BadgeList, BadgeButton, CardContent } from '../../styles/portfolioStyles'
import { gql } from '@apollo/client';
import { client, ssrCache } from '../../lib/apollo';
import { useQuery } from 'urql';

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

// const languages = ['typescript', 'javascript', 'reactjs', 'mobile', 'nodejs' ]

const Portfolio: NextPage = () => {
  // const [languagesFiltred, setLanguagesFiltred] = useState<string[]>([])

  const [result] = useQuery<{projects: ProjectInterface[]}>({query: GET_PROJECTS_QUERY});
  const {data: projects} = result;

  // let reposToRender: dataInterface[];

  // if(!languagesFiltred.length){
  //   reposToRender = repos
  //   .filter((repo) => repo.topics
  //   .includes('portfolio'))
  //   .reverse()
  // }else {
  //   reposToRender = repos
  //   .filter((repo) => repo.topics
  //   .includes('portfolio'))
  //   .filter((repo) => languagesFiltred.every(topic => repo.topics.includes(topic)))
  //   .reverse()
  // }

  // function handleFilter(language: string){
  //   const languageIndex = languagesFiltred.indexOf(language)

  //   if(languageIndex > -1){
  //     const newArray = [...languagesFiltred]
  //     newArray.splice(languageIndex, 1);

  //     setLanguagesFiltred(newArray)
  //   }else {
  //     setLanguagesFiltred([...languagesFiltred, language])
  //   }
  // }

  return (
    <>
      <Head>
        <title>Oscar Kemuel - Portfólio</title>
        <meta name="description" content="Oscar Kemuel - Portfólio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Content>

          {/* <h2>Filtro:</h2>
          <BadgeList>
            {languages.map((language) => {
              return (
                <BadgeButton 
                  onClick={() => handleFilter(language.toLowerCase())} 
                  key={language} 
                  isActive={languagesFiltred.includes(language.toLowerCase())}
                >
                  <Badge language={language.toLowerCase()} />
                </BadgeButton>
              )
            })}
          </BadgeList> */}


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
                        <Badge />
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
        </Content>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  await client.query(GET_PROJECTS_QUERY).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData()
    },
    revalidate: 60 * 10 // 10min
  }
}

export default Portfolio
