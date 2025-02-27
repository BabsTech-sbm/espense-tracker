/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa"

function Button({ btnStyle, btnCaption, btnCaptionStyle }) {
    return (
        <div className={btnCaptionStyle}>

            <button className={btnStyle} >
                <FaPlus className=" text-white" size={24} />
            </button>
            <h1 className={`${btnCaptionStyle}  text-center text-sm mt-2`}>{btnCaption}</h1>
        </div>
    )
}

export default Button
