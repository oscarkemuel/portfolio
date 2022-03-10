import React from 'react';
import { IconType } from 'react-icons';
import { Container, Link } from './styles';

export interface BadgeProps {
  icon: IconType;
  href: string;
  color: string;
}

export const SocialBadge = ({ icon, href, color }: BadgeProps) => {
  return (
    <Container>
      <Link href={href} color={color}>
        {React.createElement(icon)}
      </Link>
    </Container>
  );
};
