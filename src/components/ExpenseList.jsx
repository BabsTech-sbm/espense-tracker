import { FaSort, FaSortAlphaDown } from "react-icons/fa"
import Sticker from "./Sticker"
import { useState } from "react"

function ExpenseList() {
    const Transportation = "T"
    const Grocery = "G"
    const Subscription = "S"
    const [dropdown, setDropdown] = useState(false)
    return (
        <div className="w-full ">
            <div className=" flex justify-between py-5 pr-5">
                <h1 className=" text-xl sm:text-2xl font-bold "> All Expenses</h1>
                <input type="text" placeholder="search..." className=" outline-none shadow-md shadow-gray-200 placeholder:text-sm p-1 border placeholder:text-gray-400 h-[30px] w-[150px]" />
            </div>
            <div className=" p-4 border-b flex justify-between" >
                <div className=" relative">

                    <h1 className=" flex text-md cursor-pointer" onClick={() => setDropdown(!dropdown)}>Sort<FaSort size={20} className=" text-black/80" /></h1>
                    {dropdown && <div className=" flex flex-col absolute bg-white items-start p-2">
                        <button className=" p-1 font-semibold text-sm">Alphabetical</button>
                        <button className=" p-1 font-semibold text-sm">Amount</button>
                        <button className=" p-1 font-semibold text-sm">Status</button>
                    </div>
                    }
                </div>
                < button className=" bg-green-600  text-white p-1 px-2 rounded-md">Add Expense</button>


            </div>
            <div className="overflow-x-auto">


                <table className="w-full   shadow-lg rounded-lg">
                    <thead>
                        <tr>
                            <th className="  px-4 py-2 text-left">Title</th>
                            <th className="  px-4 py-2 text-left">Amount</th>
                            <th className="  px-4 py-2 text-left">ID</th>
                            <th className="  px-4 py-2 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50 transition-all cursor-pointer hover:opacity-85">
                            <td className="  px-4 py-6 text-left flex items-center gap-1"><input type="checkbox" className=" mr-1 cursor-pointer" /><Sticker Transactiontype={Transportation} Transactioncolor={"bg-red-600"} /> <h1 className="  font-sans">Transportation</h1></td>

                            <td className=" px-4 py-6 text-left"><h1 className=" font-mono text-sm font-semibold text-red-700  ">90,000</h1></td>
                            <td className=" px-4 py-6 text-left font-serif lowercase text-sm">1E22FV5N</td>
                            <td className=" px-4 py-6 text-left font-bold text-green-600">Successful</td>


                        </tr>
                        <tr className="hover:bg-gray-50 transition-all cursor-pointer hover:opacity-85">

                            <td className="  px-4 py-6 text-left flex items-center gap-1"><input type="checkbox" className=" mr-1 cursor-pointer" /><Sticker Transactiontype={Grocery} Transactioncolor=" bg-blue-600" /> <h1 className="  font-sans">Groceries</h1></td>

                            <td className=" px-4 py-6 text-left"><h1 className=" font-mono text-sm font-semibold text-red-700  ">15,000</h1></td>
                            <td className=" px-4 py-6 text-left font-serif lowercase text-sm">tE227i0N</td>
                            <td className=" px-4 py-6 text-left font-bold text-red-600">Failed</td>


                        </tr>
                        <tr className="hover:bg-gray-50 transition-all cursor-pointer hover:opacity-85">

                            <td className="  px-4 py-6 text-left flex items-center gap-1"><input type="checkbox" className=" mr-1 cursor-pointer" /><Sticker Transactiontype={Subscription} Transactioncolor=" bg-green-600" /> <h1 className="  font-sans">Subscription</h1></td>
                            <td className=" px-4 py-6 text-left"><h1 className=" font-mono text-sm font-semibold text-red-700  ">105,000</h1></td>
                            <td className=" px-4 py-6 text-left font-serif lowercase text-sm">dskjskd16</td>
                            <td className=" px-4 py-6 text-left font-bold text-orange-500">Pending</td>


                        </tr>
                        <tr className="hover:bg-gray-50 transition-all cursor-pointer hover:opacity-85">
                            <td className="  px-4 py-6 text-left flex items-center gap-1"><input type="checkbox" className=" mr-1 cursor-pointer" /><Sticker Transactiontype={Transportation} Transactioncolor={"bg-red-600"} /> <h1 className="  font-sans">Transportation</h1></td>

                            <td className=" px-4 py-6 text-left"><h1 className=" font-mono text-sm font-semibold text-red-700  ">90,000</h1></td>
                            <td className=" px-4 py-6 text-left font-serif lowercase text-sm">1E22FV5N</td>
                            <td className=" px-4 py-6 text-left font-bold text-green-600">Successful</td>


                        </tr>
                        <tr className="hover:bg-gray-50 transition-all cursor-pointer hover:opacity-85">

                            <td className="  px-4 py-6 text-left flex items-center gap-1"><input type="checkbox" className=" mr-1 cursor-pointer" /><Sticker Transactiontype={Grocery} Transactioncolor=" bg-blue-600" /> <h1 className="  font-sans">Groceries</h1></td>

                            <td className=" px-4 py-6 text-left"><h1 className=" font-mono text-sm font-semibold text-red-700  ">15,000</h1></td>
                            <td className=" px-4 py-6 text-left font-serif lowercase text-sm">tE227i0N</td>
                            <td className=" px-4 py-6 text-left font-bold text-red-600">Failed</td>


                        </tr>
                        <tr className="hover:bg-gray-50 transition-all cursor-pointer hover:opacity-85">

                            <td className="  px-4 py-6 text-left flex items-center gap-1"><input type="checkbox" className=" mr-1 cursor-pointer" /><Sticker Transactiontype={Subscription} Transactioncolor=" bg-green-600" /> <h1 className="  font-sans">Subscription</h1></td>
                            <td className=" px-4 py-6 text-left"><h1 className=" font-mono text-sm font-semibold text-red-700  ">105,000</h1></td>
                            <td className=" px-4 py-6 text-left font-serif lowercase text-sm">dskjskd16</td>
                            <td className=" px-4 py-6 text-left font-bold text-orange-500">Pending</td>


                        </tr>
                    </tbody>
                </table>
            </div>
            {/*   <div className=" border">

                <div className=" p-4 border-b flex justify-between" >
                    <h1 className=" flex text-md cursor-pointer">Sort<FaSort size={20} className=" text-black/80" /></h1>
                    < button className=" bg-green-600  text-white p-1 px-2 rounded-md">Add Expense</button>
                </div>
                <div className=" flex flex-col p-5">
                    <div className=" flex justify-between py-5 border-b">
                        <h1>Details</h1>
                        <h1>Amount</h1>
                        <h1>Status</h1>

                    </div>
                    <div className=" justify-between flex py-5">
                        <div className=" flex items-center gap-5">
                            <div className=" flex flex-col  justify-center">
                                <h1 className="  font-sans">Transportation</h1>
                            </div>
                        </div>
                        <h1 className=" font-mono text-sm font-semibold text-red-700  ">15,000</h1>
                        <h1>Succesful</h1>
                    </div>
                </div>
            </div> */}
        </div>


    )
}

export default ExpenseList
