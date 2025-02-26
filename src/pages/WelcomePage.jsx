import image1 from "/welcome1.png";
import image2 from "/welcome2.png";
import image3 from "/welcome3.png";
import { Link } from "react-router-dom";

function WelcomePage() {
    return (

        <div >

            <header className="w-full bg-green-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
                <h1 className="text-2xl font-bold">Expense Tracker</h1>
                <nav>
                    <Link to="/login" className="bg-white text-green-600 px-4 py-1 text-sm rounded-lg shadow-md hover:bg-gray-200 transition-all">Login</Link>
                </nav>
            </header>
            <div className="flex flex-col  items-center justify-center h-screen w-full p-4 bg-gray-50 sm:flex-row">

                <div className="flex justify-center">
                    <img
                        src={image3}
                        alt="welcome-image"
                        className="w-[300px] sm:w-[500px] lg:w-[600px] transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                <div className="flex flex-col items-center text-center p-4 max-w-md">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Manage Your Expenses Smartly</h1>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                        Track your transactions and plan your finances efficiently.
                    </p>
                    <div className="mt-6">
                        <Link
                            to="/login"
                            className="bg-green-500 text-white text-sm sm:text-base font-medium py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomePage;
