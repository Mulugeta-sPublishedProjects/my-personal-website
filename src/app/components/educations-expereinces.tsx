"use client";

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
import { motion } from "framer-motion";

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
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="w-full px-4 md:px-8 flex flex-col items-start space-y-12 md:space-y-0"
    >
      <div className="w-full md:w-auto">
        <SkillsPage />
      </div>

      <div className="flex flex-col md:flex-row gap-12 w-full">
        <div className="md:flex-1">
          <ExperienceTimeline experiences={experienceData as any} />
        </div>
        <div className="md:flex-1">
          <EducationTimeline education={educationData as any} />
        </div>
      </div>

      <div className="flex justify-center md:justify-start mt-4 w-full">
        <Certifications />
      </div>
    </motion.div>
  );
};
