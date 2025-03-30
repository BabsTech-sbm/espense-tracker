import { } from "react";
import { FaUserEdit, FaSignOutAlt, FaHeadset, FaCog, FaCamera } from "react-icons/fa";
import ThemeToggle from "../components/ThemeToggle"
import pfp from "/profilepic.png";
import { useNavigate } from "react-router-dom";
import { getItem } from "../hooks/useLocalStorage";
import { FaArrowLeft } from "react-icons/fa6";
function Settings() {
  const username = JSON.parse(localStorage.getItem("username"))
  const navigate = useNavigate()
  const logout = () =>{
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("username")
    navigate("/welcome")
  }
const profileUrl = localStorage.getItem("profile-picture") ? getItem("profile-picture"): pfp;
const goBack = () => {
  navigate(-1);
};
  return (
    <div className=" lg:pl-[200px] sm:pl-[100px] min-h-screen dark:bg-gray-800 flex flex-col items-center  p-6 transition-all dark:text-gray-300 bg-gray-100 text-gray-900">
                    <div className=" flex items-center gap-7 absolute left-6 sm:left-[120px] lg:left-[250px] top-5">
              <FaArrowLeft 
                                      onClick={goBack} 
                                      className=" cursor-pointer dark:text-gray-300"
                                      size={24}
                                  />
                <h2 className="text-xl font-semibold dark:text-gray-200">Setting</h2>
                
              </div>
      {/* Profile Section */}

      <div className=" mt-10 w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center">
        <div className="  ">

        <img
          src={profileUrl}
          className=" w-32 h-32  object-cover rounded-full border-white relative mx-auto
          "
        />
          
          </div>
        <h2 className="text-2xl font-semibold mt-4">{username}</h2>
      

        {/* Edit Profile & Logout Buttons */}
        <div className="flex justify-center mt-4 gap-4">
          <button onClick={()=> navigate("/edit-profile")} className="flex items-center px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-lg">
            <FaUserEdit className="mr-2" /> Edit Profile
          </button>
          <button className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg" onClick={logout}>
            <FaSignOutAlt  className="mr-2" /> Logout
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
