import React from "react";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();

  const goToSomeRoute = () => {
    navigate("some");
  };

  return (
    <div className="flex flex-col max-w-full  w-11/12 p-4">
      <div className="flex flex-col gap-10 min-w-fit ">
        <div className="flex w-full gap-10">
          {/* Total Posted Card */}
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg text-center flex-1 w-96 h-48">
            <h2 className="text-3xl font-bold mb-8">Total Posted</h2>
            <p className="text-7xl font-semibold">0</p>
          </div>

          {/* Revenue Card */}
          <div className="bg-gray-200 p-8 rounded-lg shadow-lg text-center flex-1 w-96 h-48">
            <h2 className="text-3xl font-bold mb-8">Revenue</h2>
            <p className="text-7xl font-semibold">0</p>
          </div>
        </div>

        {/* Second Row: Viewers Card */}
        <div className="bg-gray-200 p-16 rounded-lg shadow-lg text-center w-full h-64">
          <h2 className="text-3xl font-bold mb-8">Viewers</h2>
          <p className="text-7xl font-semibold">0</p>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
