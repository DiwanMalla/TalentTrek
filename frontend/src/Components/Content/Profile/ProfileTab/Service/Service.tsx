// ServicesScreen.tsx
import React from "react";

import { motion } from "framer-motion";

import Header from "../../../Home/Header/Header";

type Service = {
  id: string;
  name: string;
  description: string;
};

const services: Service[] = [
  {
    id: "1",
    name: "AI-Powered Internship Matching",
    description:
      "Advanced algorithms to match students with tailored internship opportunities.",
  },
  {
    id: "2",
    name: "Career Development Tools",
    description:
      "Tools to enhance skills, prepare resumes, and boost employability.",
  },
  {
    id: "3",
    name: "Company Partnership Program",
    description:
      "Helping companies find the best talent through our internship platform.",
  },
  {
    id: "4",
    name: "Community Engagement",
    description:
      "Building a community of students and mentors to enhance career growth.",
  },
];

const ServicesScreen: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col bg-gray-50 min-h-screen p-6">
        <div className="flex items-center mb-6">
          <h1 className="text-3xl font-bold ml-4 text-gray-900">
            Our Services
          </h1>
        </div>

        {/* Services List */}
        <div className="space-y-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-gray-900">
                {service.name}
              </h2>
              <p className="text-gray-700 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesScreen;
