// ChangePasswordModal.tsx
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

interface ChangePasswordModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (newPassword: string, confirmPassword: string) => void;
  isDarkMode: boolean;
}

const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  visible,
  onClose,
  onSave,
  isDarkMode,
}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Transition
      show={visible}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`fixed inset-0 flex items-center justify-center ${
          isDarkMode ? "bg-gray-800" : "bg-gray-500 bg-opacity-50"
        }`}
        onClick={onClose}
      >
        <div
          className={`relative bg-white dark:bg-black rounded-lg shadow-lg p-6 max-w-md mx-4 w-full`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="absolute top-3 right-3 text-gray-500 dark:text-white"
            onClick={onClose}
          >
            <IoClose size={24} />
          </button>
          <h2
            className={`text-xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-white"
            }`}
          >
            Change Password
          </h2>
          <div className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "bg-white text-gray-800 border-gray-300"
              }`}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mt-6 space-y-4">
            <button
              type="button"
              className={`w-full py-2 rounded-md text-white ${
                isDarkMode
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-green-500 hover:bg-green-600"
              }`}
              onClick={() => {
                onSave(newPassword, confirmPassword);
                onClose();
              }}
            >
              Save
            </button>
            <button
              type="button"
              className={`w-full py-2 rounded-md ${
                isDarkMode
                  ? "bg-gray-600 text-white hover:bg-gray-700"
                  : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ChangePasswordModal;
