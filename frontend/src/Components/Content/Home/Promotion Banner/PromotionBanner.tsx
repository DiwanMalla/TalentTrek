// src/components/PromotionBanner.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const PromotionBanner: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed: ${email}`);
      setEmail(""); // Clear input after subscription
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <motion.div
      className="relative p-8 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white rounded-xl shadow-xl mb-6 max-w-md mx-auto overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold mb-3 text-center">
        Join Our Newsletter!
      </h2>
      <p className="text-lg mb-5 text-center">
        Stay updated with the latest promotions and events.
      </p>
      <div className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-md border border-gray-300 mb-4 bg-white text-gray-800 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleSubscribe}
          className="w-full bg-yellow-500 p-4 rounded-md text-gray-900 font-semibold hover:bg-yellow-400 transition duration-300 ease-in-out"
        >
          Subscribe
        </button>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-30 rounded-xl"></div>
    </motion.div>
  );
};

export default PromotionBanner;
