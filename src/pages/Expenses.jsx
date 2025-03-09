import ExpenseList from "../components/ExpenseList"

function Expenses() {
    return (
        <div className="  dark:bg-gray-900 pb-8 lg:pl-[220px] sm:pl-[120px]  py-5  flex flex-col h-screen bg-gray-50 ">
            <ExpenseList />
        </div>
    )
}

export default Expenses
