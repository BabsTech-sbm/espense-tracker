import { FaHome, FaChartBar, FaCog, FaPlus } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const MobileFooter = () => {
        const location = useLocation()
        console.log(location.pathname)
        
    
        const homeStyle = location.pathname === "/" ? "text-black dark:text-white" : ""
        const expenseStyle = location.pathname === "/expense" ? "text-black dark:text-white" : ""
        const dashboardStyle = location.pathname === "/dashboard" ? "text-black dark:text-white" : ""
        const settingStyle = location.pathname === "/setting" ? "text-black dark:text-white" : ""
        const addExpenseStyle = location.pathname === "/add-expense" ? "bg-green-600" : ""
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-gray-800 shadow-lg flex justify-between items-center z-10 px-6 py-3 sm:hidden transition-all">
            {/* Home */}
            <Link to={"/"} className={`flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white ${homeStyle}`}>
                <FaHome className="text-2xl" />
            </Link>

            {/* Expenses */}
            <Link to={"/expense"} className={`flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white ${expenseStyle}`}>
                <MdOutlineAttachMoney className="text-2xl" />
            </Link>

            {/* Center Plus Button */}
            <Link to={"/add-expense"} className={`bg-green-500 text-white p-3 mb-5 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 ${addExpenseStyle}`}>
                <FaPlus className="text-4xl" />
            </Link>

            {/* Dashboard */}
            <Link to={"/dashboard"} className={`flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white ${dashboardStyle}`}>
                <FaChartBar className="text-2xl" />
            </Link>

            {/* Settings */}
            <Link to={"/setting"} className={`flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white ${settingStyle}`}>
                <FaCog className="text-2xl" />
            </Link>
            
        </div>
    );
};

export default MobileFooter;
