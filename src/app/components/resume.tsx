"use client";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";

const ResumePage: React.FC = () => {
  // Use URL parameters to adjust viewer settings
  const resumeUrl = "/Profile.pdf#toolbar=1&navpanes=0&scrollbar=0&zoom=100";

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col w-full min-h-screen dark:bg-gray-900 "
    >
      {/* Download Button */}
      <div className="flex justify-center mb-2">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md shadow-md flex items-center space-x-2 hover:bg-primary-700 transition"
        >
          <AiOutlineDownload />
          <span>Download CV</span>
        </a>
      </div>

      {/* Full-width PDF Viewer */}
      <div className="w-full min-h-screen overflow-hidden">
        <iframe
          src={resumeUrl}
          title="Resume"
          className="w-full min-h-screen border-none"
          style={{
            border: "none",
            backgroundColor: "white",
          }}
        ></iframe>
      </div>
    </motion.div>
  );
};

export default ResumePage;
