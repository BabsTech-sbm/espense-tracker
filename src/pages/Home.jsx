import { Link } from "react-router-dom";
import Box from "../components/Box";
import RecentTransaction from "../components/RecentTransaction";
import Stats from "../components/Stats";
import image1 from "/welcome1.png";
import image2 from "/welcome2.png";
import image3 from "/welcome3.png";
import Button from "../components/Button";
import { useState } from "react";
import BarChartComponent from "../components/BarChart";


function HomePage() {

    return (
        <div className=" lg:ml-[200px] sm:ml-[100px]  flex flex-col h-screen bg-gray-50 ">
            <div className=" flex ">

                <Box caption={"Expenses"} captionStyle={"text-xl font-semibold"} boxStyle={"w-[70%] sm:w-[40%] lg:w-[35%] mx-5 sm:mx-2 lg:mx-5"} />
                <Box caption={"Incomes"} captionStyle={"text-xl font-semibold"} boxStyle={"hidden sm:block w-[70%] sm:w-[40%] lg:w-[35%] "} />
                <div className=" flex justify-center flex-1 items-center gap-7">
                    <Button btnCaption="Add Expense" btnCaptionStyle={" hidden lg:block"} btnStyle=" bg-green-600 h-16 w-16 mx-auto my-auto rounded-full flex justify-center items-center hidden lg:flex" />
                    <Button btnCaption="Add Income" btnCaptionStyle={" hidden lg:block"} btnStyle=" bg-blue-600 h-16 w-16 mx-auto my-auto rounded-full  justify-center items-center hidden lg:flex" />
                    <Button btnCaption="ADD" btnCaptionStyle={" lg:hidden block"} btnStyle=" bg-blue-600 h-16 w-16 mx-auto my-auto rounded-full  justify-center items-center flex lg:hidden" />
                </div>

            </div>
            <div className="">
                <RecentTransaction />

            </div>

            <BarChartComponent />
        </div>
        /*   <div className="min-h-screen bg-gray-100 flex flex-col items-center ">
              <header className="w-full bg-green-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
                  <h1 className="text-2xl font-bold">Expense Tracker</h1>
                  <nav>
                      <Link to="/login" className="bg-white text-green-600 px-4 py-1 text-sm rounded-lg shadow-md hover:bg-gray-200 transition-all">Login</Link>
                  </nav>
              </header>
  
              <main className="flex flex-col items-center text-center mt-5 max-w-2xl w-full">
                  <h2 className="text-3xl font-semibold text-gray-800">Track Your Expenses Easily</h2>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">
                      Stay on top of your spending and manage your finances efficiently.
                  </p>
  
                  <img src={image1} alt="Finance Dashboard" className="w-full  max-w-md mt-4 shadow-lg rounded-lg" />
  
                  <Link to="/dashboard" className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all">
                      Get Started
                  </Link>
              </main>
  
              <footer className="w-full py-4 mt-10 text-center text-gray-600 text-sm">
                  &copy; {new Date().getFullYear()} Expense Tracker. All rights reserved.
              </footer>
          </div> */
    );
}

export default HomePage;
