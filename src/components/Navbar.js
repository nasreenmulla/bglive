// import React from 'react';

// function Navbar() {
//   return (
//     <div className="w-full flex items-center justify-between bg-white shadow p-4">
//       <div className="flex items-center gap-6 text-gray-700">
//         <button className="font-semibold text-blue-500">Welcome Superadmin!</button>
//         {/* <button>Patient Leads</button>
//         <button>Web Presence</button>
//         <button>Reputation</button> */}
//       </div>
//       <div className="flex items-center gap-4">
//         <span className="font-medium text-gray-800">Superadmin</span>
//         <div className="w-10 h-10 rounded-full bg-gray-300"></div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React from 'react';
import { FaUser } from 'react-icons/fa'; // Import FaUser icon from react-icons

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between bg-white shadow-lg p-4 m-2">
      <div className="flex items-center gap-6 text-gray-700">
        <button className="font-semibold text-blue-500">Welcome Superadmin!</button>
        {/* <button>Patient Leads</button>
        <button>Web Presence</button>
        <button>Reputation</button> */}
      </div>
      <div className="flex items-center gap-4">
        <span className="font-medium text-gray-800">Superadmin</span>
        <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
          <FaUser className="text-gray-700 text-2xl" /> {/* User Icon */}

          {/* Green Dot for Activeness below */}
          <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
        </div>

       
      </div>
    </div>
  );
}

export default Navbar;
