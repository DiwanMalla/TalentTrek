import React from "react";
import { useNavigate } from "react-router-dom";

const LandingScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between items-center min-h-screen p-5 bg-white">
      <div className="flex flex-col justify-center items-center flex-grow text-center">
        {/* Main Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
          <span className="text-blue-900">Find </span>
          <span className="text-green-600">Dream Internship </span>
          Program
        </h1>

        {/* Placeholder for the image */}
        <img
          className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain mb-5"
          src="../loadingç.jpg" // Update this path accordingly
          alt="Internship"
        />

        {/* Subtitle Text */}
        <p className="text-base md:text-lg text-gray-600 px-4 mb-10">
          Challenge yourself towards your future dream job and get a bunch of
          benefits
        </p>
      </div>

      {/* Let's Begin Button */}
      <button
        className="bg-green-600 text-white py-3 px-6 md:py-3 md:px-8 lg:py-4 lg:px-12 rounded-full mb-7 text-base md:text-lg"
        onClick={() => navigate("/login")} // Navigates to login screen
      >
        Let's Begin
      </button>

      <p className="text-sm md:text-base text-gray-800 text-center px-4">
        This app is for a class assignment and not for commercial purposes.
      </p>
    </div>
  );
};

export default LandingScreen;
