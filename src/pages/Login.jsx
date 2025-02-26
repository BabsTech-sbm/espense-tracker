import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaArrowLeft } from "react-icons/fa";

function Login() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1); // Navigates to the previous page
    };
    const login = (e) => {
        e.preventDefault()
        navigate("/home"); // Navigates to the previous page
    };

    return (

        <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="relative w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <FaArrowLeft onClick={goBack} className="absolute left-4 top-4 text-gray-600 cursor-pointer hover:text-gray-800" />

                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Sign in</h1>
                    <p className="mt-2 text-gray-600">
                        or <a href="#" className="text-green-500 hover:underline">create an account</a>
                    </p>
                </div>

                <form className="mt-6 flex flex-col gap-4">
                    <input type="text" className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300" placeholder="Email" />
                    <input type="password" className="w-full p-3 border rounded-lg focus:ring focus:ring-green-300" placeholder="Password" />

                    <label className="flex items-center gap-2 text-gray-700">
                        <input type="checkbox" className="scale-125 accent-green-600" />
                        Remember me
                    </label>

                    <button onClick={login} className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">Sign in</button>

                    <div className="flex items-center justify-center gap-2 w-full border border-gray-300 p-3 rounded-lg hover:bg-gray-100 transition">
                        <FaGoogle className="text-red-500" />
                        <button type="button" className="font-medium text-gray-700">Sign in with Google</button>
                    </div>
                </form>

                <a href="#" className="block mt-4 text-center text-green-500 hover:underline">Forgotten your password?</a>
            </div>
        </div>
    );
}

export default Login;
