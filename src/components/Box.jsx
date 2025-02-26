import { FaChartBar, FaChartLine, FaCommentDots, FaDotCircle, FaRecordVinyl, FaRegChartBar } from "react-icons/fa"
import { AiOutlineBarChart, AiOutlineDotChart } from "react-icons/ai"
import { } from "react-icons/bi"
import { } from "react-icons/bs"
import { } from "react-icons/cg"
function Box() {
    return (
        <div className=" p-5 w-[45%] lg:w-[35%] rounded-lg border border-gray-300 bg-white  h-[150px] m-2 ">
            <div className=" flex items-center gap-3">
                <FaChartBar />
                <h1 className=" text-xl font-semibold">Expenses</h1>
            </div>
            <div className=" mt-5">


                <h1 className=" text-sm font-mono opacity-80">Total: $13,000</h1>
                <h1 className=" text-sm font-mono opacity-80">Today: $1,000</h1>

            </div>

        </div>
    )
}

export default Box
