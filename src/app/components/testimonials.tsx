"use client";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Project Lead",
    image: "/images/alice.jpg",
    message:
      "Working with [Your Name] was an incredible experience. Their attention to detail and commitment to excellence in every project have consistently exceeded my expectations. Highly recommend for any web development needs!",
  },
  {
    name: "Mark Smith",
    role: "Software Engineer",
    image: "/images/mark.jpg",
    message:
      "I've collaborated with [Your Name] on several projects, and their expertise in Flutter and frontend development always brings our ideas to life. They’re a true professional with exceptional problem-solving skills.",
  },
  {
    name: "Sophia Brown",
    role: "UX Designer",
    image: "/images/sophia.jpg",
    message:
      "[Your Name] is a developer who truly understands the importance of user experience. They are proactive in providing feedback and insights that make the final product outstanding. A pleasure to work with!",
  },
  {
    name: "Liam White",
    role: "Marketing Specialist",
    image: "/images/liam.jpg",
    message:
      "Thanks to [Your Name]'s skills, our website now has a clean, modern, and highly functional design. Their knowledge of the latest technologies and frameworks is invaluable. Highly recommend their services!",
  },
  {
    name: "Emma Wilson",
    role: "Content Strategist",
    image: "/images/emma.jpg",
    message:
      "The portfolio website [Your Name] developed showcases their versatility as a developer. They were responsive, innovative, and committed to delivering a high-quality product that represents my work perfectly.",
  },
];

const TestimonialPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-10">
        What Clients and Colleagues Are Saying
      </h2>
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <Image
              height={100}
              width={100}
              src={testimonial.image}
              alt={`${testimonial.name}'s profile`}
              className="w-20 h-20 rounded-full mb-4 border-2 border-primary-500 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {testimonial.name}
            </h3>
            <p className="text-primary-500 text-sm font-medium mb-3">
              {testimonial.role}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {testimonial.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
