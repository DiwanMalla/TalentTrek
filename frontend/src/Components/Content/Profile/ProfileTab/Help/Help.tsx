import React, { useEffect, useState } from "react";

import { FaQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../../../Home/Header/Header";

const HelpScreen: React.FC = () => {
  const [fade, setFade] = useState(0);

  useEffect(() => {
    const fadeIn = () => {
      let opacity = 0;
      const interval = setInterval(() => {
        opacity += 0.05;
        setFade(opacity);
        if (opacity >= 1) clearInterval(interval);
      }, 50);
    };

    fadeIn();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">Help & Support</h1>
        </header>

        {/* Content */}
        <motion.main
          className="flex flex-col items-center justify-center flex-1 p-6 text-center"
          style={{ opacity: fade }}
          transition={{ duration: 1 }}
        >
          <FaQuestionCircle size={80} className="text-blue-500 mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            How can we help you?
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Our support team is available 24/7 to help you with any issues or
            questions. Please reach out to us at:
          </p>
          <p className="text-lg font-semibold text-blue-500 mb-2">
            help@talenttrek.com
          </p>
          <p className="text-lg font-semibold text-blue-500 mb-4">+123456789</p>
          <button
            onClick={() => alert("Contacting support...")}
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Contact Support
          </button>
        </motion.main>
      </div>
    </>
  );
};

export default HelpScreen;
