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
import Footer from "./components/Footer"
import EditProfile from "./components/EditProfile"



function App() {
    
    return (
        

            <><Routes>

            <Route path="/welcome" element={<AuthLayout><WelcomePage /></AuthLayout>}></Route>
            <Route path="/login" element={<AuthLayout><Login /> </AuthLayout>}>
            
            </Route>


            <Route path="/" element={<PrivateRoute><MainLayout><HomePage /></MainLayout></PrivateRoute>}></Route>
            <Route path="/expense" element={<PrivateRoute><MainLayout><ExpenseList /></MainLayout></PrivateRoute>}></Route>
            <Route path="/expense/:id" element={<PrivateRoute><MainLayout><ExpenseDetails /></MainLayout></PrivateRoute>} />
            <Route path="/add-expense" element={<PrivateRoute><MainLayout><AddExpenseForm /></MainLayout></PrivateRoute>}></Route>
            <Route path="/setting" element={<PrivateRoute><MainLayout><Setting /></MainLayout></PrivateRoute>}></Route>
            <Route path="/dashboard" element={<PrivateRoute><MainLayout><Dashboard /></MainLayout></PrivateRoute>}></Route>
            <Route path="/edit-profile" element={<PrivateRoute><MainLayout><EditProfile/></MainLayout></PrivateRoute>}></Route>
        </Routes><Footer /></>

        
    )
}

export default App
