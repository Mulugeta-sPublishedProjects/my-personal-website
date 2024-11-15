/* eslint-disable unicorn/prevent-abbreviations */
"use client";
import React, { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import supabase from "../shared/supabse";
import { Testimonial } from "../models/testimonial";
import { Splash } from "../shared/loader";

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
  // Handle "See More" button click to open the modal
  const handleSeeMoreClick = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 ">
      <div className="flex flex-col md:flex-row justify-center items-center space-x-24 text-center py-12">
        <div className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Hear From Those I`ve Worked With
        </div>

        <div>
          <button
            className="bg-primary-500 text-white px-6 py-3 
      rounded-lg shadow-lg hover:bg-primary-600 transition duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            Add Testimonial
          </button>
        </div>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="loader">
            <Splash />
          </div>
        </div>
      ) : testimonials.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-12">
          <svg
            width="200px"
            height="200px"
            viewBox="0 0 312 312"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="empty_inbox"
              data-name="empty inbox"
              transform="translate(-2956.982 -3048.416)"
            >
              <path
                id="Path_26"
                data-name="Path 26"
                d="M3268.982,3078.286a29.869,29.869,0,0,0-29.869-29.87H2986.851a29.869,29.869,0,0,0-29.869,29.87v252.259a29.87,29.87,0,0,0,29.869,29.871h252.262a29.87,29.87,0,0,0,29.869-29.871Zm-281.9-4.87H3239.3a5.378,5.378,0,0,1,5.684,5.268v141.732h-73.54a12.038,12.038,0,0,0-12.114,12.025,47.854,47.854,0,0,1-95.668,1.918,11.273,11.273,0,0,0,.162-1.906,12.049,12.049,0,0,0-12.116-12.037h-70.724V3078.684C2980.982,3075.574,2983.97,3073.416,2987.08,3073.416Zm252.218,263H2987.08c-3.11,0-6.1-2.4-6.1-5.514v-86.486h59.426a72.092,72.092,0,0,0,142.13,0h62.444V3330.9A5.577,5.577,0,0,1,3239.3,3336.416Z"
                fill="#FF6B6B"
              />
            </g>
          </svg>

          <p className="text-gray-700 dark:text-gray-300 text-lg mt-4">
            No testimonials yet.
          </p>
        </div>
      ) : (
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start transition-all hover:scale-105 hover:shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              {/* Right Top - Added Date */}
              <p className="text-xs text-primary-500 dark:text-gray-400 absolute top-4 right-6 italic">
                Added on:{" "}
                {new Date(testimonial.created_at).toLocaleDateString()}
              </p>

              {/* Left Section: Image */}
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 text-center md:text-left">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary-500 shadow-md">
                  <Image
                    height={100}
                    width={100}
                    src={testimonial.image_url ?? "/images/default-avatar.png"}
                    alt={`${testimonial.name}'s profile`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Right Section: Details */}
              <div className="flex flex-col text-center md:text-left w-full">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-primary-500 text-xs sm:text-sm font-medium mb-2 italic">
                  {testimonial.email}
                </p>
                <p className=" text-sm sm:text-base font-medium mb-2">
                  {testimonial.current_role} at{" "}
                  <span className="text-primary-500">
                    {" "}
                    {testimonial.company}
                  </span>
                </p>

                {/* Message Section with Toggle for More Content */}
                <div className="relative">
                  <p
                    className={`text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed transition-all ${
                      isMessageExpanded
                        ? "max-h-full"
                        : "max-h-16 overflow-hidden"
                    }`}
                  >
                    {testimonial.message}
                  </p>

                  {testimonial.message.length > 100 && (
                    <button
                      onClick={() => handleSeeMoreClick(testimonial)}
                      className="text-primary-500 mt-2"
                    >
                      See More
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 max-w-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Add a Testimonial
            </h3>
            <form onSubmit={handleAddTestimonial} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={newTestimonial.name}
                onChange={(e) =>
                  setNewTestimonial({ ...newTestimonial, name: e.target.value })
                }
                required
                className="w-full p-3 border rounded text-sm focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={newTestimonial.email}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    email: e.target.value,
                  })
                }
                required
                className="w-full p-3 border rounded text-sm focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="text"
                placeholder="Current Role"
                value={newTestimonial.current_role}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    current_role: e.target.value,
                  })
                }
                required
                className="w-full p-3 border rounded text-sm focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="text"
                placeholder="Company"
                value={newTestimonial.company}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    company: e.target.value,
                  })
                }
                required
                className="w-full p-3 border rounded text-sm focus:ring-2 focus:ring-primary-500"
              />
              <textarea
                placeholder="Message"
                value={newTestimonial.message}
                rows={5}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    message: e.target.value,
                  })
                }
                required
                className="w-full p-3 border rounded text-sm focus:ring-2 focus:ring-primary-500"
              ></textarea>
              <div className="w-full p-2 border rounded text-sm">
                <label
                  htmlFor="profilePhoto"
                  className="block bg-gray-500 text-white text-center py-2 rounded-lg cursor-pointer hover:bg-primary-600 transition duration-300"
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
                  <div className="flex justify-center mt-4">
                    <Image
                      src={photoPreview}
                      alt="Profile Photo Preview"
                      width={100}
                      height={100}
                      className="rounded-full object-cover border-2 border-primary-500"
                    />
                  </div>
                )}
              </div>

              <div className="flex justify-between">
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
      {isModalOpen && selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm w-11/12 max-w-lg p-8">
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
