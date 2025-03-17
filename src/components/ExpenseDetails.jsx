/* eslint-disable no-undef */
import { expenseValues } from "../context//ExpenseContext";
import { useParams } from "react-router-dom";
import {} from "react-redux";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
function ExpenseDetails() {
  const { expenses } = expenseValues();
  const { id } = useParams();
  const navigate = useNavigate();
  const expense = expenses.find((exp) => exp.id === parseInt(id));
  console.log(expense);
  useEffect(() => {
    if (!expense) {
      navigate("/");
    }
  }, [expense, navigate]);
  const goBack = () => {
    navigate(-1);
};
if(expense?.date >  new Date().toISOString().split("T")[0]) {
console.log("greater than the date")
}else if(expense?.date <  new Date().toISOString().split("T")[0]){
   console.log("less than the date")

 
} else{
  console.log("equal")
}
  return (
    <div className="w-full px-4 pb-8 lg:pl-[220px] sm:pl-[120px]  py-5  flex flex-col h-screen bg-gray-50  dark:bg-gray-900 dark:text-white transition-all items-center">
       <FaArrowLeft 
                          onClick={goBack} 
                          className="absolute left-28 md:left-32 lg:left-[250px] top-6 text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 text-2xl"
                      />
      <div className="max-w-3xl w-full mx-auto relative p-6 sm:p-8 shadow-xl dark:shadow-xl rounded-xl sm:max-w-[70%] md:max-w-xl lg:max-w-[35rem]">

      <div className=" flex flex-col items-center gap-5">
        <div className=" bg-green-600 w-[80px] h-[80px] rounded-full flex items-center text-4xl justify-center">
          <FaCheck/>
        </div>
        <h1 className=" flex justify-center items-center flex-col" ><span className=" text-4xl font-semibold">
          ${expense?.amount}.00
          </span>
          <span className=" text-gray-400 text-[0.7rem]">added expense</span>
        </h1>
      </div>
      <div>
        <p>Status: succesful</p>
        <p>Transfer ID: {expense?.id}</p>
        <p>Category: {expense?.category}</p>
        <p>Payment Method: {expense?.paymentMethod}</p>
        <p>Description: {expense?.description || "Null"}</p>
        <p>Date: {expense?.date}</p>
        <p>Time: {expense?.time}</p>
      </div>
      </div>
      
    </div>
  );
}

export default ExpenseDetails;
