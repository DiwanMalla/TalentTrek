import { useState, useContext } from "react";
import { ProfileContext } from "../../Edit/ProfileContext";
import ChangePasswordModal from "./ChangePasswordModal";
import { useNavigate } from "react-router-dom";
import { Switch } from "@headlessui/react";
import Header from "../../../Home/Header/Header";

const SettingsScreen = () => {
  const [isChangePasswordModalVisible, setChangePasswordModalVisible] =
    useState(false);
  const [isEditProfileModalVisible, setEditProfileModalVisible] =
    useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [isNotificationsEnabled, setNotificationsEnabled] = useState(true);
  const [newProfileName, setNewProfileName] = useState(""); // State for new profile name
  const { profileName, setProfileName } = useContext(ProfileContext);
  const navigate = useNavigate();

  // Pre-fill the profile name in the Edit Profile modal
  useState(() => {
    setNewProfileName(profileName);
  }, [profileName]);

  const handleSavePassword = (newPassword: string, confirmPassword: string) => {
    if (newPassword === confirmPassword) {
      alert("Password changed successfully");
    } else {
      alert("Passwords do not match");
    }
  };

  const handleSaveProfileName = () => {
    if (newProfileName.trim()) {
      setProfileName(newProfileName); // Update profile name in context
      alert("Profile name updated successfully");
      setEditProfileModalVisible(false); // Close the modal
    } else {
      alert("Profile name cannot be empty");
    }
  };

  const handleOptionPress = (option: string) => {
    if (option === "Change Password") {
      setChangePasswordModalVisible(true);
    } else if (option === "Edit Profile") {
      setEditProfileModalVisible(true);
    } else {
      console.log(`${option} clicked`);
    }
  };

  return (
    <>
      <Header />
      <div
        className={`min-h-screen bg-gray-100 dark:bg-gray-900 bg-cover bg-center bg-no-repeat transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-900 text-white"
            : "bg-[url('/path/to/your/image.jpg')] text-gray-900"
        }`}
      >
        {/* Settings Header */}
        <header className="p-4 bg-blue-800 dark:bg-blue-900 text-white shadow-md">
          <h1 className="text-2xl font-bold text-center mt-2">Settings</h1>
        </header>

        {/* Settings Options */}
        <div className="p-10 space-y-4">
          <button
            className={`w-full p-4 text-left rounded-lg border border-gray-300 dark:border-gray-700 ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-400 text-gray-800 hover:bg-gray-100"
            } transition shadow-md`}
            onClick={() => handleOptionPress("Edit Profile")}
          >
            Edit Profile
          </button>
          <button
            className={`w-full p-4 text-left rounded-lg border border-gray-300 dark:border-gray-700 ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-400 text-gray-800 hover:bg-gray-100"
            } transition shadow-md`}
            onClick={() => handleOptionPress("Change Password")}
          >
            Change Password
          </button>
          <div
            className={`w-full p-4 text-left flex justify-between rounded-lg border border-gray-300 dark:border-gray-700 ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-400 text-gray-800 hover:bg-gray-100"
            } transition shadow-md`}
          >
            <span
              className={`text-lg ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Notifications
            </span>
            <Switch
              checked={isNotificationsEnabled}
              onChange={setNotificationsEnabled}
              className={`${
                isNotificationsEnabled ? "bg-green-500" : "bg-gray-200"
              } relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span className="sr-only">Notifications</span>
              <span
                className={`${
                  isNotificationsEnabled ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
          </div>
          <div
            className={`w-full p-4 text-left flex justify-between rounded-lg border border-gray-300 dark:border-gray-700 ${
              isDarkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-400 text-gray-800 hover:bg-gray-100"
            } transition shadow-md`}
          >
            <span
              className={`text-lg ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Dark Mode
            </span>
            <Switch
              checked={isDarkMode}
              onChange={setDarkMode}
              className={`${
                isDarkMode ? "bg-green-500" : "bg-gray-200"
              } relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span className="sr-only">Dark Mode</span>
              <span
                className={`${
                  isDarkMode ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
          </div>
        </div>

        {/* Change Password Modal */}
        <ChangePasswordModal
          visible={isChangePasswordModalVisible}
          onClose={() => setChangePasswordModalVisible(false)}
          onSave={handleSavePassword}
          isDarkMode={isDarkMode}
        />

        {/* Edit Profile Modal */}
        {isEditProfileModalVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
              <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
              <div className="mb-4">
                <label className="block text-lg font-medium mb-2">
                  Profile Name
                </label>
                <input
                  type="text"
                  value={newProfileName}
                  onChange={(e) => setNewProfileName(e.target.value)}
                  className={`w-full p-2 border rounded-lg ${
                    isDarkMode
                      ? "bg-gray-700 text-white border-gray-600"
                      : "bg-white text-black border-gray-600"
                  }`}
                />
              </div>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                onClick={handleSaveProfileName}
              >
                Save
              </button>
              <button
                className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg ml-2"
                onClick={() => setEditProfileModalVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SettingsScreen;
