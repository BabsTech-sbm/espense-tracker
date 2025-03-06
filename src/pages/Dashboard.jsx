import { useState } from "react";
import { FaCar, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";


export default function Dashboard() {
    const transactions = [
        { icon: <FaCar className="text-red-500" />, title: "Transportation", amount: "-$90.00", date: "Mar 5, 2024", status: "Successful", statusColor: "bg-green-100 text-green-700" },
        { icon: <FaShoppingCart className="text-blue-500" />, title: "Groceries", amount: "-$15.00", date: "Mar 3, 2024", status: "Failed", statusColor: "bg-red-100 text-red-700" },
        { icon: <FaDollarSign className="text-green-500" />, title: "Subscription", amount: "-$105.00", date: "Feb 28, 2024", status: "Pending", statusColor: "bg-orange-100 text-orange-700" },
    ];

    const statsData = [
        { name: "Grocery", value: 70, color: "#2563eb" },
        { name: "Transportation", value: 50, color: "#dc2626" },
        { name: "Subscription", value: 90, color: "#16a34a" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}

            {/* Main Content */}
            <div className="sm:ml-[80px] lg:ml-[190px] w-full p-6 flex flex-col gap-6">
                {/* Header */}


                {/* Overview Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col">
                        <h2 className="text-lg font-semibold text-gray-700">Total Balance</h2>
                        <p className="text-2xl font-bold text-green-600 mt-2">$3,750.00</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col">
                        <h2 className="text-lg font-semibold text-gray-700">Monthly Expense</h2>
                        <p className="text-2xl font-bold text-red-600 mt-2">-$1,250.00</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col">
                        <h2 className="text-lg font-semibold text-gray-700">Upcoming Bills</h2>
                        <p className="text-2xl font-bold text-orange-500 mt-2">$450.00</p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Recent Transactions */}
                    <div className="bg-white p-6 rounded-xl shadow-lg lg:col-span-2">
                        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700">
                                    <th className="px-4 py-3 text-left">Category</th>
                                    <th className="px-4 py-3 text-left">Amount</th>
                                    <th className="px-4 py-3 text-left hidden md:table-cell">Date</th>
                                    <th className="px-4 py-3 text-left hidden md:table-cell">Status</th>
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
                                        <td className="px-4 py-4 text-gray-500 hidden md:table-cell">{item.date}</td>
                                        <td className="px-4 py-4 hidden md:table-cell">
                                            <span className={`px-2 py-1 rounded-lg text-sm font-medium ${item.statusColor}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Statistics */}
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h2 className="text-lg font-semibold mb-4">How You Spend </h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={statsData} layout="vertical">
                                <XAxis type="number" />
                                <YAxis type="category" dataKey="name" width={120} />
                                <Tooltip />
                                <Bar dataKey="value" barSize={25} radius={[8, 8, 8, 8]}>
                                    {statsData.map((entry, index) => (
                                        <Cell key={index} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Pie Chart Section */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-lg font-semibold mb-4">Spending Breakdown</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={statsData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill="#8884d8"
                                label
                            >
                                {statsData.map((entry, index) => (
                                    <Cell key={index} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
