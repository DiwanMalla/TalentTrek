import React from "react";

interface Event {
  id: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonColor: string;
  image: string;
  backgroundColor: string;
  titleColor: string;
}

const EventItem: React.FC<{ event: Event }> = ({ event }) => {
  const handleJoinPress = () => {
    alert(`You have joined the ${event.title} event!`);
  };

  return (
    <div
      className="flex items-center p-6 mb-6 rounded-lg shadow-md"
      style={{ backgroundColor: event.backgroundColor }}
    >
      <img
        src={event.image} // Use the event image path
        alt={event.title}
        className="w-30 h-24 rounded-full mr-6" // Adjusted size
      />
      <div className="flex-1">
        <h2 className="text-xl font-bold" style={{ color: event.titleColor }}>
          {event.title}
        </h2>
        <p className="text-gray-700 mt-2">{event.description}</p>
        <button
          onClick={handleJoinPress}
          className="mt-4 py-2 px-6 rounded-lg text-white"
          style={{ backgroundColor: event.buttonColor }}
        >
          {event.buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default EventItem;
