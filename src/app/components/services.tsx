import { FaCode, FaMobileAlt, FaDatabase } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";

export const servicesData = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive and interactive web applications using the latest frontend technologies like React, Vue,Next JS, and Angular.",
    icon: <FaCode />,
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Creating high-quality mobile applications for iOS and Android platforms with a focus on performance and user experience Using React Native",
    icon: <FaMobileAlt />,
  },

  {
    id: 4,
    title: "Backend Development",
    description:
      "Developing robust and scalable backend systems using Node.js, Express, Nest JS and various databases like MongoDB and PostgreSQL.",
    icon: <FaDatabase />,
  },
  {
    id: 7,
    title: "Remote Work",
    description:
      "Available for remote collaboration, supporting your team from anywhere with modern tools.",
    icon: <FaLaptopCode />,
  },
];
