import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: string;
  name: string;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Doe",
    text: "TalentTrek helped me land my dream internship at Google!",
    image: "/student.jpg",
  },
  {
    id: "2",
    name: "Jane Smith",
    text: "The platform connected me with incredible opportunities.",
    image: "/student.jpg",
  },
];

const TestimonialItem: React.FC<{ item: Testimonial }> = ({ item }) => {
  return (
    <motion.div
      className="flex items-start bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 p-6 rounded-lg shadow-xl mb-6 transition-transform duration-500 hover:scale-105"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <motion.img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded-full border-4 border-gray-300 mr-6"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <div className="flex flex-col">
        <motion.p
          className="text-xl font-semibold text-gray-800"
          whileHover={{ scale: 1.05 }}
        >
          {item.name}
        </motion.p>
        <motion.p
          className="text-base text-gray-700 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {item.text}
        </motion.p>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-2xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h2>
      <div className="space-y-8">
        {testimonials.map((item) => (
          <TestimonialItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
