import React from "react";
import Timeline from "./time-line";

type Education = {
  institution: string;
  degree: string;
  period: string;
  description?: string;
  icon: JSX.Element;
  studyMode: "Full-Time" | "Part-Time";
  locationType: "On-Campus" | "Online";
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
    studyMode: edu.studyMode,
    locationType: edu.locationType,
  }));

  return <Timeline items={educationItems as any} sectionTitle="Education" />;
};
