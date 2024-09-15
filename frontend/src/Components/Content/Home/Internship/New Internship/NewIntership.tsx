import React from "react";
import { motion } from "framer-motion"; // For animations

const NewInternship: React.FC = () => {
  return (
    <div className="p-4  rounded-lg  my-6">
      {/* Title and 'See All' section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">New Internship</h2>
        <a
          href="#"
          className="text-green-500 font-semibold text-lg hover:underline"
        >
          See All
        </a>
      </div>

      {/* Internship Card */}
      <motion.div
        className="flex items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <img
          className="w-14 h-14 mr-4 rounded-full border border-gray-300"
          src="https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png"
          alt="Company Logo"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">
            Product Manager Intern
          </h3>
          <p className="text-sm text-gray-600">Slack</p>
          <p className="text-sm text-gray-600">Silicon Valley</p>
        </div>
      </motion.div>
    </div>
  );
};

export default NewInternship;
