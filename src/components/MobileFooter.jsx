import { FaHome, FaChartBar, FaCog, FaPlus } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const MobileFooter = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 shadow-lg flex justify-between items-center z-10 px-6 py-3 sm:hidden transition-all">
            {/* Home */}
            <Link to={"/"} className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                <FaHome className="text-2xl" />
            </Link>

            {/* Expenses */}
            <Link to={"/expenses"} className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                <MdOutlineAttachMoney className="text-2xl" />
            </Link>

            {/* Center Plus Button */}
            <Link to={"/add-expense"} className="bg-green-500 text-white p-3 mb-5 rounded-full shadow-lg flex items-center justify-center">
                <FaPlus className="text-4xl" />
            </Link>

            {/* Dashboard */}
            <Link to={"/dashboard"} className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                <FaChartBar className="text-2xl" />
            </Link>

            {/* Settings */}
            <Link to={"/setting"} className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
                <FaCog className="text-2xl" />
            </Link>
            
        </div>
    );
};

export default MobileFooter;
