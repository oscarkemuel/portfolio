import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Header } from '../../components/Header'
import { techsData } from '../../data/techsData'
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
          {techsData.map((tech) => {
            return (
              <Card color={tech.cardColor} key={tech.title}>
                <div className="icon">
                  {React.createElement(tech.icon)}
                </div>

                <p className="title">{tech.title}</p>

                <ul>
                  {tech.attributes.map((attribute, index) => <li key={`${index}/${attribute}`}>{attribute}</li>)}
                </ul>
              </Card>
            )
          })}
        </TechsContainer>
      </main>
    </>
  )
}

export default Techs
