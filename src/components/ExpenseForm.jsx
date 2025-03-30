import { useState } from "react";

import {expenseValues} from "../context/ExpenseContext"
import { useNavigate } from 'react-router-dom';
import { FaX } from "react-icons/fa6";
export default function AddExpenseForm() {

    const [amount, setAmount] = useState("")
    const [currency, setCurrency] = useState("USD")
    const [category, setCategory] = useState("Transportation")
    const [date, setDate] = useState( new Date().toISOString().split("T")[0])
    const [paymentMethod, setPaymentMethod] = useState("Cash")
    const [description, setDescription] = useState("")
    const [recurring, setRecurring] = useState(false)
    const [frequency, setFrequency] = useState( recurring ? "Daily" : "No")
    const categories = [
        "Transportation",
        "Groceries",
        "Subscription",
        "Rent",
        "Entertainment",
        "Healthcare",
    ];

    const currencies = ["USD", "EUR", "GBP", "CAD", "AUD", "NGN", "JPY", "INR"];
    const paymentMethods = ["Cash", "Credit Card", "Bank Transfer", "Mobile Payment", "PayPal", "Cryptocurrency"];
    const frequencies = ["Daily", "Weekly", "Monthly", "Yearly"];
    const {addExpense} = expenseValues()
    const navigate = useNavigate();

   
    const handleClickAddAnother = () =>{
        addExpense(amount, currency, category,  date, paymentMethod, description, recurring, frequency,)
        setAmount("")
        setCurrency("USD")
        setCategory("Transportation")
        setDate(new Date().toISOString().split("T")[0])
        setPaymentMethod("Cash")
        setDescription("")
        setRecurring(false)
        setFrequency(recurring ? "Daily" : "No")
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
       addExpense(Number(amount), currency, category,  date, paymentMethod, description, recurring, frequency)
        navigate(-1);
    } 
    return (
        <div className=" bg-white dark:bg-gray-800 min-h-screen sm:pb-2 ">

        <form
            onSubmit={handleSubmit}
            className="max-w-3xl w-full mx-auto relative p-6 sm:p-8 bg-white dark:bg-gray-800 shadow-lg dark:shadow-md rounded-xl border border-gray-300 dark:border-gray-700 sm:max-w-[70%] md:max-w-xl lg:max-w-[35rem] py-5  transition-all h-full "
            >
                <FaX className=" absolute z-10 right-5 top-5 dark:text-gray-300 text-gray-800 m-2 cursor-pointer" size={24} onClick={()=> navigate(-1)}/>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 text-center">Add Expense</h2>

            

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <input className="w-full sm:w-1/2 p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
                <select className="w-full sm:w-1/2 p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="currency" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    {currencies.map((curr) => (
                        <option key={curr} value={curr}>{curr}</option>
                    ))}
                </select>
            </div>

            <select className="w-full p-3 border rounded-lg mt-4 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="category"value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>

            <input className="w-full p-3 border rounded-lg mt-4 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />

            <select className="w-full p-3 border rounded-lg mt-4 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                {paymentMethods.map((method) => (
                    <option key={method} value={method}>{method}</option>
                ))}
            </select>

            <textarea className="w-full p-3 border rounded-lg mt-4 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description (Optional)" />

            <div className="flex items-center gap-3 mt-4">
                <input type="checkbox" name="recurring" value={recurring} onChange={(e) => setRecurring(!recurring)}  className="w-5 h-5 accent-blue-600" />
                <label className="text-gray-800 dark:text-gray-200 text-lg">Recurring Expense</label>
            </div>

            {recurring && (
                <select className="w-full p-3 border rounded-lg mt-4 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="frequency" value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                    {frequencies.map((freq) => (
                        <option key={freq} value={freq}>{freq}</option>
                    ))}
                </select>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-6  sm:mb-0 ">
                <button type="submit" className="w-full sm:w-1/2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all">Save Expense</button>
                <button onClick={handleClickAddAnother} type="button" className="w-full sm:w-1/2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-all">
                    Save & Add Another
                </button>
            </div>
        </form>
            </div>
    );
}
