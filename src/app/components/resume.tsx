"use client";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import React, { useState } from "react";

const ResumePage: React.FC = () => {
  // Define document types and URLs
  const documents: { [key: string]: string } = {
    CV: "/cv.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
    "BSC Degree Certificate":
      "/educational-docs/bsc.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
    "Grade 12 Certificate":
      "/educational-docs/grade12Matric.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
    "Grade 10 Certificate":
      "/educational-docs/grade10Matric.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
    "Grade 8 Certificate":
      "/educational-docs/grade8.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100",
  };

  // Use keyof to restrict selectedDocument to document keys
  const [selectedDocument, setSelectedDocument] =
    useState<keyof typeof documents>("CV");

  // Handle document selection change
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
      {/* Document Selection and Download Button Container */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 items-center mb-4 space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="flex items-center space-x-2">
          <select
            id="document-select"
            value={selectedDocument}
            onChange={handleDocumentChange}
            className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-2 rounded-md shadow-md focus:outline-none"
          >
            {Object.keys(documents).map((document) => (
              <option key={document} value={document}>
                {document}
              </option>
            ))}
          </select>
        </div>

        {/* Download Button */}
        <a
          href={documents[selectedDocument]}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-600 text-white px-4 py-2 rounded-md shadow-md flex items-center space-x-2 hover:bg-primary-700 transition"
        >
          <AiOutlineDownload className="text-lg" />
          <span className="text-sm"> {selectedDocument}</span>
        </a>
      </div>

      {/* Centered PDF Viewer */}
      <div className="w-full flex-grow flex justify-center">
        <iframe
          src={documents[selectedDocument]}
          title={selectedDocument as string}
          className="w-full max-w-screen h-[75vh] sm:h-[85vh] bg-primary-100 rounded-lg shadow-lg filter grayscale"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ResumePage;
