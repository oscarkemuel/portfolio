import type { NextPage } from 'next'
import Head from 'next/head'
import { ExperienceCard } from '../../components/ExperienceCard'
import { Header } from '../../components/Header'
import { Container } from '../../styles/aboutStyles'

const YEAR_OF_BIRTH = new Date('09/04/2002')

const experiences = [
  {
    title:'Desenvolvedor Front-end e Mobile',
    company:'Valeu App',
    companyUrl: 'https://www.valeuapp.com.br/',
    time:'Estágio',
    startDate:new Date('02-01-2021'),
    description:'React.js | ReactNative',
    imageUrl:'/valeu.png',
    locale:'Natal, Rio Grande do Norte, Brazil'
  },
  {
    title:'Desenvolvedor Front-end e Mobile',
    company:'SmartMetropolis',
    companyUrl: 'https://smartmetropolis.imd.ufrn.br/',
    time:'Meio período',
    startDate:new Date('03-01-2022'),
    description:'React.js | ReactNative',
    imageUrl:'https://media-exp1.licdn.com/dms/image/C4D0BAQFEFvUJn4D3NA/company-logo_100_100/0/1570716055295?e=1654732800&v=beta&t=XHhKN6hFu5wpGI8DR4zVmMISJ1Y6haMWj2g7mE9wBnE',
    locale:'Natal, Rio Grande do Norte, Brazil',
  },
]

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
              {experiences.map((experience) => {
                return (
                  <ExperienceCard
                    key={experience.title}
                    title={experience.title}
                    company={experience.company}
                    companyUrl={experience.companyUrl}
                    time={experience.time}
                    startDate={experience.startDate}
                    description={experience.description}
                    imageUrl={experience.imageUrl}
                    locale={experience.locale}
                  />
                )
              })}
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}

export default About
