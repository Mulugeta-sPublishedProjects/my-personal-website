"use client";

import { useState } from "react";
import { menuItems } from "../shared/menus"; // Replace with actual menu items
import Nav from "./nav";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle
import Link from "next/link";
import { FaPhone } from "react-icons/fa";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-100 dark:bg-gray-900  transition-all duration-300 ease-in-out">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-4">
        {/* Logo Section */}
        <Link href={"/"}>
          <div className="flex flex-col md:flex-col items-start md:items-center space-y-1 md:space-y-0 md:space-x-2">
            <div className="flex items-center space-x-2 text-primary-500 font-bold dark:text-primary-400">
              <FaPhone size={12} />
              <span className="text-sm">+251983054774</span>
            </div>
            <div className="text-xl font-bold text-black dark:text-white hover:cursor-pointer">
              Mulugeta Adamu
            </div>
          </div>
        </Link>

        {/* Desktop & Tablet Navigation */}
        <nav className="hidden sm:flex flex-grow justify-center space-x-8">
          <Nav menus={menuItems} />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="text-primary-800 dark:text-gray-200 focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
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
