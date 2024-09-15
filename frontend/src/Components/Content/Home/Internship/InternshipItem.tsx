import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

interface InternshipItemProps {
  item: {
    job_title: string;
    employer_name: string;
    job_city: string;
    job_offer_expiration_datetime_utc: string;
    employer_logo?: string;
    job_id: string;
  };
}

const InternshipItem: React.FC<InternshipItemProps> = ({ item }) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = React.useState(false);

  // Function to format date
  const formatDate = (dateString: string | number | Date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="bg-blue-50 rounded-lg p-4 m-2 w-64 h-72 shadow-lg flex flex-col">
      {/* Header Section */}
      <div className="flex items-center mb-3">
        <img
          src={
            imageError
              ? "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
              : item?.employer_logo
          }
          alt={item.employer_name}
          className="w-10 h-10 rounded-full object-cover"
          onError={() => setImageError(true)}
        />
        <div className="ml-3 flex-1">
          <h2 className="text-lg font-semibold text-gray-800">
            {item.job_title}
          </h2>
          <p className="text-sm text-gray-600">{item.employer_name}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="mb-3">
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="text-green-500" />
          <span className="ml-2 text-sm text-gray-700">{item.job_city}</span>
        </div>
        <div className="flex items-center">
          <FaRegClock className="text-green-500" />
          <span className="ml-2 text-sm text-gray-700">
            {formatDate(item.job_offer_expiration_datetime_utc)}
          </span>
        </div>
      </div>

      {/* Apply Button */}
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded-full mt-auto hover:bg-blue-700 transition-colors"
        onClick={() =>
          navigate("/internship-details", {
            state: {
              title: item.job_title,
              location: item.job_city,
              duration: item.job_offer_expiration_datetime_utc,
              logo: item.employer_logo,
              id: item.job_id,
            },
          })
        }
      >
        Apply
      </button>
    </div>
  );
};

export default InternshipItem;
