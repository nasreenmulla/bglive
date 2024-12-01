// import React from 'react';

// function MetricCard({ title, value, subValues }) {
//   return (
//     <div className="bg-white p-4 shadow rounded-lg">
//       <h2 className="text-lg font-bold">{title}</h2>
//       <div className="text-4xl font-semibold text-blue-500">{value}</div>
//       <div className="flex justify-between mt-4">
//         {subValues.map((sub, index) => (
//           <div key={index} className="text-center">
//             <p className="text-sm text-gray-500">{sub.label}</p>
//             <p className="text-gray-800 font-semibold">{sub.value}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MetricCard;
import React from 'react';

// Utility function to calculate the stroke dashoffset for the circle progress
const calculateOffset = (value, maxValue) => {
  const percentage = (value / maxValue) * 100;
  return (440 - (440 * percentage) / 100); // 440 is the circumference of the circle
};

function MetricCard({ title, value, subValues }) {
  return (
    <div className="bg-white p-4 shadow-lg rounded-2xl flex flex-col items-center">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      
      {/* Circle Progress */}
      <div className="relative flex justify-center items-center w-24 h-24 mb-4">
        {/* Background circle */}
        <svg
          className="absolute"
          width="100%"
          height="100%"
          viewBox="0 0 120 120"
        >
          <circle
            cx="60"
            cy="60"
            r="55"
            stroke="#e5e7eb" // light gray for background
            strokeWidth="10"
            fill="none"
          />
        </svg>
        {/* Foreground progress circle */}
        <svg
          className="absolute transform rotate-[-90deg]"
          width="100%"
          height="100%"
          viewBox="0 0 120 120"
        >
          <circle
            cx="60"
            cy="60"
            r="55"
            stroke="#3b82f6" // blue color for progress
            strokeWidth="10"
            fill="none"
            strokeDasharray="440"
            strokeDashoffset={calculateOffset(value, 10000)} // Example: max value set to 10,000
            style={{ transition: 'stroke-dashoffset 1s ease' }}
          />
        </svg>
        {/* Value inside circle */}
        <div className="absolute text-xl font-semibold text-gray-800">{value}</div>
      </div>

      {/* Subvalues */}
      {subValues && subValues.length > 0 && (
        <div className="text-sm space-y-2">
          {subValues.map((sub, index) => (
            <div key={index} className="flex justify-between">
              <span className="text-gray-600">{sub.label}</span>
              <span className="text-gray-800">{sub.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MetricCard;

