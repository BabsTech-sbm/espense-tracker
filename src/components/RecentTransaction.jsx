import { FaCar, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import Stats from "./Stats";

function RecentTransaction() {
    const transactions = [
        { icon: <FaCar className="text-red-500" />, title: "Transportation", amount: "-$90.00", date: "Mar 5, 2024", status: "Successful", statusColor: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" },
        { icon: <FaShoppingCart className="text-blue-500" />, title: "Groceries", amount: "-$15.00", date: "Mar 3, 2024", status: "Failed", statusColor: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300" },
        { icon: <FaDollarSign className="text-green-500" />, title: "Subscription", amount: "-$105.00", date: "Feb 28, 2024", status: "Pending", statusColor: "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300" },
    ];

    return (
        <div className="w-full px-4 py-6">
            <div className="flex flex-wrap justify-between gap-6">
                <div className="flex flex-col gap-6 w-full sm:w-4/4 lg:w-1/2 mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-all">
                    <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Transactions</h1>

                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                    <th className="px-4 py-3 text-left border-b dark:border-gray-600">Category</th>
                                    <th className="px-4 py-3 text-left border-b dark:border-gray-600">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((item, index) => (
                                    <tr 
                                        key={index} 
                                        className="border-b dark:border-gray-600 even:bg-gray-50 dark:even:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all"
                                    >
                                        <td className="px-4 py-4 flex items-center gap-2">
                                            {item.icon}
                                            <span className="font-medium text-gray-900 dark:text-gray-200">{item.title}</span>
                                        </td>
                                        <td className="px-4 py-4 font-semibold text-red-600 dark:text-red-400">{item.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Stats />
            </div>
        </div>
    );
}

export default RecentTransaction;
