/* eslint-disable no-undef */
import { expenseValues } from "../context//ExpenseContext";
import { useParams } from "react-router-dom";
import {} from "react-redux";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { MdArchive, MdDelete } from "react-icons/md";
import DeletePopUp from "./DeletePopUp";
function ExpenseDetails() {
const [confirmDelete, setConfirmDelete] = useState(false)
  const { expenses } = expenseValues();
  const { id } = useParams();
  const navigate = useNavigate();
  const expense = expenses.find((exp) => exp.id === parseInt(id));

  useEffect(() => {
    if (!expense) {
      navigate("/");
    }
  }, [expense, navigate]);
  const goBack = () => {
    navigate(-1);
};
/* new Date().toISOString().split("T")[0] */

  return (
    <div className=" bg-gray-50 h-screen dark:bg-gray-900 dark:text-white transition-all  flex flex-col items-center">
       <FaArrowLeft 
                          onClick={goBack} 
                          className=" cursor-pointer z-10 absolute left-10 top-7 sm:left-28 sm:top-5 lg:left-[250px]"
                          size={24}
                      />
                      {!confirmDelete && <MdDelete className=" cursor-pointer z-10 absolute right-10 top-7 sm:right-28 sm:top-5 " size={32} onClick={()=>setConfirmDelete(true)}/>}
                      
                      
      <div className="max-w-3xl w-full relative sm:shadow-xl dark:shadow-xl rounded-xl sm:max-w-[70%] md:max-w-xl lg:max-w-[35rem] ">

      <div className=" flex flex-col mt-20 p-1 w-full  items-center">
        <div className=" bg-green-600 w-[80px] h-[80px] rounded-full flex items-center text-4xl justify-center">
          <FaCheck/>
        </div>
        <span className=" text-4xl font-semibold">
          ${expense?.amount}.00
          </span>
          <span className=" text-gray-400 text-[0.7rem]">added expense</span>
        
      </div>
   
      <table className=" mt-16  w-full p-1 flex justify-around">
        <tbody>
          <tr className="">
            <td className=" opacity-60 py-2 " >Status</td>
            <td className=" pl-24 py-2">Succesful</td>
          </tr>
          <tr>
            <td className=" opacity-60 py-2">Transfer ID</td>
            <td className=" pl-24 py-2">{expense?.id}</td>
          </tr>
          <tr>
            <td className=" opacity-60 py-2">Category</td>
            <td className=" pl-24 py-2" >{expense?.category}</td>
          </tr>
          <tr>
            <td className=" opacity-60 py-2">Payment</td>
            <td className=" pl-24 py-2">{expense?.paymentMethod}</td>
          </tr>
          <tr>
            <td className=" opacity-60 py-2">Description</td>
            <td className=" pl-24 py-2">{expense?.description || "Null"}</td>
          </tr>
          <tr>
            <td className=" opacity-60 py-2" >Date</td>
            <td className=" pl-24 py-2">{expense?.date}</td>
          </tr>
          <tr>
            <td className=" opacity-60 py-2">Time</td>
            <td className=" pl-24 py-2">{expense?.time}</td>
          </tr>
        </tbody>
      </table>
     
      </div>
      { confirmDelete && <DeletePopUp setConfirmDelete={setConfirmDelete} id={id}/>}
    </div>
  );
}

export default ExpenseDetails;
