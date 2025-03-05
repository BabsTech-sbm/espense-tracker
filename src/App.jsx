import Login from "./pages/Login"
import WelcomePage from "./pages/WelcomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddExpenseForm from "./components/ExpenseForm"
import HomePage from "./pages/Home"
import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Expenses from "./pages/Expenses"

function App() {
    const [loggedIn, setLoggedIn] = useState(true)
    return (
        <BrowserRouter>
            <Sidebar />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/login" element={<Login />}></Route >
                <Route path="/home" element={<HomePage />}></Route >
                <Route path="/expenses" element={<Expenses />}></Route >
            </Routes>
        </BrowserRouter>
    )
}

export default App
