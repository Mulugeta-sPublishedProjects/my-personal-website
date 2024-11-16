import { AiFillHome, AiFillProject, AiOutlineFileText } from "react-icons/ai";
import { FaGraduationCap, FaBlog } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const menuItems = [
  {
    id: 1,
    href: "/",
    label: "Home",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: "/skills",
    label: "Education & Experience",
    icon: <FaGraduationCap />,
  },
  {
    id: 4,
    href: "/projects",
    label: "Portfolio",
    icon: <AiFillProject />,
  },
  {
    id: 5,
    href: "/resume",
    label: "Resume & Documents",
    icon: <AiOutlineFileText />,
  },
  {
    id: 6,
    href: "/testimonials",
    label: "Testimonials",
    icon: <BsFillPersonLinesFill />,
  },
  {
    id: 7,
    href: "/blogs",
    label: "Blog",
    icon: <FaBlog />,
  },
];
