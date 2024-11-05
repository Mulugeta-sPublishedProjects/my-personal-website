import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaRocket,
  FaDatabase,
  FaBuilding,
  FaProjectDiagram,
} from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";

export const servicesData = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications using the latest frontend technologies like React, Vue, and Angular.",
    icon: <FaCode />,
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Creating high-quality mobile applications for iOS and Android platforms with a focus on performance and user experience.",
    icon: <FaMobileAlt />,
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "Designing visually appealing and user-friendly interfaces that ensure seamless experiences across devices.",
    icon: <FaPalette />,
  },
  {
    id: 4,
    title: "Backend Development",
    description:
      "Developing robust and scalable backend systems using Node.js, Express, and various databases like MongoDB and PostgreSQL.",
    icon: <FaDatabase />,
  },
  {
    id: 5,
    title: "Web Optimization",
    description:
      "Optimizing web applications for speed and performance to ensure a smooth experience for users.",
    icon: <FaRocket />,
  },
  {
    id: 6,
    title: "Project Development",
    description:
      "Providing end-to-end project development services from planning to deployment.",
    icon: <FaProjectDiagram />,
  },
  {
    id: 7,
    title: "Remote Work",
    description:
      "Available for remote collaboration, supporting your team from anywhere with modern tools.",
    icon: <FaLaptopCode />,
  },
  {
    id: 8,
    title: "On-Site Collaboration",
    description:
      "Offering on-site collaboration for projects that require an in-person presence.",
    icon: <FaBuilding />,
  },
];
