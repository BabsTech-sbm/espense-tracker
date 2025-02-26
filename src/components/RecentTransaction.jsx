import Stats from "./Stats"
import Sticker from "./Sticker"


const Transportation = "T"
const Grocery = "G"
const Subscription = "S"
function RecentTransaction() {
    return (
        <div>

            <div className=" w-full mt-10 flex  flex-wrap mx-5 sm:gap- md:gap-10 gap-10">

                <div className=" flex flex-col gap-7 w-full  sm:max-w-md md:max mx-2  ">
                    <h1 className=" my-5 font-sans text-md font-semibold">Recent Transactions</h1>

                    <div className="flex justify-between cursor-pointer hover:opacity-90">
                        <div className=" flex items-center gap-5">
                            <Sticker Transactiontype={Transportation} Transactioncolor=" bg-red-600" />
                            <div className=" flex flex-col  justify-center">
                                <h1 className="  font-sans">Transportation</h1>
                                <p className=" text-xs opacity-50 font flex gap-2"><span>5:12 pm - </span><span className=" font-sans">Traveled to Lagos</span></p>
                            </div>
                        </div>
                        <h1 className=" font-mono text-sm font-semibold text-red-700 ">15,000</h1>
                    </div>
                    <div className="flex justify-between cursor-pointer hover:opacity-90">
                        <div className=" flex items-center gap-5">
                            <Sticker Transactiontype={Grocery} Transactioncolor=" bg-blue-600" />
                            <div className=" flex flex-col  justify-center">
                                <h1 className="  font-sans">Grocery Shopping</h1>
                                <p className=" text-xs opacity-50 font flex gap-2"><span>5:12 pm - </span><span className=" font-sans">Food and Drink</span></p>
                            </div>
                        </div>
                        <h1 className=" font-mono text-sm font-semibold text-red-700 ">15,000</h1>
                    </div>
                    <div className="flex justify-between cursor-pointer hover:opacity-90">
                        <div className=" flex items-center gap-5">
                            <Sticker Transactiontype={Subscription} Transactioncolor=" bg-green-600" />
                            <div className=" flex flex-col  justify-center">
                                <h1 className="  font-sans">Subscription </h1>
                                <p className=" text-xs opacity-50 font flex gap-2"><span>5:12 pm - </span><span className=" font-sans">Netflix Subscription</span></p>
                            </div>
                        </div>
                        <h1 className=" font-mono text-sm font-semibold text-red-700">15,000</h1>
                    </div>

                </div>
                <Stats />
            </div>
        </div>
    )
}

export default RecentTransaction
