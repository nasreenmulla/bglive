// import React from 'react';
// import { FaHome, FaUserFriends, FaChartLine, FaCog, FaStar } from 'react-icons/fa';

// function Sidebar() {
//   const navItems = [
   
//     { name: 'My Profile', icon: <FaUserFriends /> },
//     { name: 'Company Managment', icon: <FaHome /> },
//     { name: 'Web Presence', icon: <FaChartLine /> },
//     { name: 'Reputation', icon: <FaStar /> },
//     { name: 'Settings', icon: <FaCog /> },
//   ];

//   return (
//     <div className="w-64 bg-white shadow-lg p-4">
//       <div className="text-center text-xl font-bold text-green-500 mb-8">Camera Management</div>
//       <ul>
//         {navItems.map((item, index) => (
//           <li
//             key={index}
//             className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
//           >
//             <div className="text-xl text-gray-600">{item.icon}</div>
//             <span className="text-gray-800">{item.name}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;
// import React from 'react';
// import { 
//   FaHome, 
//   FaUserFriends, 
//   FaChartLine, 
//   FaCog, 
//   FaStar, 
//   FaVideo, 
//   FaImage, 
//   FaProjectDiagram, 
//   FaBoxOpen,
//   FaCamera
// } from 'react-icons/fa';
// import { BsCameraVideo } from 'react-icons/bs';
// function Sidebar() {
//   const navItems = [
//     {  icon: <FaUserFriends /> },
//     {icon: <FaHome /> },
//     { icon: <FaProjectDiagram /> },
//     { icon: <FaUserFriends /> }, // Reusing FaUserFriends, you can change if needed
//     {icon: <FaBoxOpen /> },
//     { icon: <FaCamera /> },
//     {  icon: <FaImage /> },
//     {icon: <FaImage /> },
//     { icon: <FaVideo /> },
//     {icon: <FaChartLine /> },
//     { icon: <FaStar /> },
//     { icon: <FaCog /> },
//   ];

//   return (
//     <div className="w-13 bg-white shadow-lg p-4">
//      <div className="flex justify-center items-center text-xl font-bold text-blue-500">
//        CM
//       </div>
//       <ul>
//         {navItems.map((item, index) => (
//           <li
//             key={index}
//             className="flex items-center gap-4 p-3 hover:bg-gray-300 rounded-lg cursor-pointer"
//           >
//             <div className="text-xl text-gray-600">{item.icon}</div>
//             <span className="text-gray-800">{item.name}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Correct import for React Router v6
import { FaHome, FaUserFriends, FaProjectDiagram, FaBoxOpen, FaCamera, FaImage, FaVideo } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const navItems = [
    { name: 'My Profile', icon: <FaUserFriends />, path: '/' },
    { name: 'Company Management', icon: <FaHome />, path: '/' },
    { name: 'Project Management', icon: <FaProjectDiagram />, path: '/' },
    { name: 'User Management', icon: <FaUserFriends />, path: '/' },
    { name: 'Package Management', icon: <FaBoxOpen />, path: '/' },
    { name: 'Camera Management', icon: <FaCamera />, path: '/camera-management' }, // Updated path
    { name: 'Image Time Lapse Management', icon: <FaImage />, path: '/' },
    { name: 'Image Archive', icon: <FaImage />, path: '/' },
    { name: 'Videos Archive', icon: <FaVideo /> , path: '/'},
  ];

  return (
    <div
      className={`${
        isExpanded ? 'w-64' : 'w-16'
      } bg-white shadow-lg p-4 transition-all duration-300`}
    >
      {/* Header with toggle button */}
      <div className="flex justify-between items-center mb-6">
        <div
          className={`text-xl font-bold text-blue-500 transition-opacity duration-300 ${
            isExpanded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          CM
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-600 hover:text-gray-800"
        >
          <BsThreeDotsVertical />
        </button>
      </div>

      {/* Navigation Items */}
      <ul>
        {navItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 p-3 hover:bg-gray-300 rounded-lg cursor-pointer"
          >
            {/* Use Link for navigation to the Camera Management page */}
            {item.path ? (
              <Link to={item.path} className="flex items-center gap-4">
                <div className="text-xl text-gray-600">{item.icon}</div>
                {isExpanded && <span className="text-gray-800">{item.name}</span>}
              </Link>
            ) : (
              <div className="flex items-center gap-4">
                <div className="text-xl text-gray-600">{item.icon}</div>
                {isExpanded && <span className="text-gray-800">{item.name}</span>}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   FaHome, 
//   FaUserFriends, 
//   FaChartLine, 
//   FaCog, 
//   FaStar, 
//   FaVideo, 
//   FaImage, 
//   FaProjectDiagram, 
//   FaBoxOpen,
//   FaCamera
// } from 'react-icons/fa';
// import { BsThreeDotsVertical } from 'react-icons/bs';

// function Sidebar() {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const navItems = [
//     { name: 'My Profile', icon: <FaUserFriends /> },
//     { name: 'Company Management', icon: <FaHome /> },
//     { name: 'Project Management', icon: <FaProjectDiagram /> },
//     { name: 'User Management', icon: <FaUserFriends /> },
//     { name: 'Package Management', icon: <FaBoxOpen /> },
//     { name: 'Camera Management', icon: <FaCamera />, path: '/camera-management' },
//     { name: 'Image Time Lapse Management', icon: <FaImage /> },
//     { name: 'Image Archive', icon: <FaImage /> },
//     { name: 'Videos Archive', icon: <FaVideo /> },
    
//   ];

//   return (
//     <div
//       className={`${
//         isExpanded ? 'w-64' : 'w-16'
//       } bg-white shadow-lg p-4 transition-all duration-300`}
//     >
//       {/* Header with toggle button */}
//       <div className="flex justify-between items-center mb-6">
//         <div
//           className={`text-xl font-bold text-blue-500 transition-opacity duration-300 ${
//             isExpanded ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           CM
//         </div>
//         <button
//           onClick={() => setIsExpanded(!isExpanded)}
//           className="text-gray-600 hover:text-gray-800"
//         >
//           <BsThreeDotsVertical />
//         </button>
//       </div>

//       {/* Navigation Items */}
//       <ul>
//         {navItems.map((item, index) => (
//           <li
//             key={index}
//             className="flex items-center gap-4 p-3 hover:bg-gray-300 rounded-lg cursor-pointer"
//           >
//             <div className="text-xl text-gray-600">{item.icon}</div>
//             {isExpanded && <span className="text-gray-800">{item.name}</span>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;
