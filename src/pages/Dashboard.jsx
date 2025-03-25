import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar } from "recharts";
import { AreaChart, Area } from "recharts";
import { expenseValues } from "../context/ExpenseContext";

// Define Colors for Each Category
const categoryColors = {
  Transportation: "#FF5733",
  Groceries: "#33FF57",
  Subscription: "#337BFF",
  Rent: "#FFD700",
  Entertainment: "#FF1493",
  Healthcare: "#00CED1",
};

// Function to Process Data (Group & Sum by Category)
const processChartData = (expenses) => {
  const groupedData = {};

  expenses.forEach(({ category, amount }) => {
    if (groupedData[category]) {
      groupedData[category] += Number(amount); // Sum amounts
    } else {
      groupedData[category] = Number(amount); // Assign first amount
    }
  });

  return Object.keys(groupedData).map((key) => ({
    category: key,
    amount: groupedData[key],
  }));
};

// Line Chart Data (Static for Now)
const lineData = [
  { date: "Jan", Expenses: 2500, Savings: 1200 },
  { date: "Feb", Expenses: 2700, Savings: 1400 },
  { date: "Mar", Expenses: 2900, Savings: 1500 },
  { date: "Apr", Expenses: 3100, Savings: 1600 },
  { date: "May", Expenses: 3300, Savings: 1800 },
  { date: "Jun", Expenses: 3500, Savings: 2000 },
];

export default function ExpenseDashboard() {
  const { expenses } = expenseValues();
  const totalExpenses = expenses.reduce((sum, item) => sum + Number(item.amount), 0);
  const processedData = processChartData(expenses);

  return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen pb-12">
      <div className="flex-1 sm:ml-[80px] lg:ml-[190px] p-4">
        {/* Total Expenses Card */}
        <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded-lg p-4 text-center mb-6">
          <h2 className="text-xl font-semibold dark:text-gray-200">Total Expenses</h2>
          <p className="text-2xl font-bold text-red-500">${totalExpenses}</p>
        </div>

        {/* Chart Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pie Chart */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-semibold text-center dark:text-gray-200">Expense Breakdown</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={processedData} dataKey="amount" nameKey="category" cx="50%" cy="50%" outerRadius={80} label>
                  {processedData.map((entry, index) => (
                    <Cell key={index} fill={categoryColors[entry.category] || "#8884d8"} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-semibold text-center dark:text-gray-200">Spending Trends Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="gray" />
                <XAxis dataKey="date" stroke="gray" />
                <YAxis stroke="gray" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Expenses" stroke="red" strokeWidth={2} />
                <Line type="monotone" dataKey="Savings" stroke="green" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-semibold text-center dark:text-gray-200">Category Comparison</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={processedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="amount" barSize={50}>
                  {processedData.map((entry, index) => (
                    <Cell key={index} fill={categoryColors[entry.category] || "#8884d8"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stacked Area Chart */}
        <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded-lg p-2 mt-6">
          <h2 className="text-lg font-semibold my-2 text-center dark:text-gray-200">Total Expenses vs Savings</h2>
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
              <CartesianGrid strokeDasharray="3 3" stroke="gray" />
              <XAxis dataKey="date" stroke="gray" />
              <YAxis stroke="gray" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="Expenses" stroke="red" fill="url(#colorExpenses)" fillOpacity={1} />
              <Area type="monotone" dataKey="Savings" stroke="green" fill="url(#colorSavings)" fillOpacity={1} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    git add .
    git commit -m "Added sorting and filtering features with imporve chart"
    git push origin main
  );
}
