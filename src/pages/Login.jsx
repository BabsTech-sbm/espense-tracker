import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

function Login() {
    const [username, setUsername] = useState(
        localStorage.getItem("username") ? JSON.parse(localStorage.getItem("username")) : ""
    );

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const login = (e) => {
        e.preventDefault();
        if (!username) return;
        localStorage.setItem("username", JSON.stringify(username));
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
    };

    return (
        <div className=" h-screen flex flex-col items-center justify-center  bg-gray-100 dark:bg-gray-900 p-6">
            <div className="relative w-full max-w-md p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                <FaArrowLeft 
                    onClick={goBack} 
                    className="absolute left-4 top-4 text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-800 dark:hover:text-gray-200"
                />

                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Sign in</h1>
                </div>

                <form className="mt-6 flex flex-col gap-4">
                    <input 
                        type="text" 
                        className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" 
                        placeholder="Enter Your Name" 
                        onChange={(e) => setUsername(e.target.value)} 
                        value={username} 
                    />
                    <button 
                        onClick={login} 
                        className="w-full p-3 bg-green-600 dark:bg-green-700 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-800 transition"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
