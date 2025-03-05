import Login from "./pages/Login"
import WelcomePage from "./pages/WelcomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddExpenseForm from "./components/ExpenseForm"
import HomePage from "./pages/Home"
import Sidebar from "./components/Sidebar"
import Expenses from "./pages/Expenses"
import MobileFooter from "./components/MobileFooter"
import Setting from "./pages/Setting"
import Dashboard from "./pages/Dashboard"

function App() {

    return (
        <BrowserRouter>
            <Sidebar />
            <MobileFooter />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<Login />}></Route >
                <Route path="/home" element={<HomePage />}></Route >
                <Route path="/expenses" element={<Expenses />}></Route >
                <Route path="/add-expense" element={<AddExpenseForm />}></Route >
                <Route path="/setting" element={<Setting />}></Route >
                <Route path="/dashboard" element={<Dashboard />}></Route >

            </Routes>
        </BrowserRouter>
    )
}

export default App
