import React, { useState } from 'react';
import { CanvasBody, Container, NavItem } from './styles';
import { AiOutlineUser, AiFillProject } from 'react-icons/ai';
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
      link: '/about',
      title: 'Sobre mim'
    },
    {
      link: '/techs',
      title: 'Tecnologias'
    },
    {
      link: '/portfolio',
      title: 'Portfólio'
    }
    ,
    {
      link: '/contact',
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
                <Link href={item.link}><a><p>{item.title}</p></a></Link>
              </NavItem>
            )
          })}
        </ul>
      </nav>

      <button type='button' onClick={handleShow} className='bars'>
        <FaBars />
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton style={{color: 'var(--red)'}}>
          <Offcanvas.Title>
            <Link href="/">
              <a onClick={handleClose}>Oscar Kemuel</a>
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <CanvasBody>
            <ul>
              {links.map((item, i) => {
                return (
                  <NavItem key={`${item.title}-${i}`} isActive={router.pathname === item.link}>
                    <Link href={item.link}>
                      <a onClick={handleClose}>
                        <p>
                          {item.title}
                        </p>
                      </a>
                    </Link>
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
