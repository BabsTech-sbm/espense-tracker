import { FaAddressBook, FaBook, FaBroadcastTower, FaChartLine, FaChessBoard, FaHome, FaUser, FaWallet } from "react-icons/fa"
import { MdSettings, MdSpaceDashboard } from "react-icons/md"
import pfp from "/profilepic.png"
import { Link } from "react-router-dom"
function Sidebar() {
    return (
        <div className=" gap-20 border shadow-lg transition-all duration-300 shadow-slate-400 fixed left-0 top-0 h-[100vh] w-[80px] lg:w-[190px] hidden p-5 sm:flex flex-col ">
            <div className=" lg:flex flex-col  items-center w-full">
                <img src={pfp} className=" transition-all duration-300 w-[100px] rounded-full  cursor-pointer" />
                <h1 className=" text-sm font-normal sm:hidden lg:block  ">Adam Johnson</h1>
            </div>

            <ul className=" flex flex-col gap-5">
                <li>
                    <Link to={""} className="flex items-center gap-3">
                        <div className=" relative">

                            <FaHome className="" size={28} />
                        </div>
                        <span className=" text-[1rem] font-semibold hidden lg:block ">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/expenses"} className="flex items-center gap-3">

                        <FaWallet size={28} />
                        <span className=" text-[1rem] font-semibold hidden lg:block">Expenses</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/dashboard"} className="flex items-center gap-3">

                        <MdSpaceDashboard size={28} />
                        <span className=" text-[1rem] font-semibold hidden lg:block">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/setting"} className="flex items-center gap-3">

                        < MdSettings size={28} />
                        <span className=" text-[1rem] font-semibold hidden lg:block">Settings</span>
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar
