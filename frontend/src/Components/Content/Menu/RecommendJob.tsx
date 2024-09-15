// src/components/RecommendedScreen.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Home/Header/Header";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
}

const jobRecommendations: Job[] = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Tech Corp",
    location: "New York, NY",
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Innovate LLC",
    location: "San Francisco, CA",
  },
  {
    id: "3",
    title: "UX Designer",
    company: "Creative Solutions",
    location: "Los Angeles, CA",
  },
  // Add more job recommendations here
];

const RecommendedScreen: React.FC = () => {
  const [filter, setFilter] = useState("");

  const handleApply = (jobTitle: string) => {
    alert(`Application Sent: You have applied for ${jobTitle}`);
    // You can also navigate to a different screen or perform other actions here
  };

  const filteredJobs = jobRecommendations.filter((job) =>
    job.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="p-4 flex flex-col items-center  bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Job Recommendations
        </h1>

        {/* Filter Component */}
        <div className="mb-6 w-full max-w-md">
          <input
            type="text"
            placeholder="Filter by job title..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 bg-white text-gray-800 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="w-full max-w-3xl">
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              className="bg-white p-6 mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                {job.title}
              </h2>
              <p className="text-lg text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500">{job.location}</p>
              <button
                onClick={() => handleApply(job.title)}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition-colors duration-300"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommendedScreen;
