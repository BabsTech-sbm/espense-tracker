import React from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { BarChart, Bar } from "recharts";
import { AreaChart, Area } from "recharts";

// Define Colors for Each Category
const categoryColors = {
    Transportation: "#FF5733",
    Groceries: "#33FF57",
    Subscription: "#337BFF",
    Rent: "#FFD700",
    Travel: "#8A2BE2",
    Entertainment: "#FF1493",
    Healthcare: "#00CED1",
};

// Sample Data
const pieData = [
    { category: "Transportation", amount: 200 },
    { category: "Groceries", amount: 450 },
    { category: "Subscription", amount: 100 },
    { category: "Rent", amount: 1200 },
    { category: "Travel", amount: 300 },
    { category: "Entertainment", amount: 150 },
    { category: "Healthcare", amount: 250 },
];

const lineData = [
    { date: "Jan", Expenses: 2500, Savings: 1200 },
    { date: "Feb", Expenses: 2700, Savings: 1400 },
    { date: "Mar", Expenses: 2900, Savings: 1500 },
    { date: "Apr", Expenses: 3100, Savings: 1600 },
    { date: "May", Expenses: 3300, Savings: 1800 },
    { date: "Jun", Expenses: 3500, Savings: 2000 },
];

const barData = pieData; // Reuse pie data for bar chart

const ExpenseDashboard = () => {
    // Calculate total expenses
    const totalExpenses = pieData.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="flex bg-gray-100 min-h-screen">
            <div className="flex-1 sm:ml-[80px] lg:ml-[190px] p-6">


                {/* Total Expenses Card */}
                <div className="bg-white shadow-md rounded-lg p-4 text-center mb-6">
                    <h2 className="text-xl font-semibold">Total Expenses</h2>
                    <p className="text-2xl font-bold text-red-500">${totalExpenses}</p>
                </div>

                {/* Chart Layout */}
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Pie Chart */}
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold text-center">Expense Breakdown</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie data={pieData} dataKey="amount" nameKey="category" cx="50%" cy="50%" outerRadius={80} label>
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={categoryColors[entry.category]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Line Chart */}
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold text-center">Spending Trends Over Time</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="Expenses" stroke="red" strokeWidth={2} />
                                <Line type="monotone" dataKey="Savings" stroke="green" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Bar Chart */}
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold text-center">Category Comparison</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={barData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="category" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {barData.map((entry, index) => (
                                    <Bar key={`bar-${index}`} dataKey="amount" fill={categoryColors[entry.category]} />
                                ))}
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Stacked Area Chart */}
                <div className="bg-white shadow-md rounded-lg p-4 mt-6">
                    <h2 className="text-lg font-semibold text-center">Total Expenses vs Savings</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={lineData}>
                            <defs>
                                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="red" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="red" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="green" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="green" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="Expenses" stroke="red" fill="url(#colorExpenses)" fillOpacity={1} />
                            <Area type="monotone" dataKey="Savings" stroke="green" fill="url(#colorSavings)" fillOpacity={1} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default ExpenseDashboard;
