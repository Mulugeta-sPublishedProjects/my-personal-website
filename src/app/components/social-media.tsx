import React from "react";
import { BsTelegram } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaMedium } from "react-icons/fa";

type SocialMediaIconsProps = {
  orientation?: "vertical" | "horizontal";
};

export const SocialMediaIcons = ({
  orientation = "vertical",
}: SocialMediaIconsProps) => {
  const socials = [
    {
      href: "https://github.com",
      label: "GitHub",
      icon: <AiFillGithub />,
    },
    {
      href: "https://linkedin.com",
      label: "LinkedIn",
      icon: <AiFillLinkedin />,
    },
    {
      href: "https://t.me",
      label: "Telegram",
      icon: <BsTelegram />,
    },
    {
      href: "https://medium.com/@yourusername",
      label: "Medium",
      icon: <FaMedium />,
    },
    {
      href: "https://www.youtube.com/channel/yourchannel",
      label: "YouTube",
      icon: <AiFillYoutube />,
    },
  ];

  return (
    <div
      className={`flex ${
        orientation === "vertical" ? "flex-col space-y-4" : "flex-row space-x-4"
      }`}
    >
      {socials.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="p-3 rounded-full bg-gray-800 text-white hover:bg-primary-500 dark:hover:bg-primary-400 transition-transform transform hover:scale-110"
        >
          {React.cloneElement(social.icon, { size: 20 })}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
