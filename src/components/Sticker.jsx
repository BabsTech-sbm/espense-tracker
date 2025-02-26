
function Sticker({ Transactiontype, Transactioncolor }) {
    return (
        <div className={` w-[40px] flex justify-center ${Transactioncolor} font-sans text-lg items-center h-[40px] border   text-white rounded-full font-bold`}>
            {Transactiontype}
        </div>
    )
}

export default Sticker
