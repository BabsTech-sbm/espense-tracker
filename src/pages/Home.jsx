import { Link } from "react-router-dom";
import Box from "../components/Box";
import RecentTransaction from "../components/RecentTransaction";
import BarChartComponent from "../components/BarChart";
import { FaPlus } from "react-icons/fa";

function HomePage() {
    return (
        <div className="dark:bg-gray-900 dark:text-white lg:pl-[200px] sm:pl-[100px] flex flex-col h-full bg-gray-50 text-gray-900 transition-all ">

            {/* Floating Add Expense Button */}
            <Link 
                to={"/add-expense"} 
                className="bg-green-500 dark:bg-green-700 hidden sm:block absolute right-4 top-4 text-white p-3 rounded-full shadow-lg hover:bg-green-600 dark:hover:bg-green-800 transition-all"
            >
                <FaPlus className="text-2xl" />
            </Link>

            {/* Page Heading */}
            <h1 className="text-3xl font-semibold ml-10 my-5 mt-10">Overview</h1>

            {/* Box Component */}
            <Box />

            {/* Recent Transactions */}
            <div className="mt-4">
                <RecentTransaction />
            </div>

            {/* Bar Chart Component */}
            <BarChartComponent />
        </div>
    );
}

export default HomePage;
