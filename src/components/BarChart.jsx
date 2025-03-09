import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from "recharts";

const data = [
    { name: "Jan", spending: 400 },
    { name: "Feb", spending: 300 },
    { name: "Mar", spending: 500 },
    { name: "Apr", spending: 700 },
    { name: "May", spending: 600 },
];

const BarChartComponent = () => {
    return (
        <div className="w-full max-w-5xl p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 mt-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                📊 Monthly Spending Data
            </h2>

            <div className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-md">
                <ResponsiveContainer width="100%" height={window.innerWidth < 768 ? 250 : 400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" dark:stroke-gray-600 />
                        <XAxis 
                            dataKey="name" 
                            stroke="#6B7280" 
                            dark:stroke-gray-400 
                            tick={{ fontSize: 12, fill: "#374151" }} 
                            dark:tick-fill-gray-300
                        />
                        <YAxis 
                            stroke="#6B7280" 
                            dark:stroke-gray-400 
                            tick={{ fontSize: 12, fill: "#374151" }} 
                            dark:tick-fill-gray-300
                        />
                        <Tooltip 
                            contentStyle={{
                                backgroundColor: "white", 
                                borderRadius: "10px", 
                                border: "1px solid #E5E7EB"
                            }} 
                            dark:content-style={{
                                backgroundColor: "#1F2937", 
                                border: "1px solid #374151", 
                                color: "#F9FAFB"
                            }}
                            cursor={{ fill: "rgba(75, 85, 99, 0.1)" }}
                        />
                        <Legend wrapperStyle={{ fontSize: "12px", color: "#6B7280" }} dark:wrapper-style={{ color: "#E5E7EB" }} />
                        <Bar dataKey="spending" fill="url(#colorUv)" radius={[8, 8, 0, 0]} />
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
