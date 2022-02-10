import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { ContactContainer } from './styles'
import { IoLocationSharp } from 'react-icons/io5'
import { GrMail } from 'react-icons/gr'
import { AiFillPhone } from 'react-icons/ai'
import { Form } from 'react-bootstrap'

const Contact: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail() {
    const data = {name, email, text}

    if(email && text && name) {
      setIsLoading(true);
      
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        setIsLoading(false);
        if (res.status === 200) {
          setName('')
          setEmail('')
          setText('')
          alert('Email enviado com sucesso!')
        }
      }).catch((err) => {
        setIsLoading(false);
        alert('Ocorreu algum problema ao enviar o email!')
      })
    }
  }

  return (
    <div>
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

            <div className="item">
              <AiFillPhone />
              <p>84 99136-9568</p>
            </div>
          </div>

          <Form>
            <Form.Group className="mb-3" controlId="form.ControlInputName">
              <Form.Label>Nome</Form.Label>
              <Form.Control 
                type="text" 
                placeholder='Seu nome'
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="form.ControlInputEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="nome@exemplo.com" 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="form.ControlInputText">
              <Form.Label>Texto</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Sua ideia"
                value={text}
                onChange={e => setText(e.target.value)}
              />
            </Form.Group>

            {
              !isLoading 
              ? 
              <button type="button" onClick={sendEmail}>Enviar</button> 
              : 
              <button type="button" disabled>Carregando...</button>
            }
          </Form>
        </ContactContainer>
      </main>
    </div>
  )
}

export default Contact
