"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SocialMediaIcons from "./social-media";

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
  console.log("pathname", pathName);
  console.log("menus", menus);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") ?? "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  return (
    <>
      {/* Desktop and Mobile Navigation Links */}
      <div className="flex flex-col md:flex-row items-center md:space-x-10 w-full">
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row flex-grow justify-center space-y-4 md:space-y-0 md:space-x-10">
          {menus.map((menu) => (
            <Link
              prefetch
              key={menu.id}
              href={menu.href}
              onClick={closeMenu}
              className={`relative text-lg py-2 flex flex-grow-1 flex-grow-1 font-bold transition-colors duration-200 ${
                pathName === menu.href
                  ? "text-primary-500 font-semibold"
                  : "text-gray-700 hover:text-primary-500 dark:text-gray-300"
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
          className="p-2 rounded-full bg-gray-300 dark:bg-primary-700 hover:bg-gray-400 dark:hover:bg-primary-600 transition-colors"
        >
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </>
  );
}
