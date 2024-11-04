import React from "react";
import { FaUniversity, FaSchool } from "react-icons/fa"; // Import icons for different education levels
import Timeline from "./time-line";

type Education = {
  institution: string;
  degree: string;
  period: string;
  description?: string;
  icon: JSX.Element;
};

type EducationProps = {
  education: Education[];
};

export const EducationTimeline: React.FC<EducationProps> = ({ education }) => {
  const educationItems = education.map((edu) => ({
    icon: edu.icon,
    title: edu.degree,
    subtitle: edu.institution,
    period: edu.period,
    description: edu.description,
  }));

  return <Timeline items={educationItems} sectionTitle="Education" />;
};
