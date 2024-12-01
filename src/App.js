// import React from 'react';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Navbar';
// import Dashboard from './components/Dashboard';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CameraManagement from './components/CameraManagement';  

// function App() {
//   return (
//   <Router>
//       <div className="flex min-h-screen bg-purple-200">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <Navbar />
//         {/* Dashboard Content */}
//         <Dashboard />
//         <Routes>
//             {/* Route for Camera Management */}
//             <Route path="/camera-management" element={<CameraManagement />} />
//             {/* Add other routes as needed */}
//           </Routes>
//       </div>
//     </div>
//   </Router>
//   );
// }

// export default App;
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { Routes, Route, useLocation } from 'react-router-dom';
import CameraManagement from './components/CameraManagement';

function App() {
  // Get the current location
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-purple-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Conditional Rendering: Only show Dashboard if path is not '/camera-management' */}
        {location.pathname !== '/camera-management' && <Dashboard />}

        {/* Routes */}
        <Routes>
          {/* Route for Camera Management */}
          <Route path="/camera-management" element={<CameraManagement />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
