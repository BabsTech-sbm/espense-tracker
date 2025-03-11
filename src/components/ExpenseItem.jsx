/* eslint-disable react/prop-types */

function ExpenseItem({category, icon, amount, date, status}) {
    return (

               
                <tbody>

                        <tr  className="border-b cursor-pointer dark:border-gray-700   hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                            <td className="px-4 py-4 flex items-center gap-2">
                                {icon}
                                <span className="font-medium text-gray-900 dark:text-white">{category}</span>
                            </td>
                            <td className="px-4 py-4 font-semibold text-red-600 dark:text-red-400">{amount}</td>
                            <td className="px-4 py-4 text-gray-500 dark:text-gray-400">{date}</td>
                            <td className="px-4 py-4">
                                <span className={`px-2 py-1 rounded-lg text-sm font-medium`}>
                                    {status}
                                </span>
                            </td>
                        </tr>
                
                </tbody>
    )
}

export default ExpenseItem
