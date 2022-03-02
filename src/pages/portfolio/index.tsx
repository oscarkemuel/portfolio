
import { useState } from 'react'
import Markdown from 'markdown-to-jsx';
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { AiFillGithub } from 'react-icons/ai'
import { FaLocationArrow, FaSearch } from 'react-icons/fa'
import { Header } from '../../components/Header'
import { Badge } from '../../components/Badge'
import { PortfolioContainer, Cards, Card, Content, BadgeList, BadgeButton } from '../../styles/portfolioStyles'

interface dataInterface {
  name: string;
  description: string;
  pushed_at: string;
  language: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  }
  homepage: string;
  topics: string[];
}

interface Props {
  repos: dataInterface[];
}

const languages = ['typescript', 'javascript', 'reactjs', 'mobile', 'nodejs' ]

const Portfolio: NextPage<Props> = ({repos}) => {
  const [languagesFiltred, setLanguagesFiltred] = useState<string[]>([])

  let reposToRender: dataInterface[];

  if(!languagesFiltred.length){
    reposToRender = repos
    .filter((repo) => repo.topics
    .includes('portfolio'))
    .reverse()
  }else {
    reposToRender = repos
    .filter((repo) => repo.topics
    .includes('portfolio'))
    .filter((repo) => languagesFiltred.every(topic => repo.topics.includes(topic)))
    .reverse()
  }

  function handleFilter(language: string){
    const languageIndex = languagesFiltred.indexOf(language)

    if(languageIndex > -1){
      const newArray = [...languagesFiltred]
      newArray.splice(languageIndex, 1);

      setLanguagesFiltred(newArray)
    }else {
      setLanguagesFiltred([...languagesFiltred, language])
    }
  }

  return (
    <div>
      <Head>
        <title>Oscar Kemuel - Portfólio</title>
        <meta name="description" content="Oscar Kemuel - Portfólio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Content>

          <h2>Filtro:</h2>
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
          </BadgeList>

          <PortfolioContainer>
            <Cards>
              {reposToRender.map((repo) => {
                const date = new Date(repo.pushed_at);
                const dateString = date.toLocaleDateString("pt-br")

                return (
                  <Card key={repo.name} language={repo.language}>
                    <div className="title">
                      <p>Nome: <b>{repo.name}</b></p>
                      <Badge language={repo.language} />
                    </div>
                    
                    <p className="description">{repo.description || 'Sem descrição'}</p>

                    <div className="footer">
                      <div className="about">
                      <div className="image" style={{backgroundImage: `url(${repo.owner.avatar_url})`}} />

                      <div className="date">
                        <p>{repo.owner.login}</p>
                        <p>{dateString}</p>
                      </div>
                    </div>

                    <div className="icons">
                      <a href={repo.html_url} target="_blank" rel="noreferrer"><AiFillGithub /></a>
                      {repo.homepage && <a href={repo.homepage} target="_blank" rel="noreferrer"><FaLocationArrow size={22} /></a>}
                    </div>
                  </div>
                </Card>
                )
              })}
            </Cards>
          </PortfolioContainer>
        </Content>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/oscarkemuel/repos', {
    method: "GET",
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  })
  const repos = await res.json()

  return {
    props: {
      repos,
    },
  }
}

export default Portfolio
