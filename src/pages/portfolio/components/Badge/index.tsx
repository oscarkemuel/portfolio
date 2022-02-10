import React from 'react';
import { FaJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { Container } from './styles';

export interface BadgeProps {
  language: string;
}

export const Badge = ({ language }: BadgeProps) => {
  return (
    <Container language={language}>
      {language === 'JavaScript' && <FaJs />}
      {language === 'TypeScript' && <SiTypescript />}
    </Container>
  );
};
