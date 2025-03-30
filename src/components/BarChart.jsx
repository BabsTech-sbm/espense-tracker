import { expenseValues } from "../context/ExpenseContext";
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer
} from "recharts";
import EmptyExpenseList from "./EmptyExpenseList";

// Function to process expenses by month
const processMonthlyData = (expenses) => {
  if (!expenses || expenses.length === 0) return [];  // Prevent errors if empty

  const groupedData = {};
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  expenses.forEach(({ date, amount }) => {
    if (!date || !amount) return;

    // Extract month
    const month = months[new Date(date).getMonth()]; // Get month from index

    // Group data
    if (!groupedData[month]) {
      groupedData[month] = 0;
    }
    groupedData[month] += Number(amount);
  });

  // Convert to array
  return Object.keys(groupedData).map((month) => ({
    month,
    Expenses: groupedData[month],  // ✅ Ensure key matches BarChart dataKey
  }));
};

const BarChartComponent = () => {
  const { expenses } = expenseValues();
  const monthlyData = processMonthlyData(expenses);

 

  return (
    <div className="w-full max-w-5xl p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 mt-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        📊 Monthly Spending Data
      </h2>

      <div className="bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 rounded-2xl shadow-md">
        <ResponsiveContainer width="100%" height={300}>
          {!expenses.length ? 
        <EmptyExpenseList/>
        :  
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="4 4" stroke="#E5E7EB" dark:stroke-gray-600 />
            <XAxis dataKey="month" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip contentStyle={{ backgroundColor: "white", borderRadius: "10px", border: "1px solid #E5E7EB", color:"gray" }} />
            <Legend wrapperStyle={{ fontSize: "12px", color: "#6B7280" }} />
            <Bar dataKey="Expenses" fill="url(#colorUv)" radius={[8, 8, 0, 0]} />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#A78BFA" stopOpacity={0.7} />
              </linearGradient>
            </defs>
          </BarChart>
          }
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartComponent;
