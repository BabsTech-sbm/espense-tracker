/* eslint-disable no-undef */
import { expenseValues } from "../context//ExpenseContext";
import { useParams } from "react-router-dom";
import {} from "react-redux";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
function ExpenseDetails() {
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
    <div className=" bg-gray-50 h-screen dark:bg-gray-900 dark:text-white transition-all sm:mb-0 mb-20 flex flex-col items-center pb-[120px] sm:pb-2">
       <FaArrowLeft 
                          onClick={goBack} 
                          className=" cursor-pointer z-10 absolute left-10 top-7 sm:left-28 sm:top-5 lg:left-[250px]"
                          size={24}
                      />
      <div className="max-w-3xl w-full relative sm:shadow-xl dark:shadow-xl rounded-xl sm:max-w-[70%] md:max-w-xl lg:max-w-[35rem]  ">

      <div className=" flex flex-col mt-16 p-1 w-full  items-center">
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
      <div
                               className="flex items-center gap-2  mt-5 cursor-pointer bg-white dark:bg-red-950 px-5 py-3 rounded-lg shadow dark:shadow-md hover:bg-gray-200 dark:hover:bg-red-900 transition"
                              onClick={() => {
                                 
                              }}
                          >
                              <MdDelete className="text-xl dark:text-white" />
                              <span className="text-sm sm:text-base">Delete</span>
                          </div>
    </div>
  );
}

export default ExpenseDetails;
