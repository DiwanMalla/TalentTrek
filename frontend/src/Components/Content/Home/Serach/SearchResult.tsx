/* eslint-disable prefer-const */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import InternshipItem from "../Internship/InternshipItem";
import useFetch from "../../../hook/useFetch";
import CustomAdCard from "./CustomAdCard";
import Header from "../Header/Header";

// Define the types for Internship and Ad
interface InternshipItemProps {
  job_title: string;
  employer_name: string;
  job_city: string;
  job_offer_expiration_datetime_utc: string;
  employer_logo?: string;
  job_id: string;
}

interface Ad {
  type: "ad";
}

type Item = InternshipItemProps | Ad;

const SearchResult: React.FC = () => {
  // Get the search query from the URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query") || "";

  // Fetch data using the search query
  const { data, isLoading, error } = useFetch("search", {
    query: searchQuery,
    num_pages: 1,
    page: 1,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let items: Item[] = data.slice(startIndex, endIndex);

    // Randomly add the ad card in the data
    const adPosition = Math.floor(Math.random() * items.length);
    items.splice(adPosition, 0, { type: "ad" });

    return items;
  };

  const renderItem = (item: Item) => {
    if ("type" in item && item.type === "ad") {
      return (
        <CustomAdCard
          imageUrl="https://img.youtube.com/vi/R4em3LKQCAQ/default.jpg"
          videoUrl="https://www.youtube.com/watch?v=R4em3LKQCAQ"
          title="Justin Bieber - As Long As You Love Me ft. Big Sean"
          description="Music video by Justin Bieber performing As Long As You Love Me. © 2012 The Island Def Jam Music Group"
        />
      );
    }
    return <InternshipItem item={item as InternshipItemProps} />;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-600 text-center mt-4">Failed to load jobs.</p>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-screen-lg mx-auto flex flex-col justify-between items-center p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {getCurrentPageItems().map((item, index) => (
            <div key={index} className="w-full">
              {renderItem(item)}
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center my-4 space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
            className={`text-2xl ${
              currentPage === 1 ? "text-gray-400" : "text-black"
            }`}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          <span className="font-semibold text-lg">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage(Math.min(currentPage + 1, totalPages))
            }
            className={`text-2xl ${
              currentPage === totalPages ? "text-gray-400" : "text-black"
            }`}
            disabled={currentPage === totalPages}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
