import React from 'react';
import { FaJs, FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { DiAndroid } from 'react-icons/di';
import { Container } from './styles';

export interface BadgeProps {
  language: string;
}

export const Badge = ({ language }: BadgeProps) => {
  return (
    <Container language={language}>
      {language === 'javascript' && <FaJs />}
      {language === 'typescript' && <SiTypescript />}
      {language === 'reactjs' && <FaReact />}
      {language === 'mobile' && <DiAndroid />}
      {language === 'nodejs' && <IoLogoNodejs />}
    </Container>
  );
};
