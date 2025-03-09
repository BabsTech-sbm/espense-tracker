import { useState } from "react";

export default function AddExpenseForm() {
    const [expense, setExpense] = useState({
        name: "",
        amount: "",
        currency: "USD",
        category: "Food & Dining",
        date: new Date().toISOString().split("T")[0],
        paymentMethod: "Credit Card",
        description: "",
        receipt: null,
        recurring: false,
        frequency: "Monthly",
    });

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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setExpense((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Expense added:", expense);
    };

    return (
        <div className=" bg-white dark:bg-gray-800 h-screen">

        <form
            onSubmit={handleSubmit}
            className="max-w-3xl w-full mx-auto p-6 sm:p-8 bg-white dark:bg-gray-800 shadow-lg dark:shadow-md rounded-xl border border-gray-300 dark:border-gray-700 sm:max-w-[70%] md:max-w-xl lg:max-w-[35rem] py-5 mb-8 transition-all"
            >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 text-center">Add Expense</h2>

            <input className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="name" value={expense.name} onChange={handleChange} placeholder="Expense Name" required />

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <input className="w-full sm:w-1/2 p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="amount" type="number" value={expense.amount} onChange={handleChange} placeholder="Amount" required />
                <select className="w-full sm:w-1/2 p-3 border rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="currency" value={expense.currency} onChange={handleChange}>
                    {currencies.map((curr) => (
                        <option key={curr} value={curr}>{curr}</option>
                    ))}
                </select>
            </div>

            <select className="w-full p-3 border rounded-lg mt-4 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="category" value={expense.category} onChange={handleChange}>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>

            <input className="w-full p-3 border rounded-lg mt-4 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="date" type="date" value={expense.date} onChange={handleChange} />

            <select className="w-full p-3 border rounded-lg mt-4 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="paymentMethod" value={expense.paymentMethod} onChange={handleChange}>
                {paymentMethods.map((method) => (
                    <option key={method} value={method}>{method}</option>
                ))}
            </select>

            <textarea className="w-full p-3 border rounded-lg mt-4 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="description" value={expense.description} onChange={handleChange} placeholder="Description (Optional)" />

            <div className="flex items-center gap-3 mt-4">
                <input type="checkbox" name="recurring" checked={expense.recurring} onChange={handleChange} className="w-5 h-5 accent-blue-600" />
                <label className="text-gray-800 dark:text-gray-200 text-lg">Recurring Expense</label>
            </div>

            {expense.recurring && (
                <select className="w-full p-3 border rounded-lg mt-4 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none" name="frequency" value={expense.frequency} onChange={handleChange}>
                    {frequencies.map((freq) => (
                        <option key={freq} value={freq}>{freq}</option>
                    ))}
                </select>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button type="submit" className="w-full sm:w-1/2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all">Save Expense</button>
                <button type="button" className="w-full sm:w-1/2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-all" onClick={() => setExpense({ ...expense, name: "", amount: "", description: "" })}>
                    Save & Add Another
                </button>
            </div>
        </form>
            </div>
    );
}
