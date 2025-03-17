import { FaHome, FaWallet } from "react-icons/fa";
import { MdSettings, MdSpaceDashboard } from "react-icons/md";
import pfp from "/profilepic.png";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";


function Sidebar() {
    const username = JSON.parse(localStorage.getItem("username"))
    return (
        <div className="dark:bg-gray-900 bg-white gap-20 border dark:border-gray-700 
                        shadow-lg shadow-slate-400 dark:shadow-md dark:shadow-gray-800
                        transition-all duration-300 fixed left-0 top-0 h-[100vh] w-[80px] lg:w-[190px] 
                        hidden p-5 sm:flex flex-col">
            {/* Profile Section */}
            <div className="lg:flex flex-col items-center w-full">
                <img src={pfp} className="transition-all duration-300 w-[100px] rounded-full cursor-pointer" />
                <h1 className="text-sm font-normal sm:hidden lg:block mt-2 dark:text-white text-gray-800">{username}</h1>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col justify-between h-full">
                <ul className="flex flex-col gap-5">
                    <li>
                        <Link to={"/"} className="flex items-center gap-3 
                             text-gray-700 dark:text-gray-300 
                             hover:bg-gray-200 dark:hover:bg-gray-700 
                             p-2 rounded-lg shadow-sm dark:shadow-gray-700">
                            <FaHome size={28} />
                            <span className="text-[1rem] font-semibold hidden lg:block">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/expense"} className="flex items-center gap-3 
                             text-gray-700 dark:text-gray-300 
                             hover:bg-gray-200 dark:hover:bg-gray-700 
                             p-2 rounded-lg shadow-sm dark:shadow-gray-700">
                            <FaWallet size={28} />
                            <span className="text-[1rem] font-semibold hidden lg:block">Expenses</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/dashboard"} className="flex items-center gap-3 
                             text-gray-700 dark:text-gray-300 
                             hover:bg-gray-200 dark:hover:bg-gray-700 
                             p-2 rounded-lg shadow-sm dark:shadow-gray-700">
                            <MdSpaceDashboard size={28} />
                            <span className="text-[1rem] font-semibold hidden lg:block">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/setting"} className="flex items-center gap-3 
                             text-gray-700 dark:text-gray-300 
                             hover:bg-gray-200 dark:hover:bg-gray-700 
                             p-2 rounded-lg shadow-sm dark:shadow-gray-700">
                            <MdSettings size={28} />
                            <span className="text-[1rem] font-semibold hidden lg:block">Settings</span>
                        </Link>
                    </li>
                </ul>

                {/* Theme Toggle */}
                <div>
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
