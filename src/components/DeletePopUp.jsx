/* eslint-disable react/prop-types */
import React from 'react'
import { FaExclamationTriangle,  } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';
import { MdGrid3X3, } from 'react-icons/md';
import { expenseValues } from '../context/ExpenseContext';
import { useNavigate } from 'react-router-dom';


export default function DeletePopUp({setConfirmDelete, id}) {
  const {deleteExpense} =  expenseValues()
  const navigate = useNavigate()
  return (
    <div className=' h-screen z-20 bg-black/70 flex w-full justify-center absolute items-center '>
        
        <div className=' bg-white h-[180px] w-full max-w-[32rem] sm:max-w-lg md:max-w-xl rounded-xl p-3 px-7 pt-5 dark:bg-gray-900 dark:text-gray-200 flex flex-col justify-between'>
<div className=' flex gap-5 '>
    <FaExclamationTriangle size={45} className=' dark:fill-gray-300 fill-gray-700'/>
    <div>
        <h1 className=' mb-3 text-xl font-semibold font-sans'>Delete Expense</h1>
        <p className=' text-sm opacity-80'>Are you sure you want to delete this expense?</p>
    </div>

</div>
<div className=' flex gap-5 justify-end'>
  <button className=' rounded-md p-2 px-5 dark:bg-gray-800 dark:text-gray-300 text-sm dark:hover:bg-gray-700 bg-gray-100 border border-gray-300 text-gray-700 dark:border-gray-700  hover:bg-gray-200' onClick={()=>setConfirmDelete(false)}>Cancel</button>
  <button className=' rounded-md p-2 px-5 bg-red-800 text-gray-300 text-sm hover:bg-red-700' onClick={() => {deleteExpense(parseInt(id)); navigate(-1) }}>Delete</button>
</div>
        </div>
    </div>
  )
}
