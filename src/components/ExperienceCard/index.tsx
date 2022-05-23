import React from 'react';
import { Container } from './styles';

export interface BadgeProps {
  data: {
    title: string;
    company: string;
    time: string;
    startDate: string;
    endDate: string;
    locale: string;
    description: string;
    imageUrl: string;
    companyUrl: string;
  }
}

export const ExperienceCard = ({ data }: BadgeProps) => {
  const { company, description ,locale ,startDate ,time ,title ,endDate, imageUrl, companyUrl } = data;
  
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
          <p className="date">{startDate} · {endDate || 'Atual'}</p>
          <p className="location">{locale}</p>

          <p className="description">{description}</p>
        </div>
      </div>
    </Container>
  );
};
