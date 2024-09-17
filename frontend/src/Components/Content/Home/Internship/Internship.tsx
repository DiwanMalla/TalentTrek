import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import useFetch from "../../../hook/useFetch";
import InternshipItem from "./InternshipItem"; // Adjust path as needed

const Internships: React.FC = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useFetch("search", {
    query: "node.js developer in new-york,usa",
    num_pages: 1,
  }); // Adjust query parameters as needed

  // Limit the number of items to 3 or 4
  const displayedInternships = data.slice(0, 5);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full p-4">
        <FaSpinner className="animate-spin text-green-500 text-4xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full p-4">
        <p className="text-red-600 text-lg font-semibold">
          Failed to load jobs.{error} Update Rapid api
        </p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Actively Hiring</h2>
        <button
          className="text-green-600 font-semibold text-lg hover:underline focus:outline-none"
          onClick={() => navigate("/all-internships")}
        >
          See All
        </button>
      </div>

      <div className="flex overflow-x-auto space-x-6 py-2">
        {displayedInternships.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg py-2 w-64 flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-gray-300"
          >
            <InternshipItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
