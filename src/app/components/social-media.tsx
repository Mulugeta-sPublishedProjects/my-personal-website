import React from "react";
import { BsTelegram } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaMedium } from "react-icons/fa";
import Link from "next/link";

type SocialMediaIconsProps = {
  orientation?: "vertical" | "horizontal";
};

export const SocialMediaIcons = ({
  orientation = "vertical",
}: SocialMediaIconsProps) => {
  const socials = [
    {
      href: "https://github.com/muleA",
      label: "GitHub",
      icon: <AiFillGithub />,
    },
    {
      href: "https://www.linkedin.com/in/mulugeta-adamu/",
      label: "LinkedIn",
      icon: <AiFillLinkedin />,
    },
    {
      href: "https://t.me/mulugeta_adamu",
      label: "Telegram",
      icon: <BsTelegram />,
    },
    {
      href: "https://medium.com/@mulugeta.adamu97",
      label: "Medium",
      icon: <FaMedium />,
    },
  ];

  return (
    <div
      className={`flex ${
        orientation === "vertical"
          ? "flex-row sm:flex-row lg:flex-col" // Horizontal on small, vertical on large
          : "flex-row"
      } justify-center lg:justify-start items-center space-x-4 lg:space-x-0 lg:space-y-4`}
    >
      {socials.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit my ${social.label} profile`}
          className="p-3 rounded-full bg-gray-600 text-white hover:bg-primary-500 dark:hover:bg-primary-400 transition-transform transform hover:scale-110 shadow-md"
        >
          {React.cloneElement(social.icon, { size: 24 })}
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
