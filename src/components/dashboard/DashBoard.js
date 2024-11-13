import React from "react";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate()
  const goToSomeRoute = ()=> {
    navigate("some")
  }
  return (
    <div className="flex flex-col justify-center items-center max-w-full p-4">
        <button onClick={goToSomeRoute}>
          some
          
        </button>

   </div>
  )
}

export default DashBoard;
