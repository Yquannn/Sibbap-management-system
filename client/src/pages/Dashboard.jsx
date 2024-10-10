import React from "react";
import { FaUsers, FaArrowDown, FaArrowUp, FaUserTie } from 'react-icons/fa'; 

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-green-600 shadow-md rounded-lg p-6 flex items-center">
          <FaUsers className="text-white text-4xl mr-4" /> 
          <div>
            <h2 className="text-xl font-semibold text-white">Total Members</h2>
            <p className="text-4xl font-bold mt-4 text-white">1,200</p>
          </div>
        </div>

        <div className="bg-blue-500 shadow-md rounded-lg p-6 flex items-center">
          <FaArrowDown className="text-white text-4xl mr-4" /> 
          <div>
            <h2 className="text-xl font-semibold text-white">Inflow</h2>
            <p className="text-4xl font-bold mt-4 text-white">25,000</p>
          </div>
        </div>

        <div className="bg-red-500 shadow-md rounded-lg p-6 flex items-center">
          <FaArrowUp className="text-white text-4xl mr-4" /> 
          <div>
            <h2 className="text-xl font-semibold text-white">Outflow</h2>
            <p className="text-4xl font-bold mt-4 text-white">15,000</p>
          </div>
        </div>

        <div className="bg-amber-600 shadow-md rounded-lg p-6 flex items-center">
          <FaUserTie className="text-white text-4xl mr-4" /> 
          <div>
            <h2 className="text-xl font-semibold text-white">Number of Borrowers</h2>
            <p className="text-4xl font-bold mt-4 text-white">350</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
