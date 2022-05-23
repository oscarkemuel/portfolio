import type { NextPage } from 'next'
import Head from 'next/head'
import { ExperienceCard } from '../../components/ExperienceCard'
import { Header } from '../../components/Header'
import { Container } from '../../styles/aboutStyles'
import { experiences } from './data'

const YEAR_OF_BIRTH = new Date('09/04/2002')

const About: NextPage = () => {
  const age = new Date().getFullYear() - YEAR_OF_BIRTH.getFullYear() ;

  return (
    <>
      <Head>
        <title>Oscar Kemuel - Sobre mim</title>
        <meta name="description" content="Oscar Kemuel - Sobre mim" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Container>
          <div className="about">
            <h2>Sobre mim</h2>
            <p>Olá, sou Oscar Kemuel, sou <b>desenvolvedor web</b> com foco em <b>front-end</b> e <b>mobile</b>.</p>
            <p>Tenho {age} anos e estou no 5º semestre de Engenharia de Software pela UFRN. Comecei a brincar com <b>HTML</b> e <b>CSS</b> desde pequeno, hoje sou bolsista como dev front-end e mobile em uma pesquisa que produz aplicações para cidades inteligentes.</p>
          </div>
          
          <div className="experience">
            <h2>Experiências</h2>

            <div className="cards">
              {experiences.map((experience, index) => <ExperienceCard data={experience} key={experience.title}/>)}
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}

export default About
