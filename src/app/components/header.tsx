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
    <header className="fixed top-0 left-0  px-4 md:px-8 lg:px-16 w-full z-50 transition-colors duration-300 bg-gray-100 dark:bg-gray-900 ">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex text-xs text-primary-500 font-bold flex-row">
            <FaPhone /> +251983054774
          </div>
          <div className="text-2xl hover:cursor-pointer text-primary-600 font-bold  dark:text-primary-400">
            Mulugeta Adamu
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center space-x-6">
          <Nav menus={menuItems} />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 px-4 py-6 space-y-4 ">
          <Nav menus={menuItems} closeMenu={() => setIsMobileMenuOpen(false)} />
        </nav>
      )}
    </header>
  );
}
