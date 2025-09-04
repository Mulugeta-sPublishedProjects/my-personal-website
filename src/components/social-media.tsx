"use client";

import React from "react";
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
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.243c-3.338.726-4.043-1.416-4.043-1.416-.546-1.386-1.333-1.756-1.333-1.756-.9-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.123-.305-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.267 1.984-.399 3.003-.404 1.02.005 2.047.137 3.006.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.241 2.871.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.807 5.624-5.479 5.921.43.371.814 1.102.814 2.222v3.293c0 .319.218.694.824.577C20.565 22.093 24 17.597 24 12.297c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/mulugeta-adamu/",
      label: "LinkedIn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3.25v-11h3.25v11zm-1.625-12.25c-1.031 0-1.625-.696-1.625-1.553 0-.873.606-1.553 1.658-1.553 1.052 0 1.625.68 1.645 1.553 0 .857-.593 1.553-1.678 1.553zm13.375 12.25h-3.25v-5.5c0-1.378-.027-3.125-1.906-3.125-1.906 0-2.2 1.494-2.2 3.031v5.594h-3.25v-11h3.125v1.531h.045c.434-.785 1.496-1.609 3.074-1.609 3.287 0 3.894 2.166 3.894 4.984v6.094z" />
        </svg>
      ),
    },
    {
      href: "https://t.me/mulugeta_adamu",
      label: "Telegram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12zm4.733 8.633l-1.633 7.717c-.126.547-.438.684-.89.426l-2.46-1.814-1.188 1.148c-.131.133-.241.242-.493.242l.176-2.492 4.518-4.073c.196-.176-.041-.275-.304-.1l-5.59 3.486-2.41-.753c-.523-.166-.534-.523.109-.773l9.428-3.629c.434-.176.813.1.67.773z" />
        </svg>
      ),
    },
    {
      href: "https://medium.com/@mulugeta.adamu97",
      label: "Medium",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M20.743 6.334c.093-.091.093-.24 0-.33l-1.869-1.8c-.058-.056-.146-.056-.23-.056h-3.077l-3.932 9.326-3.503-9.326h-3.88c-.08 0-.16.002-.237.056l-1.936 1.8c-.093.091-.093.24 0 .33l2.958 3.02v6.906l-2.937 2.973c-.093.091-.093.24 0 .33l1.869 1.8c.058.056.146.056.23.056h3.496c.143 0 .242-.086.242-.238v-6.332l3.635 9.065h.07l4.308-10.664v7.931c0 .151.096.238.237.238h3.61c.064 0 .127-.024.173-.068.044-.046.068-.109.068-.173v-11.332l3.044-3.084zm-16.83-4.51v-.01-.01l.01.01c0 .002-.006.006-.01.01zm-.01-.01v.02l-.01-.02c0-.001.006-.005.01-.005z" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className={`flex ${
        orientation === "vertical"
          ? "sm:flex-col items-start space-y-0 space-x-4 md:space-x-0  flex-row  sm:justify-start sm:space-x-4 sm:space-y-2"
          : "flex-row justify-center space-x-4"
      }`}
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
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
