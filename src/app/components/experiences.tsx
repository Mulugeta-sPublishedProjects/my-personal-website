import React from "react";
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa"; // Icons for different roles
import Timeline from "./time-line";

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  icon: JSX.Element;
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
  }));

  return <Timeline items={experienceItems} sectionTitle="Experience" />;
};

// Example usage
const experienceData: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions",
    period: "2020 - Present",
    description: "Developed responsive and scalable frontend applications.",
    icon: <FaLaptopCode />,
  },
  {
    role: "Backend Developer",
    company: "DataCorp",
    period: "2018 - 2020",
    description: "Worked on RESTful APIs and database management.",
    icon: <FaServer />,
  },
  {
    role: "Software Engineer",
    company: "Innovatech",
    period: "2016 - 2018",
    description:
      "Collaborated with cross-functional teams on full-stack projects.",
    icon: <FaCode />,
  },
];

export default function ExperiencePage() {
  return <ExperienceTimeline experiences={experienceData} />;
}
