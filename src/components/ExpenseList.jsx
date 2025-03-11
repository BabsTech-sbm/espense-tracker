import { MdSort } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { FiFilter } from "react-icons/fi";
import { FaCar, FaShoppingCart, FaDollarSign, FaHome, FaGamepad, FaHeartbeat } from "react-icons/fa"; // Icons for transaction categories
import { Link } from "react-router-dom";
import {expenseValues} from "../context/ExpenseContext"
import ExpenseItem from './ExpenseItem';

function ExpenseList() {
    const [showFilter, setShowFilter] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [showSort, setShowSort] = useState(false);
    const filterRef = useRef(null);
    const sortRef = useRef(null);

    const filterOptions = {
        "Filter by Date": ["Today", "This Week", "This Month"],
        "Filter by Category": ["Transportation", "Groceries", "Subscription"],
        "Filter by Status": ["Active", "Pending", "Completed"],
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                (filterRef.current && !filterRef.current.contains(event.target)) &&
                (sortRef.current && !sortRef.current.contains(event.target))
            ) {
                setShowFilter(false);
                setShowSort(false);
                setSelectedFilter(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const transactions = [
        { icon: <FaCar className="text-red-500" />, title: "Transportation", amount: "-$90.00", date: "Mar 5, 2024", status: "Successful", statusColor: "bg-green-100 text-green-700" },
        { icon: <FaShoppingCart className="text-blue-500" />, title: "Groceries", amount: "-$15.00", date: "Mar 3, 2024", status: "Failed", statusColor: "bg-red-100 text-red-700" },
        { icon: <FaDollarSign className="text-green-500" />, title: "Subscription", amount: "-$105.00", date: "Feb 28, 2024", status: "Pending", statusColor: "bg-orange-100 text-orange-700" },
        { icon: <FaHome className="text-gray-500" />, title: "Rent", amount: "-$1200.00", date: "Mar 1, 2024", status: "Successful", statusColor: "bg-green-100 text-green-700" },
        { icon: <FaGamepad className="text-purple-500" />, title: "Entertainment", amount: "-$75.00", date: "Feb 20, 2024", status: "Failed", statusColor: "bg-red-100 text-red-700" },
        { icon: <FaHeartbeat className="text-red-600" />, title: "Healthcare", amount: "-$220.00", date: "Feb 18, 2024", status: "Successful", statusColor: "bg-green-100 text-green-700" },

    ];

const {expenses} = expenseValues()
console.log(expenses)
    return (

        <div className="w-full px-4 dark:bg-gray-900 dark:text-white transition-all">
        {/* Header */}
        <div  className="flex justify-between py-5 pr-5">
            <h1 className="text-lg sm:text-2xl font-bold ml-2 sm:ml-10">Transaction History</h1>
        </div>

        {/* Filter and Sort Section */}
        <div className="p-4 border-b dark:border-gray-700 flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-4 sm:gap-6 rounded-lg">
                {/* Filter Dropdown */}
                <div className="relative" ref={filterRef}>
                    <div
                className="flex items-center gap-2 cursor-pointer bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow dark:shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        onClick={() => {
                            setShowFilter(!showFilter);
                            setShowSort(false);
                            setSelectedFilter(null);
                        }}
                    >
                        <FiFilter className="text-xl dark:text-white" />
                        <span className="text-sm sm:text-base">Filter</span>
                    </div>

                    {/* Main Filter Dropdown */}
                    {showFilter && (
                        <div className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 p-2 rounded-md z-10">
                            {Object.keys(filterOptions).map((option) => (
                                <p
                                    key={option}
                                           className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                                    onClick={() => setSelectedFilter(option)}
                                >
                                    {option}
                                </p>
                            ))}
                        </div>
                    )}

                    {/* Subcategory Dropdown */}
                    {selectedFilter && (
                        
                        <div className="absolute left-44 mt-2 w-44 top-0 m-1 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 p-2 rounded-md z-10">
                            {filterOptions[selectedFilter].map((subOption) => (
                                <p
                                    key={subOption}
                                  className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                                    onClick={() => alert(`Selected: ${selectedFilter} - ${subOption}`)}
                                >
                                    {subOption}
                                </p>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sort Dropdown */}
                <div className="relative" ref={sortRef}>
                    <div
                         className="flex items-center gap-2 cursor-pointer bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow dark:shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        onClick={() => {
                            setShowSort(!showSort);
                            setShowFilter(false);
                            setSelectedFilter(null);
                        }}
                    >
                        <MdSort className="text-xl dark:text-white" />
                        <span className="text-sm sm:text-base">Sort</span>
                    </div>
                    {showSort && (
                        <div className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 p-2 rounded-md z-10">
                            <p className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Sort A-Z</p>
                            <p className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Sort Z-A</p>
                            <p className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Sort by Date</p>
                        </div>
                    )}
                </div>
            </div>

            <Link to={"/add-expense"} className="bg-green-600 text-white p-2 rounded-md text-sm sm:text-base">
                Add Expense
            </Link>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto w-full mt-4">
    
    <table className="w-full min-w-[600px] shadow-lg dark:shadow-gray-800 rounded-lg">
    <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white">
                        <th className="px-4 py-3 text-left">Category</th>
                        <th className="px-4 py-3 text-left">Amount</th>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Status</th>
                    </tr>
                </thead>
        {expenses.map((expense, index) => (
            <ExpenseItem key={index} icon={expense.icon}  status ={ expense.recurring === true ? "Succesful" : "Pending"} date={expense.date} amount={expense.amount} category={expense.category}/>
        ))}
        </table>
        </div>
    </div>


    );
}

export default ExpenseList;



