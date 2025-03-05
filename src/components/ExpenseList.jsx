import { MdSort } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { FiFilter } from "react-icons/fi";
import { FaCar, FaShoppingCart, FaDollarSign, FaUtensils, FaHome, FaBolt, FaPlane, FaGamepad, FaHeartbeat } from "react-icons/fa"; // Icons for transaction categories
import { Link } from "react-router-dom";

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
        { icon: <FaUtensils className="text-yellow-500" />, title: "Dining Out", amount: "-$45.00", date: "Mar 2, 2024", status: "Successful", statusColor: "bg-green-100 text-green-700" },
        { icon: <FaHome className="text-gray-500" />, title: "Rent", amount: "-$1200.00", date: "Mar 1, 2024", status: "Successful", statusColor: "bg-green-100 text-green-700" },
        { icon: <FaBolt className="text-orange-500" />, title: "Utilities", amount: "-$200.00", date: "Feb 27, 2024", status: "Pending", statusColor: "bg-orange-100 text-orange-700" },
        { icon: <FaPlane className="text-blue-400" />, title: "Travel", amount: "-$560.00", date: "Feb 25, 2024", status: "Successful", statusColor: "bg-green-100 text-green-700" },
        { icon: <FaGamepad className="text-purple-500" />, title: "Entertainment", amount: "-$75.00", date: "Feb 20, 2024", status: "Failed", statusColor: "bg-red-100 text-red-700" },
        { icon: <FaHeartbeat className="text-red-600" />, title: "Healthcare", amount: "-$220.00", date: "Feb 18, 2024", status: "Successful", statusColor: "bg-green-100 text-green-700" },

    ];

    return (
        <div className="w-full px-4">
            {/* Header */}
            <div className="flex justify-between py-5 pr-5">
                <h1 className="text-lg sm:text-2xl font-bold ml-2 sm:ml-10">Transaction History</h1>
            </div>

            {/* Filter and Sort Section */}
            <div className="p-4 border-b flex flex-wrap justify-between items-center">
                <div className="flex items-center gap-4 sm:gap-6 rounded-lg">
                    {/* Filter Dropdown */}
                    <div className="relative" ref={filterRef}>
                        <div
                            className="flex items-center gap-2 cursor-pointer bg-white px-3 py-2 rounded-lg shadow hover:bg-gray-200"
                            onClick={() => {
                                setShowFilter(!showFilter);
                                setShowSort(false);
                                setSelectedFilter(null);
                            }}
                        >
                            <FiFilter className="text-xl" />
                            <span className="text-sm sm:text-base">Filter</span>
                        </div>

                        {/* Main Filter Dropdown */}
                        {showFilter && (
                            <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg p-2 rounded-md z-10">
                                {Object.keys(filterOptions).map((option) => (
                                    <p
                                        key={option}
                                        className="cursor-pointer p-2 hover:bg-gray-200 rounded"
                                        onClick={() => setSelectedFilter(option)}
                                    >
                                        {option}
                                    </p>
                                ))}
                            </div>
                        )}

                        {/* Subcategory Dropdown */}
                        {selectedFilter && (
                            <div className="absolute left-44 top-0 mt-2 w-44 bg-white shadow-lg p-2 rounded-md z-10">
                                {filterOptions[selectedFilter].map((subOption) => (
                                    <p
                                        key={subOption}
                                        className="cursor-pointer p-2 hover:bg-gray-200 rounded"
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
                            className="flex items-center gap-2 cursor-pointer bg-white px-3 py-2 rounded-lg shadow hover:bg-gray-200"
                            onClick={() => {
                                setShowSort(!showSort);
                                setShowFilter(false);
                                setSelectedFilter(null);
                            }}
                        >
                            <MdSort className="text-xl" />
                            <span className="text-sm sm:text-base">Sort</span>
                        </div>
                        {showSort && (
                            <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg p-2 rounded-md z-10">
                                <p className="cursor-pointer p-2 hover:bg-gray-200 rounded">Sort A-Z</p>
                                <p className="cursor-pointer p-2 hover:bg-gray-200 rounded">Sort Z-A</p>
                                <p className="cursor-pointer p-2 hover:bg-gray-200 rounded">Sort by Date</p>
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
                <table className="w-full min-w-[600px] shadow-lg rounded-lg">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="px-4 py-3 text-left">Category</th>
                            <th className="px-4 py-3 text-left">Amount</th>
                            <th className="px-4 py-3 text-left">Date</th>
                            <th className="px-4 py-3 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((item, index) => (
                            <tr key={index} className="border-b even:bg-gray-50 hover:bg-gray-100 transition-all">
                                <td className="px-4 py-4 flex items-center gap-2">
                                    {item.icon}
                                    <span className="font-medium text-gray-900">{item.title}</span>
                                </td>
                                <td className="px-4 py-4 font-semibold text-red-600">{item.amount}</td>
                                <td className="px-4 py-4 text-gray-500">{item.date}</td>
                                <td className="px-4 py-4">
                                    <span className={`px-2 py-1 rounded-lg text-sm font-medium ${item.statusColor}`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ExpenseList;
