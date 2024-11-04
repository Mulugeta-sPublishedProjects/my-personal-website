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
import Image from "next/image";

export const SkillsExperiences = () => {
  const experienceData: Experience[] = [
    {
      role: "Frontend Developer",
      company: "Tech Solutions",
      period: "2020 - Present",
      description:
        "Worked on building responsive and scalable frontend applications.",
      icon: <FaLaptopCode />,
    },
    {
      role: "Backend Developer",
      company: "DataCorp",
      period: "2018 - 2020",
      description: "Developed RESTful APIs and managed database integrations.",
      icon: <FaServer />,
    },
    {
      role: "Software Engineer",
      company: "Innovatech",
      period: "2016 - 2018",
      description:
        "Collaborated on full-stack projects with cross-functional teams.",
      icon: <FaCode />,
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
  ];

  return (
    <div className="flex flex-col">
      <SkillsPage />
      <div className="flex flex-col md:flex-row justify-between items-start">
        <ExperienceTimeline experiences={experienceData} />

        {/*  <div className="w-full flex justify-center">
          <Image
            src="/image.png"
            alt="Separator Image"
            width={300}
            height={300}
            className="rounded-lg shadow-lg object-cover"
          />
        </div> */}
        <EducationTimeline education={educationData} />
      </div>
    </div>
  );
};
