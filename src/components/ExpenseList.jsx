import { MdSort } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { FiFilter, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import {expenseValues} from "../context/ExpenseContext"
import ExpenseItem from './ExpenseItem';
import { filterByCategory, filterByDate} from "../services/Filter"; 
import { sortData } from "../services/Sort";
import { FaArrowLeft } from "react-icons/fa6";
import EmptyExpenseList from "./EmptyExpenseList";
import { formatAmount } from "./Box";

function ExpenseList() {
    const [showFilter, setShowFilter] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [showSort, setShowSort] = useState(false);
    const [CurrentlyFiltered, setCurrentlyFiltered] = useState(false);
    const filterRef = useRef(null);
    const sortRef = useRef(null); 
    const [filteredExpense, setFilteredExpense] = useState([]);
    
   

    const filterOptions = {
        "Filter by Date": ["Today", "This Week", "This Month"],
        "Filter by Category": ["Transportation", "Groceries", "Subscription", "Rent", "Entertainment", "Healthcare"],
        "Filter by Status": ["Succesful", "Pending", "Failed"],
    };

    
const sortOptions = [
    "A-Z", "Z-A", "Amount Ascending", "Amount Descending", "Date Latest","Date Oldest"
]

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                (filterRef.current && !filterRef.current.contains(event.target)) &&
                (sortRef.current && !sortRef.current.contains(event.target))
            ) {
                setShowFilter(false);
                setShowSort(false);
                setSelectedFilter(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    
const {expenses} = expenseValues()
const filterExpense = (filterValue) =>{
    if(selectedFilter === "Filter by Category"){
        setFilteredExpense(filterByCategory(expenses, filterValue)) 
        setCurrentlyFiltered(true)
    }
    
    if(selectedFilter === "Filter by Date"){
        setFilteredExpense(filterByDate(expenses, filterValue))
        setCurrentlyFiltered(true)
    }
    if(filterValue=== "All"){

        setFilteredExpense(expenses)
        setCurrentlyFiltered(false)
    }
}
const sortExpense = (sortValue) => {
setFilteredExpense(sortData(filteredExpense, sortValue))

}
useEffect(()=>{
    
        setFilteredExpense(expenses)
    
        
    
},[expenses])
const navigate = useNavigate()
const goBack = () => {
    navigate(-1);
  };
    return (

        <div className="w-full px-4  sm:pb-2 lg:pl-[220px] sm:pl-[120px]  py-5  flex flex-col h-screen bg-gray-50  dark:bg-gray-900 dark:text-white transition-all ">
        {/* Header */}
         <div className=" flex items-center gap-7 mb-10 mt-2 mx-3">
                <FaArrowLeft 
                                        onClick={goBack} 
                                        className=" cursor-pointer dark:text-gray-300"
                                        size={24}
                                    />
                  <h2 className="text-xl font-semibold dark:text-gray-200">Expense List</h2>
                  
                </div>
        
        {/* Filter and Sort Section */}
        <div className="p-4 border-b dark:border-gray-700 flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-4 sm:gap-6 rounded-lg">
                {/* Filter Dropdown */}
                <div className="relative" ref={filterRef}>
                    <div
                className="flex items-center gap-2 cursor-pointer bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow dark:shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        onClick={() => {
                            
                           if (CurrentlyFiltered) {setFilteredExpense(expenses)
                            setCurrentlyFiltered(false)
                            setShowFilter(false);
                            setSelectedFilter(null);
                           } else{
                            setShowFilter(!showFilter);
                            setShowSort(false);
                            setSelectedFilter(null);
                           }
                        }}
                    >
                        { CurrentlyFiltered ?
                        <><FiX className="text-xl dark:text-white" /><span className="text-sm sm:text-base">Clear</span></>  
                        
                        :
                        <><FiFilter className="text-xl dark:text-white" /><span className="text-sm sm:text-base">Filter</span></>  
                    }
                    
                    </div>

                    {/* Main Filter Dropdown */}
                    {showFilter && (
                        <div className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 p-2 rounded-md z-10">
                            {Object.keys(filterOptions).map((option) => (
                                <p
                                    key={option}
                                           className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                                    onClick={() => setSelectedFilter(option)}
                                >
                                    {option}
                                </p>
                            ))}
                        </div>
                    )}

                    {/* Subcategory Dropdown */}
                    {selectedFilter && (
                        
                        <div className="absolute left-44 mt-2 w-44 top-0 m-1 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 p-2 rounded-md z-10">
                                <p
                                onClick={()=>filterExpense("All")}
                                    
                                  className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                                    
                                >
                                    All
                                </p>

                            {filterOptions[selectedFilter].map((subOption) => (
                                <p
                                    key={subOption}
                                  className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                                    onClick={() => filterExpense(subOption)}
                                >
                                    {subOption}
                                </p>
                            ))}
                        </div>
                    )}
                </div>

                {/* Sort Dropdown */}
                <div className="relative" ref={sortRef}>
                    <div
                         className="flex items-center gap-2 cursor-pointer bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow dark:shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                        onClick={() => {
                            setShowSort(!showSort);
                            setShowFilter(false);
                            setSelectedFilter(null);
                        }}
                    >
                        <MdSort className="text-xl dark:text-white" />
                        <span className="text-sm sm:text-base">Sort</span>
                    </div>
                    {showSort && (
                        <div className="absolute left-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 p-2 rounded-md z-10">
                            { sortOptions.map((option, index) => (
                                <p className="cursor-pointer p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded" key={index} onClick={()=> sortExpense(option)}>{option}</p>
                            
                            )) }

                        </div>
                    )}
                </div>
            </div>

            <Link to={"/add-expense"} className="bg-green-600 sm:block hidden text-white p-2 rounded-md text-sm sm:text-base">
                Add Expense
            </Link>
        </div>

        {/* Responsive Table */}
        {
            !expenses.length ? 
            <EmptyExpenseList/>
            :
        <div className="overflow-x-auto w-full mt-4">
    
    <table className="w-full min-w-[600px] shadow-lg dark:shadow-gray-800 rounded-lg">
   
    <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-white">
                        <th className="px-4 py-3 text-left">Category</th>
                        <th className="px-4 py-3 text-left">Amount</th>
                        <th className="px-4 py-3 text-left">Date</th>
                        <th className="px-4 py-3 text-left">Status</th>
                    </tr>
                </thead>
        {filteredExpense?.map((expense, index) => (
            <ExpenseItem key={index} id={expense.id}   status ={ "Succesful"} date={expense.date} amount={formatAmount(expense.amount, "USD")} category={expense.category}/>
        ))}
        </table>
        </div>
}
    </div>


    );
}

export default ExpenseList;



