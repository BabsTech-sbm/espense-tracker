
import { FaPlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function EmptyExpenseList() {
  return (
    <div className=' h-full m-2 flex justify-center items-center'>
        <div className=' absolute flex flex-col items-center '>
            <h1 className=' text-6xl text-gray-400 dark:text-gray-700 '>NO DATA</h1>
            <h2 className=' text-lg text-gray-500 dark:text-gray-600'>Expense list is empty</h2>
            
             <Link 
                            to={"/add-expense"} 
                            className="bg-green-500 dark:bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-600 dark:hover:bg-gray-800 transition-all"
                        >
                            <FaPlus className="text-xl" />
                        </Link>
        </div>
    <table className='border border-gray-500 w-full h-full'>
        
        <tbody className=' border border-gray-500 '>
<tr  className=' border border-gray-500  '>
<td  className=' border h-[100px]  border-gray-300 dark:border-gray-700'></td>
<td  className=' border h-[100px]  border-gray-300 dark:border-gray-700'></td>
<td  className=' border h-[100px]  border-gray-300 dark:border-gray-700'></td>
<td  className=' border h-[100px]  border-gray-300 dark:border-gray-700'></td>

</tr>
<tr  className=' border border-gray-500  '>
<td  className=' border h-[100px]  border-gray-300 dark:border-gray-700'></td>
<td  className=' border h-[100px]  border-gray-300 dark:border-gray-700'></td>
<td  className=' border h-[100px]  border-gray-300 dark:border-gray-700'></td>
<td  className=' border h-[100px]  border-gray-300 dark:border-gray-700'></td>

</tr>
<tr  className=' border border-gray-500  '>
<td  className=' border h-[100px]  border-gray-300 dark:border-gray-700'></td>
<td  className=' border h-[100px]  border-gray-300 dark:border-gray-700'></td>
<td  className=' border h-[100px]  border-gray-300 dark:border-gray-700'></td>
<td  className=' border h-[100px]  border-gray-300 dark:border-gray-700'></td>

</tr>
        </tbody>
        
    </table>
    </div>
  )
}
