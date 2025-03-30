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
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { formatAmount } from "../components/Box";
import EmptyExpenseList from "../components/EmptyExpenseList";

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


const processMonthlyData = (expenses) => {
  const groupedData = {};

  expenses.forEach(({ date, amount }) => {
    if (!date || !amount) return; 

    // Extract the month from YYYY-MM-DD format
    const month = new Date(date).toLocaleString("en-US", { month: "short" }); // "Jan", "Feb", etc.
    
    if (!groupedData[month]) {
      groupedData[month] = 0; // Initialize with 0 if not exists
    }
    groupedData[month] += Number(amount); // Sum amounts
  });
  
  // Convert the grouped object into an array
  return Object.keys(groupedData).map((month) => ({
    month,
    Expenses: groupedData[month],
  }));
};

const processMonthlyComparison = (expenses) => {
  if (!expenses || expenses.length === 0) return [];
  
  const today = new Date();
  const thisMonthIndex = today.getMonth();  // Current month index (0-11)
  const lastMonthIndex = thisMonthIndex === 0 ? 11 : thisMonthIndex - 1;  // Previous month index
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let monthlyData = {
    [months[lastMonthIndex]]: { month: months[lastMonthIndex], LastMonthExpenses: 0, ThisMonthExpenses: 0 },
    [months[thisMonthIndex]]: { month: months[thisMonthIndex], LastMonthExpenses: 0, ThisMonthExpenses: 0 }
  };

  expenses.forEach(({ date, amount }) => {
    if (!date || !amount) return;

    const monthIndex = new Date(`${date}T00:00:00`).getMonth();
    const month = months[monthIndex];

    if (monthIndex === lastMonthIndex) {
      monthlyData[month].LastMonthExpenses += Number(amount);
    } else if (monthIndex === thisMonthIndex) {
      monthlyData[month].ThisMonthExpenses += Number(amount);
    }
  });

  return Object.values(monthlyData);
};




export default function ExpenseDashboard() {
  const { expenses } = expenseValues();
  /* const totalExpenses = expenses.reduce((sum, item) => sum + Number(item.amount), 0); */
  const processedData = processChartData(expenses);
  const monthlyData = processMonthlyData(expenses);

  const monthlyComparisonData = processMonthlyComparison(expenses);
  const navigate = useNavigate()
  
  const goBack = () => {
    navigate(-1);
  };
return (
    <div className="flex bg-gray-100 dark:bg-gray-900 min-h-screen  sm:pb-2 ">
        
      <div className="flex-1 sm:ml-[80px] lg:ml-[190px] p-4 ">
        {/* Total Expenses Card */}
        <div className=" flex items-center gap-7 mb-10 mt-2 mx-3">
        <FaArrowLeft 
                                onClick={goBack} 
                                className=" cursor-pointer dark:text-gray-300"
                                size={24}
                            />
          <h2 className="text-xl font-semibold dark:text-gray-200">Dashboard</h2>
          
        </div>

        {/* Chart Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pie Chart */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded-lg p-4 ">
            <h2 className="text-lg font-semibold text-center dark:text-gray-200">Expense Breakdown</h2>
            <ResponsiveContainer width="100%" height={300}>
              {!expenses.length ?
            <EmptyExpenseList/> 
            :
              <PieChart>
                <Pie data={processedData} dataKey="amount" nameKey="category" cx="50%" cy="50%" outerRadius={80} label>
                  {processedData.map((entry, index) => (
                    <Cell key={index} fill={categoryColors[entry.category] || "#8884d8"} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
                }
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded-lg p-4">
            <h2 className="text-lg font-semibold text-center dark:text-gray-200">Spending Trends Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
            {!expenses.length ?
            <EmptyExpenseList/>
            :
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="gray" />
                <XAxis dataKey="month" stroke="gray" />
                <YAxis stroke="gray" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Expenses" stroke="red" strokeWidth={2} />
               
              </LineChart>
}
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded-lg p-4  md:col-span-2 lg:col-span-1">
            <h2 className="text-lg font-semibold text-center dark:text-gray-200">Category Comparison</h2>
            <ResponsiveContainer width="100%" height={300}>
            {!expenses.length ?
            <EmptyExpenseList/>
            :
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
}
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stacked Area Chart */}
        <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded-lg p-2 mt-6">
        <h2 className="text-lg font-semibold my-2 text-center dark:text-gray-200">
        📊 Previous Month vs This Month
      </h2>
      <ResponsiveContainer width="100%" height={300}>
      {!expenses.length ?
      <EmptyExpenseList/>
      :
        <AreaChart data={monthlyComparisonData}>
          <defs>
            <linearGradient id="colorLastMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="blue" stopOpacity={0.8} />
              <stop offset="95%" stopColor="blue" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorThisMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="purple" stopOpacity={0.8} />
              <stop offset="95%" stopColor="purple" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="gray" />
          <XAxis dataKey="month" stroke="gray" />
          <YAxis stroke="gray" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="LastMonthExpenses" stroke="blue" fill="url(#colorLastMonth)" fillOpacity={1} name="Previous Month" />
          <Area type="monotone" dataKey="ThisMonthExpenses" stroke="purple" fill="url(#colorThisMonth)" fillOpacity={1} name="This Month" />
        </AreaChart>
}
      </ResponsiveContainer>
          </div>
      </div>
    </div>
   
  );
}
