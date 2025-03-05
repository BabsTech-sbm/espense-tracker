import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from "recharts";

const data = [
    { name: "Jan", sales: 400 },
    { name: "Feb", sales: 300 },
    { name: "Mar", sales: 500 },
    { name: "Apr", sales: 700 },
    { name: "May", sales: 600 },
];

const BarChartComponent = () => {
    return (
        <div className="w-full max-w-5xl  p-4 sm:p-6 md:p-8 bg-white mt-8">
            <h2 className="text-xl  font-semibold  text-gray-900 mb-2">
                📊 Monthly Spending Data
            </h2>

            <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl">
                <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 250 : 400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" />
                        <XAxis dataKey="name" stroke="#6B7280" tick={{ fontSize: 12 }} />
                        <YAxis stroke="#6B7280" tick={{ fontSize: 12 }} />
                        <Tooltip
                            contentStyle={{ backgroundColor: "white", borderRadius: "10px", border: "1px solid #E5E7EB" }}
                            cursor={{ fill: "rgba(75, 85, 99, 0.1)" }}
                        />
                        <Legend wrapperStyle={{ fontSize: "12px" }} />
                        <Bar dataKey="sales" fill="url(#colorUv)" radius={[8, 8, 0, 0]} />
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.9} />
                                <stop offset="95%" stopColor="#A78BFA" stopOpacity={0.7} />
                            </linearGradient>
                        </defs>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default BarChartComponent;
