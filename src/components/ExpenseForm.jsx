import { useState } from "react";

export default function AddExpenseForm() {
    const [expense, setExpense] = useState({
        name: "",
        amount: "",
        currency: "USD",
        category: "Food",
        date: new Date().toISOString().split("T")[0],
        paymentMethod: "Credit Card",
        description: "",
        receipt: null,
        recurring: false,
        frequency: "Monthly",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setExpense((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleFileChange = (e) => {
        setExpense((prev) => ({ ...prev, receipt: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Expense added:", expense);
    };

    return (
        <form onSubmit={handleSubmit} className=" lg:ml-[250px] sm:ml-[100px] max-w-3xl w-full mx-auto p-8 bg-white shadow-2xl rounded-2xl border border-gray-300 sm:max-w-[80%] md:max-w-xl lg:max-w-[45rem] transition-all">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Add Expense</h2>

            <input className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" name="name" value={expense.name} onChange={handleChange} placeholder="Expense Name" required />

            <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <input className="w-full sm:w-1/2 p-4 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" name="amount" type="number" value={expense.amount} onChange={handleChange} placeholder="Amount" required />
                <select className="w-full sm:w-1/2 p-4 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none" name="currency" value={expense.currency} onChange={handleChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>

            <select className="w-full p-4 border rounded-xl mt-4 focus:ring-2 focus:ring-blue-400 outline-none" name="category" value={expense.category} onChange={handleChange}>
                <option>Food</option>
                <option>Transport</option>
                <option>Entertainment</option>
                <option>Utilities</option>
            </select>

            <input className="w-full p-4 border rounded-xl mt-4 focus:ring-2 focus:ring-blue-400 outline-none" name="date" type="date" value={expense.date} onChange={handleChange} />

            <select className="w-full p-4 border rounded-xl mt-4 focus:ring-2 focus:ring-blue-400 outline-none" name="paymentMethod" value={expense.paymentMethod} onChange={handleChange}>
                <option>Cash</option>
                <option>Credit Card</option>
                <option>Bank Transfer</option>
            </select>

            <textarea className="w-full p-4 border rounded-xl mt-4 focus:ring-2 focus:ring-blue-400 outline-none" name="description" value={expense.description} onChange={handleChange} placeholder="Description (Optional)" />

            <input className="w-full p-4 border rounded-xl mt-4 focus:ring-2 focus:ring-blue-400 outline-none" type="file" onChange={handleFileChange} />

            <div className="flex items-center gap-3 mt-4">
                <input type="checkbox" name="recurring" checked={expense.recurring} onChange={handleChange} className="w-5 h-5 accent-blue-600" />
                <label className="text-gray-800 text-lg">Recurring Expense</label>
            </div>

            {expense.recurring && (
                <select className="w-full p-4 border rounded-xl mt-4 focus:ring-2 focus:ring-blue-400 outline-none" name="frequency" value={expense.frequency} onChange={handleChange}>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                </select>
            )}

            <div className="flex flex-col sm:flex-row gap-6 mt-6">
                <button type="submit" className="w-full sm:w-1/2 bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-all">Save Expense</button>
                <button type="button" className="w-full sm:w-1/2 bg-gray-300 text-gray-800 p-4 rounded-xl hover:bg-gray-400 transition-all" onClick={() => setExpense({ ...expense, name: "", amount: "", description: "" })}>Save & Add Another</button>
            </div>
        </form>
    );
}
