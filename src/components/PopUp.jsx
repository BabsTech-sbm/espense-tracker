/* eslint-disable react/prop-types */
import { FaX } from "react-icons/fa6";
import { MdDone } from "react-icons/md";

export default function PopUp({ setSaveNewUsername }) {
  return (
    <div className=" h-screen z-50 bg-black/70 flex w-full justify-center absolute items-center">
       
        
      <div className=' bg-white h-[300px] w-full max-w-[32rem] sm:max-w-lg md:max-w-xl rounded-xl p-3 px-7 pt-5 dark:bg-gray-900 dark:text-gray-200 flex flex-col gap-5 items-center' >
        <div className=" bg-green-800 rounded-full  h-[120px] w-[120px] flex justify-center items-center">
          <MdDone size={90} fill="white" className="" />

        </div>
        <h2 className=" text-sm">Username Changed Sucessfully</h2>
      <button className=' rounded-md p-2 px-8 dark:bg-gray-800 dark:text-gray-300 text-sm dark:hover:bg-gray-700 bg-gray-100 border border-gray-300 text-gray-700 dark:border-gray-700  hover:bg-gray-200' onClick={() => setSaveNewUsername(false)}>Close</button>
      </div>
    </div>
  );
}
