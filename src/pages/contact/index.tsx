import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { ContactContainer } from '../../styles/contactStyles'
import { IoLocationSharp } from 'react-icons/io5'
import { GrMail } from 'react-icons/gr'
import { Form } from 'react-bootstrap'

const Contact: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(name: string, email: string, text: string) {
      setIsLoading(true);
      
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email, text})
      }).then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          alert('Email enviado com sucesso!')
        }
      }).catch((err) => {
        setIsLoading(false);
        alert('Ocorreu algum problema ao enviar o email!')
      })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    const elements = event.currentTarget.elements;

    const data = {
      email: (elements.namedItem('email') as HTMLInputElement).value,
      name: (elements.namedItem('name') as HTMLInputElement).value,
      text: (elements.namedItem('text') as HTMLInputElement).value
    };

    sendEmail(data.name, data.email, data.text);
  }

  return (
    <>
      <Head>
        <title>Oscar Kemuel - Contato</title>
        <meta name="description" content="Oscar Kemuel - Contato" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <ContactContainer>
          <div className="location">
            <div className="item">
              <IoLocationSharp />
              <p>Parnamirim/RN</p>
            </div>

            <div className="item">
              <GrMail />
              <p>oscar.kemuel5@gmail.com</p>
            </div>
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control 
                id="name"
                type="text" 
                placeholder='Seu nome'
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                id="email"
                type="email"
                placeholder="nome@exemplo.com" 
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Texto</Form.Label>
              <Form.Control 
                id="text"
                as="textarea" 
                rows={3} 
                placeholder="Sua ideia"
                required
              />
            </Form.Group>

            {
              !isLoading 
              ? 
              <button type="submit">Enviar</button> 
              : 
              <button type="button" disabled>Carregando...</button>
            }
          </Form>
        </ContactContainer>
      </main>
    </>
  )
}

export default Contact
