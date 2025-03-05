/* eslint-disable react/prop-types */
import { FaChartBar } from "react-icons/fa"
import { } from "react-icons/bi"
import { } from "react-icons/cg"
function Box({ boxStyle, captionStyle, caption, total, today }) {
    return (
        <div className={` ${boxStyle} p-5   rounded-lg border border-gray-300 bg-white  h-[150px] m-2 `}>
            <div className=" flex items-center gap-3">
                <FaChartBar />
                <h1 className={captionStyle}>{caption}</h1>

            </div>
            <div className=" mt-5">


                <h1 className=" text-sm font-mono opacity-80">Total: $13,000 {total}</h1>
                <h1 className=" text-sm font-mono opacity-80">Today: $1,000{today}</h1>

            </div>

        </div>
    )
}

export default Box
