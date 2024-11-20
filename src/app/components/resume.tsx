"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const ResumePage: React.FC = () => {
  const documents: { [key: string]: string } = {
    CV: "/resume-two.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
    "BSC Degree Certificate":
      "/educational-docs/bsc.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
    "Grade 12 Certificate":
      "/educational-docs/grade12Matric.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
    "Grade 10 Certificate":
      "/educational-docs/grade10Matric.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
    "Grade 8 Certificate":
      "/educational-docs/grade8.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
  };

  const [selectedDocument, setSelectedDocument] =
    useState<keyof typeof documents>("CV");

  const handleDocumentChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedDocument(event.target.value as keyof typeof documents);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col w-full min-h-screen dark:bg-gray-900 p-4"
    >
      <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
        {/* Dropdown */}
        <select
          id="document-select"
          value={selectedDocument}
          onChange={handleDocumentChange}
          className=" border-solid border-2 border-primary-600 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md 
           focus:outline-none w-full sm:w-auto"
        >
          {Object.keys(documents).map((document) => (
            <option key={document} value={document}>
              {document}
            </option>
          ))}
        </select>

        {/* Download Button */}
        <a
          href={documents[selectedDocument]}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-600 text-white px-4 py-2 rounded-md shadow-md flex items-center space-x-2 hover:bg-primary-700 transition w-full sm:w-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v12m0 0l-4-4m4 4l4-4m0 6H8"
            />
          </svg>

          <span className=" ml-2 text-sm sm:text-base">{selectedDocument}</span>
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="w-full flex-grow flex justify-center">
        <iframe
          src={documents[selectedDocument]}
          title={selectedDocument as string}
          className="w-full max-w-screen h-[65vh] sm:h-[75vh] md:h-[85vh] rounded-lg shadow-lg filter grayscale"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ResumePage;
