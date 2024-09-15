import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "../../../Home/Header/Header";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Alternative marker position approach
const ContactScreen = () => {
  const navigate = useNavigate();

  // Get API Key from environment variables
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Location Coordinates for 168 Sussex Street, NSW, Sydney
  const center = {
    lat: -33.8696,
    lng: 151.2094,
  };

  return (
    <>
      <Header />
      <motion.div
        className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center p-4 overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          {/* Close Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-3xl"
          >
            &times;
          </button>

          {/* Header */}
          <motion.h2
            className="text-2xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>

          {/* Contact Form */}
          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded-lg"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-lg"
              rows={4}
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition-transform transform active:scale-95"
              onClick={() => {
                alert(
                  "Your message has been sent. We will get back to you soon!"
                );
                navigate("/home");
              }}
            >
              Send
            </button>
          </motion.form>

          {/* Contact Details */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Contact Details
            </h3>
            <p className="text-gray-700">Email: example@example.com</p>
            <p className="text-gray-700">Phone: +1-234-567-890</p>
            <p className="text-gray-700">
              Address: 168 Sussex Street, NSW, Sydney
            </p>
          </motion.div>

          {/* Map */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Our Location
            </h3>
            <div className="w-full h-64">
              <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                  mapContainerStyle={{ height: "100%", width: "100%" }}
                  center={center}
                  zoom={15}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>

          {/* Social Media Links */}
          <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Follow Us
            </h3>
            <div className="flex justify-center space-x-4">
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaTwitter className="text-blue-500 text-2xl hover:text-blue-600 transition-colors" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaInstagram className="text-pink-500 text-2xl hover:text-pink-600 transition-colors" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-800 transition-colors" />
              </motion.a>
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaFacebook className="text-blue-600 text-2xl hover:text-blue-700 transition-colors" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ContactScreen;
