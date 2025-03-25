/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */

import { createContext, useEffect, useState, useContext } from "react";

import { getItem, setItem } from "../hooks/useLocalStorage";

const ExpenseContext = createContext();


function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  


  // Load expenses from localStorage when component mounts

  const addExpense = (amount, currency, category, date, paymentMethod, description, recurring, frequency) => {
    if (!amount || !currency || !category || !date || !paymentMethod) return;
 
   
    const newExpense = {
      amount,
      currency,
      category,
      date,
      paymentMethod,
      description,
      recurring,
      frequency,
      id: Date.now() + Math.floor(Math.random() * 1000),
    
      time: date > new Date().toISOString().split("T")[0] 
        ? "Upcoming" 
        : new Date().toISOString().split("T")[1].split(".")[0],
    };
  
    const updatedExpenses = [...expenses, newExpense];
    
    setExpenses(updatedExpenses);
    setItem("expenses", updatedExpenses); // Save in localStorage
   
  };

  
  useEffect(() => {
    
const restoredItems = getItem("expenses") || []
setExpenses(restoredItems) 
}, []);
  

  return (
    <ExpenseContext.Provider value={{ addExpense, expenses}}>
      {children}
    </ExpenseContext.Provider>
  );
}

function expenseValues() {
  return useContext(ExpenseContext);
}

export { ExpenseProvider, expenseValues };
