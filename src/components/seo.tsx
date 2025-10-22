"use client";

import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  author?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  siteName?: string;
}

// Memoize default keywords to reduce memory usage
const defaultKeywords = [
  "Frontend Developer",
  "React Developer",
  "Next.js Expert",
  "TypeScript Developer",
  "Web Developer Ethiopia",
  "JavaScript Developer",
  "UI/UX Developer",
  "Fullstack Developer",
  "Ethiopian Developer",
  "Addis Ababa Developer",
  "Mobile App Developer",
  "Web Application Developer",
  "SEO Expert",
  "Responsive Design",
];

// Memoize default values
const DEFAULT_SITE_NAME = "Mulugeta Adamu Portfolio";
const DEFAULT_DESCRIPTION =
  "Experienced Frontend Developer specializing in React, Next.js, and modern web technologies. Building scalable applications for Ethiopian businesses and global clients. Expert in responsive design and SEO optimization.";
const DEFAULT_IMAGE = "/og-image.png";
const DEFAULT_URL = "https://mulugeta-portfolio.vercel.app";
const DEFAULT_AUTHOR = "Mulugeta Adamu";
const DEFAULT_LOCALE = "en_US";
const DEFAULT_TYPE = "website";

// Create a memoized version of the SEO component
const SEOComponent: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  author,
  type = DEFAULT_TYPE,
  publishedTime,
  modifiedTime,
  section,
  tags,
  locale = DEFAULT_LOCALE,
  siteName = DEFAULT_SITE_NAME,
}) => {
  // Use memoized values to reduce computation
  const siteTitle = title
    ? `${title} | Mulugeta Adamu - Experienced Frontend Developer`
    : "Mulugeta Adamu - Experienced Frontend Developer & React Expert";

  const siteDescription = description || DEFAULT_DESCRIPTION;
  const siteImage = image || DEFAULT_IMAGE;
  const siteUrl = url || DEFAULT_URL;
  const siteAuthor = author || DEFAULT_AUTHOR;

  // Efficiently combine keywords
  const siteKeywords = React.useMemo(() => {
    if (keywords) {
      return [...defaultKeywords, ...keywords.split(",")].join(", ");
    }
    return defaultKeywords.join(", ");
  }, [keywords]);

  return (
    <>
      {/* Primary meta tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content={siteAuthor} />
      <meta name="theme-color" content="#3b82f6" />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:alt" content={siteTitle} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Article specific tags */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {section && <meta property="article:section" content={section} />}
      {tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:image:alt" content={siteTitle} />
      <meta name="twitter:creator" content="@mulugeta_dev" />
      <meta name="twitter:site" content="@mulugeta_dev" />

      {/* Additional SEO */}
      <link rel="canonical" href={siteUrl} />

      {/* Mobile and accessibility */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
    </>
  );
};

// Memoize the entire component to prevent unnecessary re-renders
export const SEO = React.memo(SEOComponent);

// Set display name for debugging
SEO.displayName = "SEO";
