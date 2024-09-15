import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Header from "../../Home/Header/Header";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image?: string; // Optional
  link?: string; // Optional
}

const PortfolioScreen: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [newProject, setNewProject] = useState<PortfolioItem>({
    id: "",
    title: "",
    description: "",
  });
  const [editProject, setEditProject] = useState<PortfolioItem | null>(null);

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      setPortfolio([
        ...portfolio,
        { ...newProject, id: Date.now().toString() },
      ]);
      setNewProject({ id: "", title: "", description: "" });
      setModalVisible(false);
    }
  };

  const handleEditProject = (project: PortfolioItem) => {
    setEditProject(project);
    setEditModalVisible(true);
  };

  const handleDeleteProject = (id: string) => {
    setPortfolio(portfolio.filter((item) => item.id !== id));
  };

  const handleSaveEdit = () => {
    if (editProject) {
      setPortfolio(
        portfolio.map((item) =>
          item.id === editProject.id ? editProject : item
        )
      );
      setEditProject(null);
      setEditModalVisible(false);
    }
  };

  const confirmDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      handleDeleteProject(id);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-300 to-green-100">
        {/* Header */}
        <header className="bg-white shadow-md p-4">
          <h1 className="text-3xl font-extrabold text-gray-800">
            My Portfolio
          </h1>
        </header>

        {/* Add Project Button */}
        <button
          className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded-lg mx-4 my-2 shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-transform transform hover:scale-105"
          onClick={() => setModalVisible(true)}
        >
          Add Project
        </button>

        {/* Portfolio List */}
        <div className="flex-1 p-4">
          {portfolio.length === 0 ? (
            <p className="text-center text-gray-600">No projects available.</p>
          ) : (
            portfolio.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-lg shadow-lg mb-4 p-4 transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform hover:scale-105"
                  />
                )}
                <h2 className="text-2xl font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 mt-2 inline-block hover:underline"
                  >
                    View More
                  </a>
                )}
                <div className="flex gap-2 mt-4">
                  <button
                    className="bg-green-600 text-white py-1 px-3 rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-105"
                    onClick={() => handleEditProject(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white py-1 px-3 rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105"
                    onClick={() => confirmDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Add Project Modal */}
        <Transition
          show={modalVisible}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4">Add New Project</h2>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500"
                placeholder="Project Title"
                value={newProject.title}
                onChange={(e) =>
                  setNewProject({ ...newProject, title: e.target.value })
                }
              />
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500"
                placeholder="Project Description"
                value={newProject.description}
                onChange={(e) =>
                  setNewProject({ ...newProject, description: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500"
                placeholder="Image URL (optional)"
                value={newProject.image || ""}
                onChange={(e) =>
                  setNewProject({ ...newProject, image: e.target.value })
                }
              />
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500"
                placeholder="Link (optional)"
                value={newProject.link || ""}
                onChange={(e) =>
                  setNewProject({ ...newProject, link: e.target.value })
                }
              />
              <div className="flex justify-between">
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
                  onClick={handleAddProject}
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition-transform transform hover:scale-105"
                  onClick={() => setModalVisible(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Transition>

        {/* Edit Project Modal */}
        <Transition
          show={editModalVisible}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-xl font-semibold mb-4">Edit Project</h2>
              {editProject && (
                <>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500"
                    placeholder="Project Title"
                    value={editProject.title}
                    onChange={(e) =>
                      setEditProject({ ...editProject, title: e.target.value })
                    }
                  />
                  <textarea
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500"
                    placeholder="Project Description"
                    value={editProject.description}
                    onChange={(e) =>
                      setEditProject({
                        ...editProject,
                        description: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500"
                    placeholder="Image URL (optional)"
                    value={editProject.image || ""}
                    onChange={(e) =>
                      setEditProject({ ...editProject, image: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500"
                    placeholder="Link (optional)"
                    value={editProject.link || ""}
                    onChange={(e) =>
                      setEditProject({ ...editProject, link: e.target.value })
                    }
                  />
                  <div className="flex justify-between">
                    <button
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg shadow-md hover:bg-gray-400 transition-transform transform hover:scale-105"
                      onClick={() => setEditModalVisible(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </Transition>
      </div>
    </>
  );
};

export default PortfolioScreen;
