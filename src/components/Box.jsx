/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { expenseValues } from "../context/ExpenseContext";
export const formatAmount = (amount, currency = "USD") => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(amount);
  };
function Box() {
    
    const {expenses} = expenseValues()
    const totalExpenses = expenses.reduce((sum, item) => sum + Number(item.amount), 0);
   
    return (
        <>
            <div className=" shadow-lg bg-gradient-to-r from-green-950 to-black flex flex-col gap-16 m-3 sm:m-5 p-5 rounded-2xl">
                <div>
                    <h2 className="text-md font-semibold text-white">Total Expenses</h2>
                    <p className="text-xl font-bold text-red-600 mt-2">{formatAmount(totalExpenses, "USD")}</p>
                </div>
                <div className=" flex justify-between">
                    <div>
                        <h2 className="text-md font-semibold text-white">Current Month</h2>
                        <p className="text-xl font-bold text-red-400 mt-2">-$1,250.00</p>
                    </div>
                    <div>
                        <h2 className="text-md font-semibold text-white">Upcoming Bills</h2>
                        <p className="text-xl font-bold text-orange-500 mt-2">$450.00</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Box
