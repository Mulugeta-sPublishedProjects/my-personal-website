"use client";
import React, { useState, useEffect } from "react";
import { BsTelegram } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaMedium } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

type MenuItem = {
  id: number;
  href: string;
  label: string;
};

interface NavProps {
  menus: MenuItem[];
  closeMenu?: () => void; // Optional function to close mobile menu
}

export default function Nav({ menus, closeMenu }: NavProps) {
  const [theme, setTheme] = useState("light");
  const pathName = usePathname();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <>
      {/* Desktop and Mobile Navigation Links */}
      <div className="flex flex-col md:flex-row items-center md:space-x-6 w-full">
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row flex-grow justify-center space-y-4 md:space-y-0 md:space-x-6">
          {menus.map((menu) => (
            <Link
              key={menu.id}
              href={menu.href}
              onClick={closeMenu}
              className={`relative text-lg py-2 font-bold transition-colors duration-200 ${
                pathName === menu.href
                  ? "text-primary-500 font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {menu.label}
              {pathName === menu.href && (
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-primary-500 rounded-full animate-slideIn"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full bg-gray-300 dark:bg-primary-700
           hover:bg-gray-400 dark:hover:bg-primary-600 transition-colors"
        >
          {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* Social Media Icons */}
        <div className="flex space-x-4 ml-auto md:mt-0">
          {[
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
            { href: "https://t.me", label: "Telegram", icon: <BsTelegram /> },
            {
              href: "https://medium.com/@yourusername",
              label: "Medium",
              icon: <FaMedium />,
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-primary-500 dark:hover:bg-primary-400 transition-transform transform hover:scale-110 "
            >
              {React.cloneElement(social.icon, { size: 20 })}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
