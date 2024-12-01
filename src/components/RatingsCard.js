// import React from 'react';

// function RatingsCard() {
//   return (
//     <div className="bg-white p-4 shadow rounded-lg">
//       <h2 className="text-lg font-bold">Overall Rating</h2>
//       <div className="text-4xl font-semibold text-blue-500">4.0</div>
//       <p className="text-gray-500 text-sm">+0.5 points from last month</p>
//       {/* Placeholder for line chart */}
//       <div className="mt-4 bg-gray-100 h-24 rounded-lg"></div>
//     </div>
//   );
// }

// export default RatingsCard;
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Importing the required icons

function RatingsCard() {
  return (
    <div className="bg-white p-4 shadow-lg rounded-2xl">
      <h2 className="text-lg font-bold">Projects</h2>
      <div className="flex items-center space-x-2">
        {/* Rating value */}
        <div className="text-4xl font-semibold text-blue-500">15</div>
        
     
        {/* <div className="flex space-x-1">
          <FaStar className="text-yellow-500" /> 
          <FaStar className="text-yellow-500" /> 
          <FaStar className="text-yellow-500" /> 
          <FaStar className="text-yellow-500" /> 
          <FaRegStar className="text-yellow-500" /> 
        </div> */}

        {/* <p className="text-gray-500 text-sm">+0.5 points from last month</p> */}
      </div>

      {/* Dummy Line Chart */}
      <div className="mt-4 bg-gray-100 h-24 rounded-lg relative">
        <svg
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
        >
          {/* Line chart path */}
          <path
            d="M 10 80 Q 30 30, 50 40 T 90 20 T 130 50 T 170 30 T 190 60"
            fill="none"
            stroke="rgb(37,99,235)" // Blue color for the line
            strokeWidth="2"
          />
          
          {/* Horizontal months */}
          <text x="10" y="95" className="text-xs text-gray-600">Jan</text>
          <text x="50" y="95" className="text-xs text-gray-600">Feb</text>
          <text x="90" y="95" className="text-xs text-gray-600">Mar</text>
          <text x="130" y="95" className="text-xs text-gray-600">Apr</text>
          <text x="170" y="95" className="text-xs text-gray-600">May</text>
         

          {/* Vertical Ratings */}
          <text x="5" y="80" className="text-xs text-gray-600">1</text>
          <text x="5" y="60" className="text-xs text-gray-600">2</text>
          <text x="5" y="40" className="text-xs text-gray-600">3</text>
          <text x="5" y="20" className="text-xs text-gray-600">4</text>
          
        </svg>
      </div>
    </div>
  );
}

export default RatingsCard;

