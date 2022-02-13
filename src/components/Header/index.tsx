import React, { useState } from 'react';
import { CanvasBody, Container, NavItem } from './styles';
import { AiFillHome, AiFillProject } from 'react-icons/ai';
import { BsFileCodeFill } from 'react-icons/bs';
import { MdContactPhone } from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import { Offcanvas } from 'react-bootstrap';
import Link from 'next/link'
import { useRouter } from 'next/router';

export const Header = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const links = [
    {
      link: '/',
      icon: AiFillHome,
      title: 'Inicio'
    },
    {
      link: '/techs',
      icon: BsFileCodeFill,
      title: 'Tecnologias'
    },
    {
      link: '/portfolio',
      icon: AiFillProject,
      title: 'Portfólio'
    }
    ,
    {
      link: '/contact',
      icon: MdContactPhone,
      title: 'Contato'
    }
  ]

  return (
    <Container>
      <Link href="/">
        <a style={{textDecoration: 'none'}}>
          <h1>Oscar Kemuel</h1>
        </a>
      </Link>
      
      <nav>
        <ul>
          {links.map((item) => {
            return (
              <NavItem key={item.title} isActive={router.pathname === item.link}>
                <Link href={item.link}><a>{React.createElement(item.icon)}<p>{item.title}</p></a></Link>
              </NavItem>
            )
          })}
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
              {links.map((item) => {
                return (
                  <NavItem key={item.title} isActive={router.pathname === item.link}>
                    <Link href={item.link}><a>{React.createElement(item.icon)}<p>{item.title}</p></a></Link>
                  </NavItem>
                )
              })}
            </ul>
          </CanvasBody>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};
