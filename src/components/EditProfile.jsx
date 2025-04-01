import { FaCamera } from "react-icons/fa";
import pfp from "/profilepic.png";
import { useState } from "react";
import { getItem, setItem } from './../hooks/useLocalStorage';
import PopUp from "./PopUp";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaX } from "react-icons/fa6";


export default function EditProfile() {
const initialUsername = getItem("username")
  const [username, setUsername] = useState(JSON.parse(localStorage.getItem("username")))
  const [profileUrl, setProfileUrl] = useState(localStorage.getItem("profile-picture") ? getItem("profile-picture"): pfp);
  const [error, setError] = useState("")
  const [saveNewUsername, setSaveNewUsername] = useState(false)
const save = () =>{
  if (!username ) {

    setError("Username cannot be blank")
    return;
}
if((!isNaN(username)) && (username.length > 0)  ){
    setError("Username must be text")
    return;
}

setItem("username", username)
setSaveNewUsername(true)

}

const disableButton = initialUsername.trim() === username.trim()
const handleProfileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setItem("profile-picture", reader.result); // Save Base64 image
      setProfileUrl(reader.result); // Set state
    };
  }
};
const navigate = useNavigate()
  return (
    <div className="  min-h-screen dark:bg-gray-800  transition-all dark:text-gray-300 bg-gray-100 text-gray-900 ">

        <div className="flex flex-col ">
         <div className=" lg:pl-[200px] sm:pl-[100px] flex items-center gap-7 mb-10 mt-5 mx-8">
                <FaArrowLeft 
                                        onClick={()=> navigate(-1)} 
                                        className=" cursor-pointer dark:text-gray-300"
                                        size={24}
                                    />
                  <h2 className="text-xl font-semibold dark:text-gray-200">Edit Profile</h2>
                  
                </div>
        <div className=" flex flex-col justify-center items-center gap-3">
        <img
          src={profileUrl}
          className=" w-40 h-40  object-cover rounded-full border-white relative
          "
          />
        <button className=" absolute ml-[1rem]  mt-[rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
          <label htmlFor="profile-upload" className=" cursor-pointer">
            <FaCamera size={24}  className=" text-green-400" />
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            className=" hidden"
            onChange={handleProfileChange}
            />
        </button>

        <div className={`flex flex-col mt-10`}>
          <div className=" flex">

            <h1 className=" p-1 mx-2 ">Username</h1>
            <div className=" flex flex-col">

            <input type="text"  value={username} className=" p-1 outline-none bg-transparent  dark:border-gray-700 border shadow-md shadow-gray-900 text-sm " onChange={(e)=>{setUsername(e.target.value)}} />
            { error && <h1 className=" p-1 text-sm text-red-800">{error}</h1>}
            </div>
          </div>
            
        <button disabled={disableButton} className="  bg-green-600 p-1  w-[100px] mx-auto text-sm disabled:bg-gray-600 mt-14" onClick={save}>Save</button>
            </div>    
        </div>
        
                      {saveNewUsername && <PopUp setSaveNewUsername={setSaveNewUsername}/>}
                      </div>
      </div>
  )
}
