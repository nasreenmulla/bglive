
// import React, { useState } from 'react';
// import { FaMapMarkerAlt, FaEllipsisV, FaTh, FaBars } from 'react-icons/fa'; // Grid and list icons
// import Image1 from './images/image1.jpg';
// import Image2 from './images/image2.jpg';
// import Image3 from './images/image3.jpg';
// import Image4 from './images/image4.jpg';
// import Image5 from './images/image5.jpg';
// import Image6 from './images/image6.jpg';
// import Image7 from './images/image7.jpg';
// import Image8 from './images/image8.jpg';
// import Image9 from './images/image9.jpg';
// import Image10 from './images/image10.jpg';
// import Image11 from './images/image11.jpg';
// import Image12 from './images/image12.jpg';

// function CameraManagement() {
//   const [isVertical, setIsVertical] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   // Array of images and locations
//   const images = [
//     { src: Image1, location: 'Location 1' },
//     { src: Image2, location: 'Location 2' },
//     { src: Image3, location: 'Location 3' },
//     { src: Image4, location: 'Location 4' },
//     { src: Image5, location: 'Location 5' },
//     { src: Image6, location: 'Location 6' },
//     { src: Image7, location: 'Location 7' },
//     { src: Image8, location: 'Location 8' },
//     { src: Image9, location: 'Location 9' },
//     { src: Image10, location: 'Location 10' },
//     { src: Image11, location: 'Location 11' },
//     { src: Image12, location: 'Location 12' },
//   ];

//   const totalPages = Math.ceil(images.length / itemsPerPage);

//   // Get the images for the current page
//   const currentImages = images.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const toggleView = () => {
//     setIsVertical((prev) => !prev);
//   };

//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   const goToPreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   // Inline styles
//   const containerStyle = {
//     padding: '1.5rem',
//   };

//   const titleStyle = {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     color: '#3B82F6',
//     marginBottom: '1rem',
//   };

//   const buttonStyle = {
//     padding: '0.5rem 1rem',
//     backgroundColor: '#3B82F6',
//     color: 'white',
//     borderRadius: '0.375rem',
//     cursor: 'pointer',
//     marginRight: '0.5rem',
//     transition: 'background-color 0.3s ease',
//   };

//   const gridStyle = {
//     display: 'grid',
//     gridTemplateColumns: isVertical ? '1fr' : 'repeat(3, 1fr)',
//     gap: '1.5rem',
//   };

//   const imageWrapperStyle = {
//     position: 'relative',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     borderRadius: '0.375rem',
//     overflow: 'hidden',
//   };

//   const imageStyle = {
//     width: '100%',
//     height: '20rem',
//     objectFit: 'cover',
//   };

//   const locationStyle = {
//     position: 'absolute',
//     top: '0.5rem',
//     left: '0.5rem',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     padding: '0.25rem 0.5rem',
//     borderRadius: '0.375rem',
//     fontSize: '0.875rem',
//     fontWeight: 'bold',
//   };

//   const iconWrapperStyle = {
//     position: 'absolute',
//     top: '0.5rem',
//     right: '0.5rem',
//     backgroundColor: 'white',
//     padding: '0.5rem',
//     borderRadius: '50%',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   };

//   const paginationStyle = {
//     marginTop: '1.5rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={titleStyle}>Camera Management</h1>

//       {/* Buttons */}
//       <div style={{ marginBottom: '1.5rem' }}>
//         <button
//           onClick={toggleView}
//           style={buttonStyle}
//         >
//           {isVertical ? <FaTh /> : <FaBars />}
//         </button>
//         <button style={buttonStyle}>Add Camera +</button>
//       </div>

//       {/* Images */}
//       <div style={gridStyle}>
//         {currentImages.map((image, index) => (
//           <div key={index} style={imageWrapperStyle}>
//             <img
//               src={image.src}
//               alt={`Camera ${image.location}`}
//               style={imageStyle}
//             />
//             {/* Location Name */}
//             <div style={locationStyle}>{image.location}</div>
//             {/* Location Icon */}
//             <div style={iconWrapperStyle}>
//               <FaMapMarkerAlt className="text-red-500" />
//             </div>
//             {/* Three Dots Icon */}
//             <div style={{ ...iconWrapperStyle, right: '2.5rem' }}>
//               <FaEllipsisV className="text-gray-600" />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div style={paginationStyle}>
//         <button
//           onClick={goToPreviousPage}
//           style={buttonStyle}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <button
//           onClick={goToNextPage}
//           style={buttonStyle}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CameraManagement;
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEllipsisV, FaTh, FaBars, FaPlus } from 'react-icons/fa';
import Image1 from './images/image1.jpg';
import Image2 from './images/image2.jpg';
import Image3 from './images/image3.jpg';
import Image4 from './images/image4.jpg';
import Image5 from './images/image5.jpg';
import Image6 from './images/image6.jpg';
import Image7 from './images/image7.jpg';
import Image8 from './images/image8.jpg';
import Image9 from './images/image9.jpg';
import Image10 from './images/image10.jpg';
import Image11 from './images/image11.jpg';
import Image12 from './images/image12.jpg';

function CameraManagement() {
  const [isVertical, setIsVertical] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const images = [
    { src: Image1, location: 'Location 1' },
    { src: Image2, location: 'Location 2' },
    { src: Image3, location: 'Location 3' },
    { src: Image4, location: 'Location 4' },
    { src: Image5, location: 'Location 5' },
    { src: Image6, location: 'Location 6' },
    { src: Image7, location: 'Location 7' },
    { src: Image8, location: 'Location 8' },
    { src: Image9, location: 'Location 9' },
    { src: Image10, location: 'Location 10' },
    { src: Image11, location: 'Location 11' },
    { src: Image12, location: 'Location 12' },
  ];

  const totalPages = Math.ceil(images.length / itemsPerPage);

  const currentImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleView = () => setIsVertical((prev) => !prev);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const containerStyle = {
    padding: '1.5rem',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#3B82F6',
    marginBottom: '1rem',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    backgroundColor: '#3B82F6',
    color: 'white',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    marginRight: '0.5rem',
    transition: 'background-color 0.3s ease',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isVertical ? '1fr' : 'repeat(3, 1fr)',
    gap: '1.5rem',
  };

  const imageWrapperStyle = {
    position: 'relative',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '1rem', // Increased border radius for more curved edges
    overflow: 'hidden',
  };
  

  const imageStyle = {
    width: '100%',
    height: '20rem',
    objectFit: 'cover',
  };

  const locationStyle = {
    position: 'absolute',
    top: '0.5rem',
    left: '0.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.375rem',
    fontSize: '0.875rem',
    fontWeight: 'bold',
  };

  const iconWrapperStyle = {
    position: 'absolute',
    top: '0.5rem',
    right: '0.5rem',
    backgroundColor: 'white',
    padding: '0.5rem',
    borderRadius: '50%',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const paginationStyle = {
    marginTop: '1.5rem',
    textAlign: 'center',
  };

  const navButtonStyle = {
    ...buttonStyle,
    margin: '0 1rem',
    display: 'inline-block',
  };

  return (
    <div style={containerStyle}>
     

      {/* Buttons */}
      <div style={{ marginBottom: '1.5rem' }}>
        <button onClick={toggleView} style={buttonStyle}>
          {isVertical ? <FaTh /> : <FaBars />}
        </button>
       
      </div>

      {/* Images */}
      <div style={gridStyle}>
        {currentImages.map((image, index) => (
          <div key={index} style={imageWrapperStyle}>
            <img
              src={image.src}
              alt={`Camera ${image.location}`}
              style={imageStyle}
            />
            <div style={locationStyle}>{image.location}</div>
            <div style={iconWrapperStyle}>
              <FaMapMarkerAlt className="text-red-500" />
            </div>
            <div style={{ ...iconWrapperStyle, right: '2.5rem' }}>
              <FaEllipsisV className="text-gray-600" />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={paginationStyle}>
        {currentPage > 1 && (
          <button onClick={goToPreviousPage} style={navButtonStyle}>
            &lt;&lt;1
          </button>
        )}
        {currentPage < totalPages && (
          <button onClick={goToNextPage} style={navButtonStyle}>
            2&gt;&gt;
          </button>
        )}
      </div>
    </div>
  );
}

export default CameraManagement;

// import React, { useState } from 'react';
// import { FaMapMarkerAlt, FaEllipsisV, FaTh, FaBars, FaPlus } from 'react-icons/fa'; // Added FaPlus for add camera icon
// import Image1 from './images/image1.jpg';
// import Image2 from './images/image2.jpg';
// import Image3 from './images/image3.jpg';
// import Image4 from './images/image4.jpg';
// import Image5 from './images/image5.jpg';
// import Image6 from './images/image6.jpg';
// import Image7 from './images/image7.jpg';
// import Image8 from './images/image8.jpg';
// import Image9 from './images/image9.jpg';
// import Image10 from './images/image10.jpg';
// import Image11 from './images/image11.jpg';
// import Image12 from './images/image12.jpg';

// function CameraManagement() {
//   const [isVertical, setIsVertical] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   // Array of images and locations
//   const images = [
//     { src: Image1, location: 'Location 1' },
//     { src: Image2, location: 'Location 2' },
//     { src: Image3, location: 'Location 3' },
//     { src: Image4, location: 'Location 4' },
//     { src: Image5, location: 'Location 5' },
//     { src: Image6, location: 'Location 6' },
//     { src: Image7, location: 'Location 7' },
//     { src: Image8, location: 'Location 8' },
//     { src: Image9, location: 'Location 9' },
//     { src: Image10, location: 'Location 10' },
//     { src: Image11, location: 'Location 11' },
//     { src: Image12, location: 'Location 12' },
//   ];

//   const totalPages = Math.ceil(images.length / itemsPerPage);

//   // Get the images for the current page
//   const currentImages = images.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const toggleView = () => {
//     setIsVertical((prev) => !prev);
//   };

//   const goToNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };

//   const goToPreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     }
//   };

//   // Inline styles
//   const containerStyle = {
//     padding: '1.5rem',
//   };

//   const titleStyle = {
//     fontSize: '2rem',
//     fontWeight: 'bold',
//     color: '#3B82F6',
//     marginBottom: '1rem',
//   };

//   const buttonStyle = {
//     padding: '0.5rem 1rem',
//     backgroundColor: '#3B82F6',
//     color: 'white',
//     borderRadius: '0.375rem',
//     cursor: 'pointer',
//     marginRight: '0.5rem',
//     transition: 'background-color 0.3s ease',
//   };

//   const gridStyle = {
//     display: 'grid',
//     gridTemplateColumns: isVertical ? '1fr' : 'repeat(3, 1fr)',
//     gap: '1.5rem',
//   };

//   const imageWrapperStyle = {
//     position: 'relative',
//     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//     borderRadius: '0.375rem',
//     overflow: 'hidden',
//   };

//   const imageStyle = {
//     width: '100%',
//     height: '20rem',
//     objectFit: 'cover',
//   };

//   const locationStyle = {
//     position: 'absolute',
//     top: '0.5rem',
//     left: '0.5rem',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     padding: '0.25rem 0.5rem',
//     borderRadius: '0.375rem',
//     fontSize: '0.875rem',
//     fontWeight: 'bold',
//   };

//   const iconWrapperStyle = {
//     position: 'absolute',
//     top: '0.5rem',
//     right: '0.5rem',
//     backgroundColor: 'white',
//     padding: '0.5rem',
//     borderRadius: '50%',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   };

//   const paginationStyle = {
//     marginTop: '1.5rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//   };

//   return (
//     <div style={containerStyle}>
//       <h1 style={titleStyle}>Camera Management</h1>

//       {/* Buttons */}
//       <div style={{ marginBottom: '1.5rem' }}>
//         <button
//           onClick={toggleView}
//           style={buttonStyle}
//         >
//           {isVertical ? <FaTh /> : <FaBars />}
//         </button>
//         <button style={buttonStyle}>
//           <FaPlus /> {/* Add camera button with plus sign */}
//         </button>
//       </div>

//       {/* Images */}
//       <div style={gridStyle}>
//         {currentImages.map((image, index) => (
//           <div key={index} style={imageWrapperStyle}>
//             <img
//               src={image.src}
//               alt={`Camera ${image.location}`}
//               style={imageStyle}
//             />
//             {/* Location Name */}
//             <div style={locationStyle}>{image.location}</div>
//             {/* Location Icon */}
//             <div style={iconWrapperStyle}>
//               <FaMapMarkerAlt className="text-red-500" />
//             </div>
//             {/* Three Dots Icon */}
//             <div style={{ ...iconWrapperStyle, right: '2.5rem' }}>
//               <FaEllipsisV className="text-gray-600" />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div style={paginationStyle}>
//         {currentPage > 1 && (
//           <button
//             onClick={goToPreviousPage}
//             style={buttonStyle}
//           >
//             Previous
//           </button>
//         )}
//         {currentPage < totalPages && (
//           <button
//             onClick={goToNextPage}
//             style={buttonStyle}
//           >
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CameraManagement;

