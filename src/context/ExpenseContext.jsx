/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */

import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaCar } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

/* status: "Successful", 
        statusColor: "bg-green-100 text-green-700" icon: <FaCar className="text-red-500" />,  */

const ExpenseContext = createContext();

function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (
    amount,
    currency,
    category,
    date,
    paymentMethod,
    description,
    recurring,
    frequency
  ) => {
    if (
      amount === "" ||
      currency === "" ||
      category === "" ||
      date === "" ||
      paymentMethod === ""
    )
      return null;

    const newExpense = {
      amount,
      currency,
      category,
      date,
      paymentMethod,
      description,
      recurring,
      icon:
        category === "Transportation" ? (
          <FaCar className="text-red-500" />
        ) : category === "Groceries" ? (
          <FaShoppingCart className="text-blue-500" />
        ) : category === "Subscription" ? (
          <FaDollarSign className="text-green-500" />
        ) : category === "Rent" ? (
          <FaHome className="text-blue-500" />
        ) : category === "Entertainment" ? (
          <FaGamepad className="text-blue-500" />
        ) : category === "Healthcare" ? (
          <FaHeartbeat className="text-blue-500" />
        ) : (
          ""
        ),
      frequency,
      time:
        date > new Date().toISOString().split("T")[0]
          ? "Upcoming"
          : new Date().toISOString().split("T")[1].split(".")[0],
      id: Date.now() + Math.floor(Math.random() * 1000),
    };
    setExpenses((prev) => [...prev, newExpense]);
  };

  return (
    <ExpenseContext.Provider value={{ addExpense, expenses }}>
      {children}
    </ExpenseContext.Provider>
  );
}

function expenseValues() {
  const context = useContext(ExpenseContext);
  return context;
}
export { ExpenseProvider, expenseValues };
