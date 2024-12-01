// import React from 'react';

// function PublicReviewsCard() {
//   return (
//     <div className="bg-white p-4 shadow rounded-lg">
//       <h2 className="text-lg font-bold">Public Reviews</h2>
//       <div className="flex justify-between items-end mt-4">
//         <div>
//           <p className="text-4xl font-semibold text-gray-800">3,431</p>
//           <p className="text-sm text-green-500">+1,725 since PatientPop</p>
//         </div>
//         <div>
//           <p className="text-sm text-gray-500 text-right">1 year</p>
//           <div className="bg-gray-100 h-4 w-20 rounded-lg"></div>
//         </div>
//       </div>
//       {/* Bar Chart Placeholder */}
//       <div className="mt-6 bg-gray-100 h-24 rounded-lg"></div>
//     </div>
//   );
// }

// export default PublicReviewsCard;
import React from 'react';

function PublicReviewsCard() {
  return (
    <div className="bg-white p-4 shadow-lg rounded-2xl">
      <h2 className="text-lg font-bold">Companies</h2>
      <div className="flex justify-between items-end mt-4">
        <div>
          <p className="text-4xl font-semibold text-gray-800">3,431</p>
          <p className="text-sm text-green-500">+1,725 </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 text-right">1 year</p>
          <div className="bg-gray-100 h-4 w-20 rounded-lg"></div>
        </div>
      </div>
      
      {/* Bar Chart Placeholder */}
      <div className="mt-6 bg-gray-100 h-40 rounded-lg relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 200 100"
        >
          {/* Bars for the reviews data */}
          <rect x="20" y="30" width="20" height="70" className="fill-blue-500" />
          <rect x="50" y="50" width="20" height="50" className="fill-blue-500" />
          <rect x="80" y="40" width="20" height="60" className="fill-blue-500" />
          <rect x="110" y="10" width="20" height="90" className="fill-blue-500" />
          <rect x="140" y="20" width="20" height="80" className="fill-blue-500" />
          <rect x="170" y="35" width="20" height="65" className="fill-blue-500" />

          {/* Month labels on X-Axis */}
          <text x="20" y="95" className="text-xs text-gray-600">Jan</text>
          <text x="50" y="95" className="text-xs text-gray-600">Feb</text>
          <text x="80" y="95" className="text-xs text-gray-600">Mar</text>
          <text x="110" y="95" className="text-xs text-gray-600">Apr</text>
          <text x="140" y="95" className="text-xs text-gray-600">May</text>
          <text x="170" y="95" className="text-xs text-gray-600">Jun</text>

         
        </svg>
      </div>
    </div>
  );
}

export default PublicReviewsCard;

