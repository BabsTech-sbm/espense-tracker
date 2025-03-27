import React from 'react'
import { FaExclamationTriangle,  } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';
import { MdGrid3X3, } from 'react-icons/md';


export default function DeletePopUp({setConfirmDelete}) {
  return (
    <div className=' h-screen z-20 bg-black/70 flex w-full justify-center absolute items-center '>
        <FaX className=" cursor-pointer z-10 absolute right-10 top-7 sm:right-28 sm:top-5 " size={32} onClick={()=>setConfirmDelete(false)} />
        <div className=' bg-white h-[180px] w-full max-w-[32rem] sm:max-w-lg md:max-w-xl rounded-xl p-5 dark:bg-gray-900 dark:text-gray-200'>
<div className=' flex gap-5 '>
    <FaExclamationTriangle size={45} className=' dark:fill-gray-300 fill-gray-700'/>
    <div>
        <h1 className=' mb-3 text-xl font-semibold font-sans'>Delete Expense</h1>
        <p className=' text-sm opacity-80'>Are you sure you want to delete this expense?</p>
    </div>
</div>
        </div>
    </div>
  )
}
