import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { expenseValues } from "../context/ExpenseContext";
import EmptyExpenseList from "./EmptyExpenseList";

// Category colors
const categoryColors = {
  "Transportation": "blue",
  "Groceries": "red",
  "Subscription": "green",
  "Rent": "orange",
  "Entertainment": "purple",
  "Healthcare": "brown"
};

// Function to Group & Sum Data
const processChartData = (expenses) => {
  const groupedData = {};

  expenses.forEach(({ category, amount }) => {
    if (groupedData[category]) {
      groupedData[category] += amount; // Sum amounts
    } else {
      groupedData[category] = amount; // Assign first amount
    }
  });

  return Object.keys(groupedData).map((key) => ({
    category: key,
    amount: groupedData[key],
  }));
};

export default function Stats() {
  const { expenses } = expenseValues();
  const processedData = processChartData(expenses);

  return (
    <div className="w-full lg:w-[45%]  ml-1 bg-white dark:bg-gray-900 
                    shadow-lg shadow-gray-300 dark:shadow-md dark:shadow-gray-800 
                    p-4 rounded-lg transition-all duration-300">
      <h1 className=" mb-10 text-lg font-semibold text-gray-800 dark:text-white ">
        What You Spend on Most
      </h1>
      <ResponsiveContainer width="100%" height={250}>
        {!expenses.length ? 
        
      <EmptyExpenseList/>
    :
        <BarChart data={processedData} layout="vertical">
          <XAxis type="number" stroke="#4B5563" tick={{ fontSize: 12, fill: "gray" }} />
          <YAxis type="category" dataKey="category" width={120} tick={{ fontSize: 13, fill: "gray" }} />
          <Tooltip 
            contentStyle={{ backgroundColor: "#1F2937", color: "white", borderRadius: "8px" }}
            cursor={{ fill: "rgba(75, 85, 99, 0.1)" }}
            />
          <Bar dataKey="amount" barSize={23} radius={[8, 8, 8, 8]}>
            {processedData.map((entry, index) => (
              <Cell key={index} fill={categoryColors[entry.category] || "gray"} />
            ))}
          </Bar>
        </BarChart>
          }
      </ResponsiveContainer>
    </div>
  );
}
