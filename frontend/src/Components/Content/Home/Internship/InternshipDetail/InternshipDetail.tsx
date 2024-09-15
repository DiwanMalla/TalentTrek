import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import Description from "./Intern_Description";
import About from "./Intern_About";
import useFetch from "../../../../hook/useFetch";

interface InternshipDetailsProps {
  title: string;
  location: string;
  duration: string;
  logo?: string;
  id: string;
}

const InternshipDetails: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    title,
    location: jobLocation,
    duration,
    logo,
    id,
  } = location.state as InternshipDetailsProps;

  const [activeTab, setActiveTab] = useState("Descriptions");
  const { data, isLoading, error } = useFetch("job-details", { job_id: id });

  const jobHighlights = data[0]?.job_highlights;
  const jobDescription = data[0]?.job_description;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen p-4">
        <FaSpinner className="animate-spin text-green-500 text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen p-4">
        <p className="text-red-600 text-lg font-semibold">
          Something went wrong: {error.message}
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <button
          className="text-blue-600 hover:text-blue-800 transition-colors"
          onClick={() => navigate(-1)}
        >
          <span className="text-xl font-semibold">Back</span>
        </button>
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <div className="w-6" /> {/* Empty div for spacing */}
      </header>

      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          src={logo || "https://via.placeholder.com/80"}
          alt={title}
          className="w-20 h-20 rounded-full object-cover shadow-lg transition-transform transform hover:scale-110"
        />
      </div>

      {/* Location and Duration */}
      <p className="text-lg text-gray-700 text-center mb-6">
        {formatDate(duration)} / {jobLocation}
      </p>

      {/* Tabs */}
      <div className="flex flex-col md:flex-row border-b border-gray-300 mb-6">
        <button
          className={`flex-1 py-2 px-4 text-lg font-semibold ${
            activeTab === "Descriptions"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          } transition-colors`}
          onClick={() => setActiveTab("Descriptions")}
        >
          Descriptions
        </button>
        <button
          className={`flex-1 py-2 px-4 text-lg font-semibold ${
            activeTab === "About Company"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          } transition-colors`}
          onClick={() => setActiveTab("About Company")}
        >
          About Company
        </button>
      </div>

      {/* Content based on Active Tab */}
      <div className="transition-transform transform duration-500 ease-in-out">
        {activeTab === "Descriptions" ? (
          <Description job_highlight={jobHighlights} />
        ) : (
          <About job_description={jobDescription} />
        )}
      </div>

      {/* Apply Button */}
      <button
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors mt-8"
        onClick={() => handleApply(title)}
      >
        Apply Internship
      </button>
    </div>
  );
};

// Utility function to format date
const formatDate = (dateString: string) => {
  const options = { day: "numeric", month: "short", year: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
};

// Handle Apply Action
const handleApply = (jobTitle: string) => {
  alert(`You have applied for ${jobTitle}`);
};

export default InternshipDetails;
