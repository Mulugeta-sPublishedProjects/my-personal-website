/* eslint-disable unicorn/consistent-function-scoping */
/* eslint-disable unicorn/prevent-abbreviations */
"use client";
import React, { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import supabase from "../shared/supabse";
import { Testimonial } from "../models/testimonial";
import { Splash } from "../shared/loader";
import { EmptyState } from "../shared/empty-state";

interface NewTestimonial {
  name: string;
  email: string;
  message: string;
  current_role: string;
  company: string;
  image_url?: string;
}

const TestimonialPage: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [newTestimonial, setNewTestimonial] = useState<NewTestimonial>({
    name: "",
    email: "",
    message: "",
    current_role: "",
    company: "",
  });
  const [profilePhoto, setProfilePhoto] = useState<File | null>();
  const [photoPreview, setPhotoPreview] = useState<string | null>();
  const [isMessageExpanded, setIsMessageExpanded] = useState<boolean>(false);
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<Testimonial | null>();
  // Fetch testimonials from Supabase
  const fetchTestimonials = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching testimonials:", error);
    } else {
      setTestimonials(data || []);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Handle file selection and preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setProfilePhoto(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string); // Set preview to base64 data URL
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(undefined);
    }
  };

  // Upload profile photo to Supabase storage
  const uploadProfilePhoto = async (): Promise<string | null> => {
    if (!profilePhoto) return "";

    const fileName = `${Date.now()}-${profilePhoto.name}`;
    const { data, error } = await supabase.storage
      .from("profile-photos")
      .upload(fileName, profilePhoto);

    if (error) {
      console.error("Error uploading profile photo:", error);
      return "";
    }

    return data?.path
      ? supabase.storage.from("profile-photos").getPublicUrl(data.path)?.data
          ?.publicUrl
      : "";
  };

  // Add a new testimonial to Supabase
  const handleAddTestimonial = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const profilePhotoUrl = await uploadProfilePhoto();

      const { data, error } = await supabase
        .from("testimonials")
        .insert([{ ...newTestimonial, image_url: profilePhotoUrl }])
        .select("*"); // Retrieve the inserted row

      if (error) {
        console.error("Error adding testimonial:", error);
      } else if (data && data.length > 0) {
        setTestimonials((prev) => [data[0], ...prev]); // Add the new testimonial to the top
        setNewTestimonial({
          name: "",
          email: "",
          message: "",
          current_role: "",
          company: "",
        });
        setProfilePhoto(undefined);
        setPhotoPreview(undefined);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleSeeMoreClick = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsMessageExpanded(true);
  };

  const handleCloseModal = () => {
    setIsMessageExpanded(false);
    setSelectedTestimonial(undefined);
  };

  const truncateAtSentence = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;

    const truncated = text.slice(0, maxLength);
    const lastPeriod = truncated.lastIndexOf(".");
    return lastPeriod === -1 ? truncated : truncated.slice(0, lastPeriod + 1);
  };
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Splash />
      </div>
    );
  }

  if (testimonials.length === 0) {
    return <EmptyState />;
  }
  return (
    <div className="min-h-screen  dark:bg-gray-900 ">
      <div className="flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-24 text-center py-6 md:py-12">
        {/* Heading */}
        <div className="hidden sm:block text-lg md:text-xl  text-gray-700 dark:text-gray-100">
          Hear From Those I`ve Worked With
        </div>

        {/* Button */}
        <div>
          <button
            className="bg-primary-500 text-white px-6 py-3 rounded-lg  hover:bg-primary-600 transition duration-300"
            onClick={() => setIsModalOpen(true)}
            aria-label="Open Add Testimonial Modal"
          >
            Add Testimonial
          </button>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.id}
            className="relative bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start transition-transform hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700"
            aria-labelledby={`testimonial-${testimonial.id}`}
          >
            {/* Right Top - Added Date */}
            <p className="text-xs text-black dark:text-gray-400 absolute top-4 right-4 italic">
              Added on: {new Date(testimonial.created_at).toLocaleDateString()}
            </p>

            {/* Left Section: Image */}
            <div className="shrink-0 mb-4 md:mb-0 md:mr-6 text-center md:text-left">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary-500 shadow-md">
                <Image
                  height={100}
                  width={100}
                  src={testimonial.image_url || "/person.webp"}
                  alt={`${testimonial.name}'s profile`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Right Section: Details */}
            <div className="flex flex-col text-center md:text-left w-full">
              <h3
                id={`testimonial-${testimonial.id}`}
                className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 truncate"
              >
                {testimonial.name}
              </h3>
              <p className="text-gray-900 text-xs sm:text-sm font-medium mb-2 italic truncate">
                {testimonial.email}
              </p>
              {testimonial.current_role && testimonial.company && (
                <p className="text-sm sm:text-base font-medium mb-2">
                  {testimonial.current_role} at{" "}
                  <span className="text-primary-500">
                    {testimonial.company}
                  </span>
                </p>
              )}

              {/* Message Section */}
              <div className="relative">
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed transition-all line-clamp-3">
                  {truncateAtSentence(testimonial.message, 200)}
                </p>

                {testimonial.message.length > 100 && (
                  <button
                    onClick={() => handleSeeMoreClick(testimonial)}
                    className="text-primary-500 mt-2 hover:underline"
                    aria-label={`Read full testimonial from ${testimonial.name}`}
                  >
                    See More
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 my-4 lg:my-12 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-y-auto"
          tabIndex={-1}
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg w-11/12 max-w-xl">
            <form
              onSubmit={handleAddTestimonial}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg "
            >
              <h3 className="text-xl font-bold py-2 text-gray-800 dark:text-gray-100 mb-6 text-center">
                Add a Testimonial
              </h3>{" "}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={newTestimonial.name}
                    onChange={(e) =>
                      setNewTestimonial({
                        ...newTestimonial,
                        name: e.target.value,
                      })
                    }
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 focus:ring-2 "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={newTestimonial.email}
                    onChange={(e) =>
                      setNewTestimonial({
                        ...newTestimonial,
                        email: e.target.value,
                      })
                    }
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 focus:ring-2 "
                  />
                </div>

                {/* Current Role */}
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Current Role
                  </label>
                  <input
                    id="role"
                    type="text"
                    placeholder="Your Role"
                    value={newTestimonial.current_role}
                    onChange={(e) =>
                      setNewTestimonial({
                        ...newTestimonial,
                        current_role: e.target.value,
                      })
                    }
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 focus:ring-2 "
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Company Name"
                    value={newTestimonial.company}
                    onChange={(e) =>
                      setNewTestimonial({
                        ...newTestimonial,
                        company: e.target.value,
                      })
                    }
                    required
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 focus:ring-2 "
                  />
                </div>
              </div>
              {/* Message */}
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  value={newTestimonial.message}
                  rows={4}
                  onChange={(e) =>
                    setNewTestimonial({
                      ...newTestimonial,
                      message: e.target.value,
                    })
                  }
                  required
                  className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 focus:ring-2 "
                ></textarea>
              </div>
              {/* Profile Photo */}
              <div className="mt-4">
                <label
                  htmlFor="profilePhoto"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Profile Photo
                </label>
                <label
                  htmlFor="profilePhoto"
                  className="block bg-primary-500 text-white text-center py-2 rounded-lg cursor-pointer hover:bg-primary-600 transition duration-300"
                >
                  Choose Photo
                </label>
                <input
                  id="profilePhoto"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {photoPreview && (
                  <div className="flex justify-center mt-2">
                    <Image
                      src={photoPreview}
                      alt="Profile Photo Preview"
                      width={100}
                      height={50}
                      className="rounded-md object-contain border-2 border-primary-500"
                    />
                  </div>
                )}
              </div>
              {/* Buttons */}
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300"
                  onClick={() => {
                    setIsModalOpen(false);
                    setPhotoPreview(undefined);
                    setProfilePhoto(undefined);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal */}
      {isMessageExpanded && selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xs w-11/12 max-w-lg p-8">
            <p className="text-primary-500 text-xs font-medium mb-4">
              {selectedTestimonial.current_role} at{" "}
              {selectedTestimonial.company}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {selectedTestimonial.message}
            </p>

            <button
              onClick={handleCloseModal}
              className="mt-4 bg-primary-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-primary-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialPage;
