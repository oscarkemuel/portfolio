import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { AiFillGithub } from 'react-icons/ai'
import { FaLocationArrow } from 'react-icons/fa'
import { Header } from '../../components/Header'
import { Badge } from '../../components/Badge'
import { PortfolioContainer, Cards, Card } from './styles'

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

const Portfolio: NextPage<Props> = ({repos}) => {
  const reposFiltred = repos.filter((repo) => repo.topics.includes('portfolio')).reverse();

  return (
    <div>
      <Head>
        <title>Oscar Kemuel - Portfólio</title>
        <meta name="description" content="Oscar Kemuel - Portfólio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <PortfolioContainer>
          <Cards>
            {reposFiltred.map((repo) => {
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
