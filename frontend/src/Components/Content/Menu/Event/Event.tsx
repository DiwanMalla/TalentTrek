import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBell, FaSearch, FaFilter } from "react-icons/fa";
import EventItem from "./EventItem";
import Header from "../../Home/Header/Header";

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

const initialEvents: Event[] = [
  {
    id: "1",
    title: "Career Conference",
    description: "Treat yourself with knowledge",
    buttonLabel: "Join Event",
    buttonColor: "#32CD32",
    image: "/Event/1.png",
    backgroundColor: "#F0F8FF",
    titleColor: "#FF5C5C",
  },
  {
    id: "2",
    title: "Mentoring Session",
    description: "How to Build Perfect Portfolio",
    buttonLabel: "Join Event",
    buttonColor: "#4E9FFF",
    image: "/Event/1.png",
    backgroundColor: "#E6F0FA",
    titleColor: "#FFA500",
  },
  {
    id: "3",
    title: "Sharing Session",
    description: "Design Thinking for Innovation",
    buttonLabel: "Join Event",
    buttonColor: "#32CD32",
    image: "/Event/1.png",
    backgroundColor: "#F0F8FF",
    titleColor: "#32CD32",
  },
];

const EventsScreen: React.FC = () => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNotificationPress = () => {
    alert("You have new notifications!");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="p-6 bg-gray-100 min-h-screen">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Growth Event</h1>
          <button onClick={handleNotificationPress} className="text-2xl">
            <FaBell />
          </button>
        </header>

        <div className="flex items-center mb-6 p-3 bg-white border rounded-lg shadow-md">
          <FaSearch className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Find Expert Class.."
            value={searchQuery}
            onChange={handleSearchChange}
            className="flex-1 py-2 px-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none"
          />
          <button className="ml-2 text-gray-500 hover:text-gray-700">
            <FaFilter />
          </button>
        </div>

        <div>
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <EventItem event={event} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsScreen;
