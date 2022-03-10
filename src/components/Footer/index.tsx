import Link from 'next/link';
import { Container } from './styles';

export const Footer = () => {
  return (
    <Container>
      <p>Made with <b>{"<3"}</b> by <Link href="/"><a><b>Oscar Kemuel</b></a></Link></p>
    </Container>
  );
};
