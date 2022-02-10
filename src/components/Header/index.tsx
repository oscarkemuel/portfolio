import React, { useState } from 'react';
import { CanvasBody, Container } from './styles';
import { AiFillHome, AiFillProject } from 'react-icons/ai';
import { BsFileCodeFill } from 'react-icons/bs';
import { MdContactPhone } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import { Offcanvas } from 'react-bootstrap';
import Link from 'next/link'

export const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Link href="/">
        <a style={{textDecoration: 'none'}}>
          <h1>Oscar Kemuel</h1>
        </a>
      </Link>
      
      <nav>
        <ul>
          <li>
            <Link href="/"><a><AiFillHome /><p>Inicio</p></a></Link>
          </li>
          <li>
            <Link href='/techs'><a><BsFileCodeFill /><p>Tecnologias</p></a></Link>
          </li>
          <li>
            <Link href='/portfolio'><a><AiFillProject /><p>Portfólio</p></a></Link>
          </li>
          <li>
            <Link href='/contact'><a><MdContactPhone /><p>Contato</p></a></Link>
          </li>
        </ul>
      </nav>

      <button type='button' onClick={handleShow} className='bars'>
        <FaBars />
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Oscar Kemuel</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CanvasBody>
            <ul>
              <li>
                <Link href="/"><a onClick={handleClose}><AiFillHome /><p>Inicio</p></a></Link>
              </li>
              <li>
                <Link href='/techs'><a onClick={handleClose}><BsFileCodeFill /><p>Tecnologias</p></a></Link>
              </li>
              <li>
                <Link href='/portfolio'><a onClick={handleClose}><AiFillProject /><p>Portfólio</p></a></Link>
              </li>
              <li>
                <Link href='/contact'><a onClick={handleClose}><MdContactPhone /><p>Contato</p></a></Link>
              </li>
            </ul>
          </CanvasBody>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};
