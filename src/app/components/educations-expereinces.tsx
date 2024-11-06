import {
  FaCode,
  FaLaptopCode,
  FaSchool,
  FaServer,
  FaUniversity,
} from "react-icons/fa";
import { Education } from "../models/education";
import { EducationTimeline } from "./educations";
import { ExperienceTimeline } from "./experiences";
import SkillsPage from "./skills";
import { Experience } from "../models/experience";
import { Certifications } from "./certifications";

export const SkillsExperiences = () => {
  const experienceData: Experience[] = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions",
      period: "2020 - Present",
      description:
        "Worked on building responsive and scalable frontend applications.",
      icon: <FaLaptopCode />,
      employmentType: "Full-Time",
      locationType: "Remote",
    },
    {
      role: "Backend Developer",
      company: "DataCorp",
      period: "2018 - 2020",
      description: "Developed RESTful APIs and managed database integrations.",
      icon: <FaServer />,
      employmentType: "Full-Time",
      locationType: "Onsite",
    },
    {
      role: "Software Engineer",
      company: "Innovatech",
      period: "2016 - 2018",
      description:
        "Collaborated on full-stack projects with cross-functional teams.",
      icon: <FaCode />,
      employmentType: "Part-Time",
      locationType: "Remote",
    },
  ];

  const educationData: Education[] = [
    {
      institution: "Addis Ababa University",
      degree: "Bachelor of Information Technology",
      period: "2015 - 2019",
      description:
        "Specialized in software engineering, web development, and data science.",
      icon: <FaUniversity />,
    },
    {
      institution: "Wegide High School-S/Wollo",
      degree: "High School Diploma",
      period: "2011 - 2015",
      description: "Focused on science, math, and computer studies.",
      icon: <FaSchool />,
    },
    {
      institution: "Wegide High School-S/Wollo",
      degree: "High School Diploma4",
      period: "2011 - 2017",
      description: "Focused on science, math, and computer studies8.",
      icon: <FaSchool />,
    },
  ];

  return (
    <div className="flex flex-col">
      <SkillsPage />
      <div className="flex my-2 flex-row gap-8">
        <ExperienceTimeline experiences={experienceData as any} />
        <EducationTimeline education={educationData as any} />
      </div>
      <div className="flex my-2">
        <Certifications />
      </div>
    </div>
  );
};
