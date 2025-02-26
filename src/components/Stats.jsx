function Stats() {
    return (
        <div className="  w-full max-w-[250px] px-3 border-l-2  border-black/20 sm:mx-5 ">
            <h1 className=" my-5 font-sans text-lg font-semibold">What you spend on most</h1>
            <div className=" gap-5 flex flex-col">
                <p className=" flex flex-col ">
                    <span className=" text-xs font-mono">Grocery: </span>
                    <span className=" bg-slate-200  h-3 rounded-lg w-full  flex"><span className=" bg-blue-700 w-[70%] rounded-lg "></span></span>
                </p>
                <p className=" flex flex-col ">
                    <span className=" text-xs font-mono">Transportation: </span>
                    <span className=" bg-slate-200  h-3 rounded-lg w-full  flex"><span className=" bg-red-700 w-[50%] rounded-lg "></span></span>
                </p>
                <p className=" flex flex-col ">
                    <span className=" text-xs font-mono">Subscription: </span>
                    <span className=" bg-slate-200  h-3 rounded-lg w-full  flex"><span className=" bg-green-600 w-[90%] rounded-lg "></span></span>
                </p>
                {/* <p className=" w-full flex flex-col"><span className=" text-xs font-mono">Transportation: </span><span className=" bg-slate-200 flex-1 h-4 rounded-lg  flex"><span className=" bg-red-600 w-[70%] rounded-lg "></span></span></p> */}
            </div>
        </div>
    )
}

export default Stats
