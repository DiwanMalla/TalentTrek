import React, { useState } from "react";

import { FaSpinner } from "react-icons/fa";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import useFetch from "../../../../hook/useFetch";
import InternshipItem from "../InternshipItem"; // Adjust path as needed
import Header from "../../Header/Header";

const AllInternships: React.FC = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "node.js developer in new-york,usa",
    num_pages: 1,
    page: 5,
  });

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Adjust as necessary
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  // Handlers for pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
          Failed to load jobs.
        </p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="p-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          All Internships
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {getCurrentPageItems().map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105"
            >
              <InternshipItem item={item} />
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center mt-6 space-x-4">
          <button
            className={`p-2 rounded-full ${
              currentPage === 1 ? "text-gray-400" : "text-gray-700"
            } transition-colors`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <IoChevronBackOutline size={24} />
          </button>

          <span className="text-lg font-semibold">
            {currentPage} / {totalPages}
          </span>

          <button
            className={`p-2 rounded-full ${
              currentPage === totalPages ? "text-gray-400" : "text-gray-700"
            } transition-colors`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <IoChevronForwardOutline size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default AllInternships;
