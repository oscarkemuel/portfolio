/* eslint-disable react/no-unescaped-entities */
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Home, Card } from '../styles/homeStyles'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

interface Props {
  data: {
    login: string;
    avatar_url: string;
    bio: string;
    name: string;
    html_url: string;
  }
}

const HomePage: NextPage<Props> = ({data}) => {
  return (
    <div>
      <Head>
        <title>Oscar Kemuel - Desenvolvedor Web</title>
        <meta name="description" content="Oscar Kemuel - Web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Home id='home'>
          <div className="image" style={{backgroundImage: `url(${data.avatar_url})`}} />

          <div className="presentation">
            <h2>Olá, sou Oscar</h2>

            <p className='description'>
              Sou <b>desenvolvedor web</b> e minha especialidade é <b>front-end</b> e mobile híbrido
            </p>

            <p className='bio'>{data.bio}</p>
          </div>

          <div className='social'>
            <Card color='#161B22' href={data.html_url}>
              <AiFillGithub />
              <div className="name">Github</div>
            </Card>

            <Card color='#0A66C2' href="https://www.linkedin.com/in/oscar-kemuel/">
              <AiFillLinkedin />
              <div className="name">Linkedin</div>
            </Card>
          </div>
        </Home>
      </main>
    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.github.com/users/oscarkemuel', {
    method: "GET",
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`
    }
  })
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}


export default HomePage
