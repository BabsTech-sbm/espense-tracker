import ExpenseList from "../components/ExpenseList"

function Expenses() {
    return (
        <div className=" lg:ml-[220px] sm:ml-[120px]  flex flex-col h-screen bg-gray-50 ">
            <ExpenseList />
        </div>
    )
}

export default Expenses
