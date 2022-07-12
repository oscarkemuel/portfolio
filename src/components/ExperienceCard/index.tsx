/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ExperienceInterface } from "../../pages/about";
import { Container } from "./styles";

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
  };
}

export const ExperienceCard = ({ data }: { data: ExperienceInterface }) => {
  const {
    company,
    description,
    localization,
    startDate,
    office,
    endDate,
    type,
    companyUrl,
    companyImage,
  } = data;

  const startDateFormatted = new Date(startDate).toLocaleDateString("pt-BR");
  const endDateFormatted = endDate
    ? new Date(endDate).toLocaleDateString("pt-BR")
    : "Atual";

  return (
    <Container>
      <div className="content">
        <img src={companyImage.url} alt="" />

        <div className="infos">
          <p className="title">{office}</p>
          <p className="company">
            <a href={companyUrl} target="_blank" rel="noreferrer">
              {company}
            </a>
            {" · "}
            {type}
          </p>
          <p className="date">
            {startDateFormatted} - {endDateFormatted}
          </p>
          <p className="location">{localization}</p>

          <p className="description">{description}</p>
        </div>
      </div>
    </Container>
  );
};
