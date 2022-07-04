/* eslint-disable react/no-unescaped-entities */
import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Home, Card } from '../styles/homeStyles'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiDocumentText } from 'react-icons/hi'
import { SocialBadge } from '../components/SocialBadge'

interface Props {
  data: {
    login: string;
    avatar_url: string;
    bio: string;
    name: string;
    html_url: string;
  }
}

const LINKEDIN_URL = "https://www.linkedin.com/in/oscar-kemuel/"
const CV_URL = "https://drive.google.com/file/d/1C0rjv09ksarVadp2F3VBL5uIzLgZV6Rr/view?usp=sharing"

const HomePage: NextPage<Props> = ({data}) => {
  return (
    <div>
      <Head>
        <title>Oscar Kemuel - Desenvolvedor Web</title>
        <meta name="description" content="Oscar Kemuel - Web developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            <SocialBadge icon={AiFillGithub} href={data.html_url} color="#161B22" />
            <SocialBadge icon={AiFillLinkedin} href={LINKEDIN_URL}  color="#0A66C2"/>
            <SocialBadge icon={HiDocumentText} href={CV_URL}  color="var(--red)" />
          </div>
        </Home>
      </main>
      </div>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
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
