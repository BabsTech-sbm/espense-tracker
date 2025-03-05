/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"

function Button({ btnStyle, btnCaption, btnCaptionStyle, link }) {
    return (
        <div className={btnCaptionStyle}>

            <Link to={link} className={btnStyle} >
                <FaPlus className=" text-white" size={24} />
            </Link>
            <h1 className={`${btnCaptionStyle}  text-center text-sm mt-2`}>{btnCaption}</h1>

        </div>
    )
}

export default Button
