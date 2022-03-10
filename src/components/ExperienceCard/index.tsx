import React from 'react';
import { Container } from './styles';

export interface BadgeProps {
  title: string;
  company: string;
  time: string;
  startDate: Date;
  endDate?: Date;
  isActive?: boolean;
  locale: string;
  description: string;
  imageUrl: string;
  companyUrl: string;
}

export const ExperienceCard = ({ company, description ,locale ,startDate ,time ,title ,isActive, imageUrl, companyUrl }: BadgeProps) => {
  return (
    <Container>
      <div className="content">
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />

        <div className="infos">
          <p className="title">{title}</p>
          <p className="company">
            <a href={companyUrl} target="_blank" rel="noreferrer">{company}</a>
            {" · "}
            {time}
          </p>
          <p className="date">{startDate.toLocaleDateString('pt-BR')} - {time} · 1 mês</p>
          <p className="location">{locale}</p>

          <p className="description">{description}</p>
        </div>
      </div>
    </Container>
  );
};
