import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Home/Header/Header";

interface Job {
  id: string;
  title: string;
  company: string;
  status: string;
}

const initialJobs: Job[] = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Tech Corp",
    status: "Applied",
  },
  {
    id: "2",
    title: "Product Manager",
    company: "Innovate LLC",
    status: "Interview Scheduled",
  },
  {
    id: "3",
    title: "UX Designer",
    company: "Creative Solutions",
    status: "Offer Received",
  },
  // Add more jobs here
];

const MyJobsScreen: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);

  const handleJobAction = (jobtitle: string, action: string, jobId: string) => {
    if (action === "Deleted") {
      setJobs(jobs.filter((job) => job.id !== jobId));
    } else {
      alert(`Job ${jobtitle} marked as ${action}`);
    }
  };

  const JobItem: React.FC<{ job: Job }> = ({ job }) => (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg mb-6 flex flex-col gap-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
      <p className="text-lg text-gray-600">{job.company}</p>
      <p className="text-sm text-gray-500">Status: {job.status}</p>
      <div className="flex justify-between">
        <motion.button
          onClick={() => handleJobAction(job.title, "Completed", job.id)}
          className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Mark as Completed
        </motion.button>
        <motion.button
          onClick={() => handleJobAction(job.title, "Deleted", job.id)}
          className="bg-red-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Delete
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My Jobs
        </motion.h1>
        <div className="w-full max-w-2xl">
          {jobs.map((job) => (
            <JobItem key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyJobsScreen;
