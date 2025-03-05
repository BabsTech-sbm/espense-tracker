import { FaCar, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import Stats from "./Stats";

function RecentTransaction() {
    const transactions = [
        { icon: <FaCar className="text-red-500" />, title: "Transportation", amount: "-$90.00", date: "Mar 5, 2024", status: "Successful", statusColor: "bg-green-100 text-green-700" },
        { icon: <FaShoppingCart className="text-blue-500" />, title: "Groceries", amount: "-$15.00", date: "Mar 3, 2024", status: "Failed", statusColor: "bg-red-100 text-red-700" },
        { icon: <FaDollarSign className="text-green-500" />, title: "Subscription", amount: "-$105.00", date: "Feb 28, 2024", status: "Pending", statusColor: "bg-orange-100 text-orange-700" },
    ];

    return (
        <div className="w-full px-4 py-6">
            <div className="flex flex-wrap justify-between gap-6">
                <div className="flex flex-col gap-6 w-full sm:w-4/4 lg:w-1/2 mx-auto bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-lg font-semibold text-gray-800">Recent Transactions</h1>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700">
                                    <th className="px-4 py-3 text-left">Category</th>
                                    <th className="px-4 py-3 text-left">Amount</th>
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
