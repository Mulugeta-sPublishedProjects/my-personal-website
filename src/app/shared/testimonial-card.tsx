import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  testimonial: {
    id: string;
    name: string;
    email: string;
    current_role: string;
    company: string;
    image_url?: string;
    message: string;
    created_at: string;
  };
  onSeeMore: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  onSeeMore,
}) => {
  const { name, email, current_role, company, image_url, message, created_at } =
    testimonial;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center sm:items-start transition hover:scale-105 hover:shadow-xl border border-gray-200 dark:border-gray-700 space-y-4">
      {/* Image */}
      <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary-500 shadow-md">
        <Image
          src={image_url ?? "/person.webp"}
          alt={`${name}'s profile`}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="text-center sm:text-left flex-1">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {name}
        </h3>
        <p className="text-sm text-primary-500 italic">{email}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          {current_role} at <span className="font-medium">{company}</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {new Date(created_at).toLocaleDateString()}
        </p>

        {/* Message */}
        <p className="text-gray-600 dark:text-gray-300 mt-3 line-clamp-3">
          {message}
        </p>
        {message.length > 100 && (
          <button
            onClick={onSeeMore}
            className="text-primary-500 font-medium mt-2 hover:underline"
          >
            See More
          </button>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
