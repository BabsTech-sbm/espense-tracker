/* eslint-disable react/prop-types */
import { FaCar, FaDollarSign, FaGamepad, FaHeartbeat, FaHome, FaShoppingCart } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

function ExpenseItem({category, amount, date, status, id}) {
    const navigate = useNavigate()
    const iconMap = {
        "Transportation": <FaCar className="text-red-500" />,
        "Groceries": <FaShoppingCart className="text-blue-500" />,
        "Subscription": <FaDollarSign className="text-green-500" />,
        "Rent": <FaHome className="text-blue-500" />,
        "Entertainment": <FaGamepad className="text-blue-500" />,
        "Healthcare": <FaHeartbeat className="text-blue-500" />,
      };
    return (

               
                <tbody onClick={() => navigate(`/expense/${id}`)} >

                        <tr  className="border-b cursor-pointer dark:border-gray-700   hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                            <td className="px-4 py-4 flex items-center gap-2">
                                {iconMap[category]}
                                <span className="font-medium text-gray-900 dark:text-white">{category}</span>
                            </td>
                            <td className="px-4 py-4 font-semibold text-red-600 dark:text-red-400">{amount}</td>
                            <td className="px-4 py-4 text-gray-500 dark:text-gray-400">{date}</td>
                            <td className="px-4 py-4">
                                <span className={` px-2 py-1 rounded-lg text-sm font-medium bg-green-400 text-gray-600`}>
                                    {status}
                                </span>
                            </td>
                        </tr>
                
                </tbody>
    )
}

export default ExpenseItem
