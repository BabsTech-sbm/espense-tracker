import Login from "./pages/Login"
import WelcomePage from "./pages/WelcomePage"
import { Route, Routes } from "react-router-dom"
import AddExpenseForm from "./components/ExpenseForm"
import HomePage from "./pages/Home"

import Setting from "./pages/Setting"
import Dashboard from "./pages/Dashboard"
import AuthLayout from "./layouts/AuthLayout"
import MainLayout from "./layouts/MainLayout"
import PrivateRoute from "./layouts/PrivateRoute"
import ExpenseDetails from './components/ExpenseDetails'; 
import ExpenseList from './components/ExpenseList';



function App() {
    
    return (
        

            <Routes>

                <Route  path="/welcome" element={ <AuthLayout><WelcomePage /></AuthLayout>}></Route>
                <Route path="/login" element={<AuthLayout><Login/> </AuthLayout>}></Route >


                <Route path="/" element={<PrivateRoute><MainLayout><HomePage /></MainLayout></PrivateRoute>}></Route >
                <Route path="/expense" element={ <MainLayout><ExpenseList /></MainLayout>}></Route >
                <Route path="/expense/:id" element={<MainLayout><ExpenseDetails /></MainLayout>} />
                 <Route path="/add-expense" element={  <MainLayout><AddExpenseForm /></MainLayout>}></Route >
                <Route path="/setting" element={  <MainLayout><Setting /></MainLayout>}></Route >
                <Route path="/dashboard" element={  <MainLayout><Dashboard /></MainLayout>}></Route >

            </Routes>
        
    )
}

export default App
