// AboutUsScreen.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaBusinessTime,
  FaNetworkWired,
  FaRegistered,
  FaReceipt,
  FaLock,
  FaBriefcase,
} from "react-icons/fa";
import Header from "../../../Home/Header/Header";

type ComplianceItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const complianceItems: ComplianceItem[] = [
  {
    icon: <FaCertificate size={28} className="text-blue-500" />,
    title: "Partnership Registration",
    description:
      "Registered as a partnership in accordance with the Partnership Act of 1892 No. 12, NSW guidelines.",
  },
  {
    icon: <FaBusinessTime size={28} className="text-blue-500" />,
    title: "Australian Business Number (ABN)",
    description: "21 689 959 496",
  },
  {
    icon: <FaNetworkWired size={28} className="text-blue-500" />,
    title: "NBN Registration",
    description: "Compliant with NBN requirements.",
  },
  {
    icon: <FaRegistered size={28} className="text-blue-500" />,
    title: "Business Name Registration",
    description: "Registered business name to ensure legal operation.",
  },
  {
    icon: <FaReceipt size={28} className="text-blue-500" />,
    title: "Goods & Services Tax (GST)",
    description: "GST compliant as per Australian regulations.",
  },
  {
    icon: <FaLock size={28} className="text-blue-500" />,
    title: "Australian Privacy Principles (APPs)",
    description: "Adhering to APPs for data protection and privacy.",
  },
  {
    icon: <FaBriefcase size={28} className="text-blue-500" />,
    title: "Employment and Fair Work Regulations",
    description: "Compliance with employment laws and fair work regulations.",
  },
];

const AboutUsScreen: React.FC = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-50 min-h-screen p-6">
        <Header />

        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-blue-600"
          >
            About Us
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-blue-400 mt-2"
          >
            Our Commitment to Legal Compliance
          </motion.h2>
        </div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 rounded-lg shadow-lg mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h3>
          <p className="text-gray-600">
            TalentTrek is dedicated to providing exceptional services while
            ensuring full legal compliance. Our mission is to assist students
            and companies in finding the best internship opportunities while
            adhering to all relevant regulations.
          </p>
        </motion.div>

        {/* Legal Compliance Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Registrations, Licensing, Taxation, and Other Legal Requirements
          </h3>
          <div className="space-y-6">
            {complianceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start space-x-4 mb-4"
              >
                {item.icon}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700">
                    {item.title}
                  </h4>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutUsScreen;
