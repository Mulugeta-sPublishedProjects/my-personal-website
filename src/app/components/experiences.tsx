import React from "react";
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa"; // Icons for different roles
import Timeline from "./time-line";

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  icon: JSX.Element;
  employmentType: "Full-Time" | "Part-Time";
  locationType: "Remote" | "Onsite";
};

type ExperienceProps = {
  experiences: Experience[];
};

export const ExperienceTimeline: React.FC<ExperienceProps> = ({
  experiences,
}) => {
  const experienceItems = experiences.map((exp) => ({
    icon: exp.icon,
    title: exp.role,
    subtitle: exp.company,
    period: exp.period,
    description: exp.description,
    employmentType: exp.employmentType,
    locationType: exp.locationType,
  }));

  return <Timeline items={experienceItems} sectionTitle="Experience" />;
};
