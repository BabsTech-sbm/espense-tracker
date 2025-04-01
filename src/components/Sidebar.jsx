import { FaHome, FaWallet } from "react-icons/fa";
import { MdSettings, MdSpaceDashboard } from "react-icons/md";
import pfp from "/profilepic.png";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useLocation, useNavigate } from "react-router-dom";
import { nav } from "framer-motion/client";
import { getItem } from "../hooks/useLocalStorage";

import { useState } from "react";


function Sidebar() {
    const profileUrl = localStorage.getItem("profile-picture") ? getItem("profile-picture"): pfp;
    const username = JSON.parse(localStorage.getItem("username"))
    const location = useLocation()
    
    

    const homeStyle = location.pathname === "/" ? "bg-gray-300 dark:bg-gray-700 hover:bg-gray-300 " : ""
    const expenseStyle = location.pathname === "/expense" ? "bg-gray-300 dark:bg-gray-700 hover:bg-gray-300 " : ""
    const dashboardStyle = location.pathname === "/dashboard" ? "bg-gray-300 dark:bg-gray-700 hover:bg-gray-300 " : ""
    const settingStyle = location.pathname === "/setting" ? "bg-gray-300 dark:bg-gray-700 hover:bg-gray-300 " : ""

    const navigate = useNavigate()
    return (
        <div className="dark:bg-gray-900 bg-white gap-20 border dark:border-gray-700 
                        shadow-lg shadow-slate-400 dark:shadow-md dark:shadow-gray-800
                        transition-all duration-300 fixed left-0 top-0 h-[100vh] w-[85px] lg:w-[190px] 
                        hidden p-5 sm:flex flex-col ">
            {/* Profile Section */}
            <div className="lg:flex flex-col items-center w-full">
                
                <img src={profileUrl} className="transition-all duration-300 lg:w-[100px] lg:h-[100px] rounded-full cursor-pointer w-[50px] h-[50px] " onClick={()=>navigate("/setting")}/>
                
                <h1 className="text-sm font-normal sm:hidden lg:block mt-2 dark:text-white text-gray-800">{username}</h1>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col justify-between h-full">
                <ul className="flex flex-col gap-5">
                    <li>
                        <Link to={"/"} className={`flex items-center gap-3 
                             text-gray-700 dark:text-gray-300 
                             hover:bg-gray-200 dark:hover:bg-gray-700 
                             p-2 rounded-lg shadow-sm dark:shadow-gray-700 ${homeStyle}`}>
                            <FaHome size={28} />
                            <span className="text-[1rem] font-semibold hidden lg:block">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/expense"} className={`flex items-center gap-3 
                             text-gray-700 dark:text-gray-300 
                             hover:bg-gray-200 dark:hover:bg-gray-700 
                             p-2 rounded-lg shadow-sm dark:shadow-gray-700 ${expenseStyle}`}>
                            <FaWallet size={28} />
                            <span className="text-[1rem] font-semibold hidden lg:block">Expenses</span>
                        </Link>
                    </li>
                    <li>
                    <Link to={"/dashboard"} className={`flex items-center gap-3 
                             text-gray-700 dark:text-gray-300 
                             hover:bg-gray-200 dark:hover:bg-gray-700 
                             p-2 rounded-lg shadow-sm dark:shadow-gray-700 ${dashboardStyle}`}>
                            <MdSpaceDashboard size={28} />
                            <span className="text-[1rem] font-semibold hidden lg:block">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                    <Link to={"/setting"} className={`flex items-center gap-3 
                             text-gray-700 dark:text-gray-300 
                             hover:bg-gray-200 dark:hover:bg-gray-700 
                             p-2 rounded-lg shadow-sm dark:shadow-gray-700 ${settingStyle}`}>
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
