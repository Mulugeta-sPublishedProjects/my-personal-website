"use client";

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
      period: "May 2023 - june 2025",
      description:
        "Leading the development of responsive and scalable frontend applications using modern frameworks and technologies.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M5 3h14v4H5V3zm14 6v12H5V9h14zM7 15h4v4H7v-4zm6 0h4v4h-4v-4zm-6-6h4v4H7v-4zm6 0h4v4h-4v-4z" />
        </svg>
      ),
      employmentType: "Part Time",
    },
    {
      role: "Senior Frontend Developer",
      company: "Top Link Technology PLC",
      period: "March 2023 - Present",
      description:
        "Architecting and implementing user interfaces, ensuring optimal performance and user experience.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M3 3h18v4H3V3zm18 6v12H3V9h18zm-2 2H5v8h14v-8z" />
        </svg>
      ),
      employmentType: "Full Time",
    },
    {
      role: "Junior Frontend Developer",
      company: "Perago Systems PLC",
      period: "Jan 2022 - March 2023",
      description:
        "Collaborated with cross-functional teams to develop and maintain web applications, focusing on code quality and best practices.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M2 2h20v4H2V2zm20 6v14H2V8h20zm-2 2H4v10h16V10z" />
        </svg>
      ),
      employmentType: "Full Time",
    },
    {
      role: "Intern Frontend Developer",
      company: "Perago Systems PLC",
      period: "Dec 2021 - Jan 2022",
      description:
        "Assisted in the development of web components and gained hands-on experience with frontend technologies.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M4 4h16v4H4V4zm16 6v10H4V10h16zm-2 2H6v6h12v-6z" />
        </svg>
      ),
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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 2l9 4v2h-6v4H9V8H3V6l9-4zM3 10v10h18V10H3zm4 2h10v6H7v-6z" />
        </svg>
      ),
    },
    {
      institution: "Wegide Preparatory School - South Wollo",
      degree: "Preparatory Education",
      period: "Aug 2016 - Aug 2018",
      description:
        "Concentrated on Science, Mathematics, and Computer Studies. Achieved a University Entrance Exam score of 504/700.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M4 4h16v4H4V4zm16 6v10H4V10h16zm-2 2H6v6h12v-6z" />
        </svg>
      ),
    },
    {
      institution: "Wegide High School - South Wollo",
      degree: "Secondary Education",
      period: "Aug 2014 - Aug 2016",
      description:
        "Focused on core subjects, including Science, Mathematics, and Computer Studies. Scored 9 A's in the Grade 10 Matriculation Exam.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M4 4h16v4H4V4zm16 6v10H4V10h16zm-2 2H6v6h12v-6z" />
        </svg>
      ),
    },
    {
      institution: "Kabi Wobo School",
      degree: "Primary Education (Grades 1-8)",
      period: "2006 - 2014",
      description:
        "Completed foundational education with strong performance across subjects. Scored 76/100 in the Grade 8 Regional Exam with a percentile rank of 99.9%.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M4 4h16v4H4V4zm16 6v10H4V10h16zm-2 2H6v6h12v-6z" />
        </svg>
      ),
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
        <div>
          <ExperienceTimeline experiences={experienceData as any} />
        </div>
        <div>
          <EducationTimeline education={educationData as any} />
        </div>
      </div>

      {/* Certifications Section */}
      <div className="w-full">
        <Certifications />
      </div>
    </motion.div>
  );
};
