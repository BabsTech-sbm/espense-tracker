import { useState, useEffect } from "react";
import { FaUserEdit, FaMoon, FaSun, FaSignOutAlt, FaHeadset, FaCog } from "react-icons/fa";
import ThemeToggle from "../components/ThemeToggle"
import pfp from "/profilepic.png";
function Settings() {
  const username = JSON.parse(localStorage.getItem("username"))
  return (
    <div className="sm:pl-[100px] min-h-screen dark:bg-gray-800 flex flex-col items-center p-6 transition-all dark:text-gray-300 bg-gray-100 text-gray-900">
      
      {/* Profile Section */}
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center">
        <img
          src={pfp} // Replace with actual profile image
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500"
        />
        <h2 className="text-2xl font-semibold mt-4">{username}</h2>
      

        {/* Edit Profile & Logout Buttons */}
        <div className="flex justify-center mt-4 gap-4">
          <button className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
            <FaUserEdit className="mr-2" /> Edit Profile
          </button>
          <button className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </div>

      {/* Settings Options */}
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 mt-6">
        
        {/* Dark Mode Toggle */}
        <div className="flex justify-between items-center py-4 border-b border-gray-300 dark:border-gray-600">
          <span className="text-lg">Dark Mode</span>
          
           <ThemeToggle/>
        </div>

        {/* Services */}
        <div className="flex justify-between items-center py-4 border-b border-gray-300 dark:border-gray-600">
          <span className="text-lg">Services</span>
          <FaCog className="text-gray-500 dark:text-gray-400" />
        </div>

        {/* Customer Care */}
        <div className="flex justify-between items-center py-4 border-b border-gray-300 dark:border-gray-600">
          <span className="text-lg">Customer Care</span>
          <FaHeadset className="text-gray-500 dark:text-gray-400" />
        </div>

        {/* Additional Settings */}
        <div className="py-4">
          <span className="text-lg">More Settings Coming Soon...</span>
        </div>

      </div>
    </div>
  );
}

export default Settings;
