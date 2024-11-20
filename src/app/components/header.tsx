"use client";

import { useState } from "react";
import { menuItems } from "../shared/menus"; // Replace with actual menu items
import Nav from "./nav";
import Link from "next/link";

// Menu Icon Component
const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

// Close Icon Component
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// Phone Icon Component
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1.15 1.15 0 011.33-.27 11.72 11.72 0 003.63 1.16c.73.13 1.26.76 1.26 1.5v3.17a1.25 1.25 0 01-1.36 1.25A19.93 19.93 0 012 4.36 1.25 1.25 0 013.25 3h3.17c.73 0 1.37.53 1.5 1.26.12 1.06.43 2.59 1.16 3.63a1.15 1.15 0 01-.27 1.33l-2.2 2.2z" />
  </svg>
);

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-4">
        <Link href={"/"}>
          <div className="flex flex-col items-start md:items-center md:space-x-4">
            {/* Phone Number Section */}
            <div className="flex items-center space-x-2 text-primary-700 font-bold dark:text-primary-300">
              <PhoneIcon />
              <span className="text-sm">+251983054774</span>
            </div>
            <div
              className="text-md flex text-base sm:text-sm md:text-md lg:text-xl font-bold text-gray-800 dark:text-gray-100 hover:cursor-pointer"
              style={{ whiteSpace: "nowrap" }}
            >
              Mulugeta Adamu
            </div>

            {/* Logo Text */}
          </div>
        </Link>

        {/* Desktop & Tablet Navigation */}
        <nav className="hidden sm:flex flex-grow justify-center space-x-6 md:space-x-8">
          <Nav menus={menuItems} />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          className={`sm:hidden bg-white dark:bg-gray-800 absolute w-full left-0 top-[65px] transition-transform duration-500 ease-in-out`}
        >
          <div className="px-4 py-6 space-y-4">
            <Nav
              menus={menuItems}
              closeMenu={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}
