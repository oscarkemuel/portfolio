import type { NextPage } from 'next'
import Head from 'next/head'
import { AiFillAndroid } from 'react-icons/ai'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiAdonisjs } from 'react-icons/si'
import { Header } from '../../components/Header'
import { TechsContainer, Card } from '../../styles/techsStyles'

const Techs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oscar Kemuel - Tecnologias</title>
        <meta name="description" content="Oscar Kemuel - Tecnologias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <TechsContainer>
          <Card color='#EA7601'>
            <div className="icon">
              <FaHtml5 />
            </div>

            <p className="title">Html5</p>

            <ul>
              <li>SEO</li>
              <li>Tags</li>
              <li>Atributos</li>
            </ul>
          </Card>

          <Card color='#2760E5'>
            <div className="icon">
              <FaCss3 />
            </div>

            <p className="title">CSS3</p>

            <ul>
              <li>Flexbox</li>
              <li>Sitema de grid</li>
              <li>Seletores</li>
            </ul>
          </Card>

          <Card color='#EAD41C'>
            <div className="icon">
              <FaJs />
            </div>

            <p className="title">Javascript</p>

            <ul>
              <li>ES6</li>
              <li>Manipulação de DOM</li>
              <li>Consumo de API REST</li>
              <li>Async</li>
            </ul>
          </Card>

          <Card color='#00aeff'>
            <div className="icon">
              <FaReact />
            </div>

            <p className="title">ReactJS</p>

            <ul>
              <li>Hooks</li>
              <li>Context</li>
              <li>Estilização</li>
              <li>Autenticação</li>
            </ul>
          </Card>

          <Card color='#00aeff'>
            <div className="icon">
              <AiFillAndroid />
            </div>

            <p className="title">React native</p>

            <ul>
              <li>Expo</li>
              <li>Estilização</li>
              <li>Autenticação</li>
              <li>Roteamento</li>
            </ul>
          </Card>

          <Card color='var(--red)'>
            <div className="icon">
              <SiAdonisjs />
            </div>

            <p className="title">AdonisJS (básico)</p>

            <ul>
              <li>Rotas</li>
              <li>Controllers</li>
              <li>Autenticação</li>
              <li>Lucid ORM</li>
            </ul>
          </Card>
        </TechsContainer>
      </main>
    </>
  )
}

export default Techs
