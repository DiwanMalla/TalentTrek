import React from "react";

interface AboutProps {
  job_description?: string;
}

const About: React.FC<AboutProps> = ({ job_description }) => (
  <div className="bg-blue-50 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl mb-6">
    <h3 className="text-lg font-semibold text-gray-800 mb-3">About the Job:</h3>
    <p className="text-gray-700">{job_description}</p>
  </div>
);

export default About;
