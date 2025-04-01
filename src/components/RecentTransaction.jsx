import Stats from "./Stats";
import {expenseValues} from "../context/ExpenseContext"
import { useNavigate } from "react-router-dom";
import { FaCar, FaDollarSign, FaGamepad, FaHeartbeat, FaHome, FaShoppingCart } from "react-icons/fa";
import EmptyExpenseList from "./EmptyExpenseList";
import { formatAmount } from "./Box";

const iconMap = {
    "Transportation": <FaCar className="text-red-500" />,
    "Groceries": <FaShoppingCart className="text-blue-500" />,
    "Subscription": <FaDollarSign className="text-green-500" />,
    "Rent": <FaHome className="text-blue-500" />,
    "Entertainment": <FaGamepad className="text-blue-500" />,
    "Healthcare": <FaHeartbeat className="text-blue-500" />,
  };
function RecentTransaction() {
    const {expenses} = expenseValues()
    const navigate = useNavigate()
    const items = [...expenses].reverse()
    return (
        <div className="w-full px-4 py-6">
            <div className="flex flex-wrap justify-between gap-6">
                <div className="flex flex-col gap-6 w-full sm:w-4/4 lg:w-1/2 mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition-all">
                    <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Recent Transactions</h1>
{ !expenses.length ? 
<EmptyExpenseList/>
:
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse rounded-lg shadow-md">
                            <thead>
                                <tr className="bg-gray-100  dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                    <th className="px-4 py-3 text-left border-b dark:border-gray-600">Category</th>
                                    <th className="px-4 py-3 text-left border-b dark:border-gray-600">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {((items).slice(0,3)).map((item) => (
                                    
                                    <tr 
                                    key={item.id} 
                                    onClick={() => navigate(`/expense/${item.id}`)} 
                                    className="border-b cursor-pointer dark:border-gray-600 even:bg-gray-50 dark:even:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900 transition-all"
                                    >
                                        <td className="px-4 py-4 flex items-center gap-2">
                                            {iconMap[item.category]}
                                            <span className="font-medium text-gray-900 dark:text-gray-200">{item.category}</span>
                                        </td>
                                        <td className="px-4 py-4 font-semibold text-red-600 dark:text-red-400">{ formatAmount(item.amount, "USD")}</td>
                                    </tr>

                                    

))}
                            </tbody>
                        </table>
                    </div>
}
                </div>
                <Stats />
            </div>
        </div>
    );
}

export default RecentTransaction;
