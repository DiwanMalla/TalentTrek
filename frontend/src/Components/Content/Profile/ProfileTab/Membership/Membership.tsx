// MembershipScreen.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../../../Home/Header/Header";

type Membership = {
  id: string;
  name: string;
  description: string;
  price: string;
};

const memberships: Membership[] = [
  {
    id: "1",
    name: "Basic Membership",
    description: "Access to basic features",
    price: "$5/month",
  },
  {
    id: "2",
    name: "Premium Membership",
    description: "Access to all features",
    price: "$15/month",
  },
  // Add more memberships here
];

const MembershipScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleMembershipSelect = (membership: Membership) => {
    navigate("/payment-screen", {
      state: {
        membershipId: membership.id,
        membershipName: membership.name,
        membershipPrice: membership.price,
      },
    });
  };

  return (
    <>
      <Header />
      <div className="flex flex-col p-6 bg-gray-100 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-4">Choose Your Membership</h1>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block border-b-2 border-blue-500"
          ></motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {memberships.map((membership) => (
            <div
              key={membership.id}
              className="bg-white p-6 rounded-lg shadow-md mb-4 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleMembershipSelect(membership)}
            >
              <h2 className="text-xl font-bold mb-2">{membership.name}</h2>
              <p className="text-gray-600 mb-2">{membership.description}</p>
              <p className="text-blue-500 font-semibold">{membership.price}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default MembershipScreen;
