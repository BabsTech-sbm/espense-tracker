import { FaHome, FaChartBar, FaCog, FaPlus } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const MobileFooter = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-between items-center z-10 px-6 py-3 sm:hidden">
            {/* Home */}
            <Link to={"/"} className="flex flex-col items-center text-gray-600 hover:text-black">
                <FaHome className="text-2xl" />
                <span className="text-xs">Home</span>
            </Link>

            {/* Expenses */}
            <Link to={"/expenses"} className="flex flex-col items-center text-gray-600 hover:text-black">
                <MdOutlineAttachMoney className="text-2xl" />
                <span className="text-xs">Expenses</span>
            </Link>

            {/* Center Plus Button */}

            <Link to={"/add-expense"} className="bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center">
                <FaPlus className="text-2xl" />
            </Link>


            {/* Dashboard */}
            <Link to={"/dashboard"} className="flex flex-col items-center text-gray-600 hover:text-black">
                <FaChartBar className="text-2xl" />
                <span className="text-xs">Dashboard</span>
            </Link>

            {/* Settings */}
            <Link to={"/setting"} className="flex flex-col items-center text-gray-600 hover:text-black">
                <FaCog className="text-2xl" />
                <span className="text-xs">Settings</span>
            </Link>
        </div>
    );
};

export default MobileFooter;
