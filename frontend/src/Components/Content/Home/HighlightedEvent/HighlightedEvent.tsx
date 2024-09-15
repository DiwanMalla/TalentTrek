import React from "react";
import { Link } from "react-router-dom";
import "./HighlightedEvent.css"; // Import your CSS file for animations

interface HighlightedEventProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const HighlightedEvent: React.FC<HighlightedEventProps> = ({
  title,
  subtitle,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-blue-50 rounded-lg p-4 my-4 mx-2 md:mx-6 shadow-lg transition-transform duration-300 hover:animate-fadeIn">
      {/* Text Section */}
      <div className="flex-1 pr-4 md:pr-8">
        <h2 className="text-xl font-semibold text-red-600 mb-2">{title}</h2>
        <p className="text-gray-800 mb-4">{subtitle}</p>
        <Link
          to="/events/join"
          className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-green-600 transition"
        >
          Join Event
        </Link>
      </div>
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-32 h-32 rounded-lg object-cover transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default HighlightedEvent;
