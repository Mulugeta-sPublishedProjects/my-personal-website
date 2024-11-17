import { AiFillHome, AiFillProject, AiOutlineFileText } from "react-icons/ai";
import { FaGraduationCap, FaBlog } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

// Define menu items as an array of objects
export const menuItems = [
  {
    id: 1,
    href: "/",
    label: "Home",
    icon: <AiFillHome className="text-xl" />, // Added consistent size styling
  },
  {
    id: 2,
    href: "/skills",
    label: "Education & Experience",
    icon: <FaGraduationCap className="text-xl" />,
  },
  {
    id: 4,
    href: "/projects",
    label: "Portfolio",
    icon: <AiFillProject className="text-xl" />,
  },
  {
    id: 5,
    href: "/resume",
    label: "Resume & Documents",
    icon: <AiOutlineFileText className="text-xl" />,
  },
  {
    id: 6,
    href: "/testimonials",
    label: "Testimonials",
    icon: <BsFillPersonLinesFill className="text-xl" />,
  },
  {
    id: 7,
    href: "/blogs",
    label: "Blog",
    icon: <FaBlog className="text-xl" />,
  },
];
