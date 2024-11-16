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
      role: "Senior Frontend Developer",
      company: "Tria PLC",
      period: "May 2023 - Present",
      description:
        "Leading the development of responsive and scalable frontend applications using modern frameworks and technologies.",
      icon: <FaLaptopCode />,
      employmentType: "Part Time",
    },
    {
      role: "Senior Frontend Developer",
      company: "Top Link Technology PLC",
      period: "March 2023 - Present",
      description:
        "Architecting and implementing user interfaces, ensuring optimal performance and user experience.",
      icon: <FaServer />,
      employmentType: "Full Time",
    },
    {
      role: "Junior Frontend Developer",
      company: "Perago Systems PLC",
      period: "Jan 2022 - March 2023",
      description:
        "Collaborated with cross-functional teams to develop and maintain web applications, focusing on code quality and best practices.",
      icon: <FaCode />,
      employmentType: "Full Time",
    },
    {
      role: "Intern Frontend Developer",
      company: "Perago Systems PLC",
      period: "Dec 2021 - Jan 2022",
      description:
        "Assisted in the development of web components and gained hands-on experience with frontend technologies.",
      icon: <FaCode />,
      employmentType: "Full Time",
    },
  ];
  const educationData: Education[] = [
    {
      institution: "Addis Ababa University",
      degree: "Bachelor of Information Technology",
      period: "Sep 2018 - Sep 2022",
      description:
        "Achieved a CGPA of 3.73 with a specialization in Software Engineering, Web Development, and Data Science.",
      icon: <FaUniversity />,
    },
    {
      institution: "Wegide Preparatory School - South Wollo",
      degree: "Preparatory Education",
      period: "Aug 2016 - Aug 2018",
      description:
        "Concentrated on Science, Mathematics, and Computer Studies. Achieved a University Entrance Exam score of 504/700.",
      icon: <FaSchool />,
    },
    {
      institution: "Wegide High School - South Wollo",
      degree: "Secondary Education",
      period: "Aug 2014 - Aug 2016",
      description:
        "Focused on core subjects, including Science, Mathematics, and Computer Studies. Scored 9 A's in the Grade 10 Matriculation Exam.",
      icon: <FaSchool />,
    },
    {
      institution: "Kabi Wobo School",
      degree: "Primary Education (Grades 1-8)",
      period: "2006 - 2014",
      description:
        "Completed foundational education with strong performance across subjects. Scored 76/100 in the Grade 8 Regional Exam with a percentile rank of 99.9%.",
      icon: <FaSchool />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="w-full px-4 sm:px-8 md:px-12 lg:px-16 flex flex-col items-start space-y-12"
    >
      {/* Skills Section */}
      <div className="w-full">
        <SkillsPage />
      </div>

      {/* Experiences and Education Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <div className="md:col-span-1">
          <ExperienceTimeline experiences={experienceData as any} />
        </div>
        <div className="md:col-span-1">
          <EducationTimeline education={educationData as any} />
        </div>
      </div>

      {/* Certifications Section */}
      <div className="w-full">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Certifications
        </h2>
        <Certifications />
      </div>
    </motion.div>
  );
};
