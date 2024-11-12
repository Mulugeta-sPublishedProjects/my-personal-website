"use client";
import { useState, useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";
import SocialMediaIcons from "./social-media";

// Scroll to top functionality (moved outside of Footer component)
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Show scroll button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setShowScrollButton(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative dark:bg-gray-800 px-4 md:px-8 lg:px-16 bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
        {/* Left Section: Contact Information */}
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 order-1 md:order-1">
          <p>
            Contact:{" "}
            <a
              href="mailto:mulugeta.adamu97@gmail.com"
              className="hover:underline text-primary-600 dark:text-primary-400"
            >
              mulugeta.adamu97@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+251983054774"
              className="hover:underline text-primary-600 dark:text-primary-400"
            >
              +251 983 054 774
            </a>
          </p>
        </div>

        {/* Center Section: Name and Copyright */}
        <div className="order-2">
          <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
            Mulugeta Adamu - Frontend Developer
          </p>
          <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mt-1">
            &copy; {new Date().getFullYear()} Mulugeta Adamu. All rights
            reserved.
          </p>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex space-x-4 order-3 md:order-3">
          <SocialMediaIcons orientation="horizontal" />
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-400 dark:hover:bg-primary-500 shadow-lg transition-all"
          aria-label="Scroll to top"
        >
          <BsArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
