import React, { useContext, useState } from "react";
import { ProfileContext } from "../../Profile/Edit/ProfileContext";
import {
  IoMenu,
  IoClose,
  IoSettings,
  IoInformationCircleOutline,
  IoCallOutline,
  IoHelpCircle,
  IoCardOutline,
  IoBriefcaseOutline,
  IoClipboardOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Header.css"; // Import your CSS file with animations

// Define profile options
const profileOptions = [
  { id: "1", label: "Settings", icon: <IoSettings /> },
  { id: "2", label: "Portfolio Build", icon: <IoClipboardOutline /> },
  { id: "3", label: "Membership", icon: <IoCardOutline /> },
  { id: "4", label: "Services", icon: <IoBriefcaseOutline /> },
  { id: "5", label: "About Us", icon: <IoInformationCircleOutline /> },
  { id: "6", label: "Contact Us", icon: <IoCallOutline /> },
  { id: "7", label: "Help & Support", icon: <IoHelpCircle /> },
  { id: "8", label: "Log out", icon: <IoLogOutOutline /> },
];

const Header: React.FC = () => {
  const { profileName } = useContext(ProfileContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfileDropdown = () => setProfileDropdown(!profileDropdown);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search-results?query=${searchQuery}`);
    }
  };

  return (
    <header className="bg-blue-800 text-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/logo.jpeg"
          alt="Logo"
          className="w-32 h-auto object-contain"
        />
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex flex-grow justify-end mx-4 max-w-md">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 px-4 pl-10 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          />
          <FaSearch
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            size={20}
            onClick={handleSearch}
          />
        </div>
      </div>

      {/* Navbar for Desktop */}
      <nav className="hidden md:flex space-x-6">
        <NavLink
          to="/home"
          label="Home"
          isActive={location.pathname === "/home"}
        />
        <NavLink
          to="/recommended-job"
          label="Recommend"
          isActive={location.pathname === "/recommended-job"}
        />
        <NavLink
          to="/my-jobs"
          label="My Jobs"
          isActive={location.pathname === "/my-jobs"}
        />
        <NavLink
          to="/events"
          label="Events"
          isActive={location.pathname === "/events"}
        />
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
      </button>

      {/* Profile Section */}
      <div className="relative ml-4 cursor-pointer">
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleProfileDropdown}
        >
          <img
            src="/profile.png"
            className="w-10 h-10 rounded-full object-cover border-2 border-white"
          />
          <span className="ml-2 font-semibold">{profileName}</span>
        </div>
        {profileDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg fade-in z-50">
            <div className="p-2">
              <span className="block text-sm font-bold">{profileName}</span>
              <span className="block text-xs text-gray-500">
                email@example.com
              </span>
            </div>
            <hr />
            {profileOptions.map((option) => (
              <Link
                key={option.id}
                to={`/${option.label.replace(/\s+/g, "-").toLowerCase()}`}
                className="flex items-center p-2 hover:bg-gray-100 transition"
                onClick={() =>
                  option.label === "Log out" && navigate("/logout")
                }
              >
                {option.icon}
                <span className="ml-2">{option.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-16 left-0 w-full bg-blue-800 text-white md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <MobileMenuLink
          to="/home"
          label="Home"
          isActive={location.pathname === "/home"}
        />
        <MobileMenuLink
          to="/internships"
          label="Internships"
          isActive={location.pathname === "/internships"}
        />
        <MobileMenuLink
          to="/events"
          label="Events"
          isActive={location.pathname === "/events"}
        />
        <MobileMenuLink
          to="/profile"
          label="Profile"
          isActive={location.pathname === "/profile"}
        />
      </nav>
    </header>
  );
};

const NavLink: React.FC<{ to: string; label: string; isActive: boolean }> = ({
  to,
  label,
  isActive,
}) => (
  <Link
    to={to}
    className={`relative px-4 py-2 rounded-lg transition border-b-2 ${
      isActive
        ? "border-blue-600 text-white border-slide active"
        : "text-gray-200 hover:bg-blue-700 hover:text-white"
    }`}
  >
    {label}
  </Link>
);

const MobileMenuLink: React.FC<{
  to: string;
  label: string;
  isActive: boolean;
}> = ({ to, label, isActive }) => (
  <Link
    to={to}
    className={`block px-4 py-2 text-center border-t border-blue-700 transition ${
      isActive ? "bg-blue-600 text-white" : "hover:bg-blue-700 text-gray-200"
    }`}
  >
    {label}
  </Link>
);

export default Header;
