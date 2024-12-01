// import React from 'react';

// function LatestReviews() {
//   const reviews = [
//     {
//       name: 'Deena Timmons',
//       time: '5 hours ago',
//       platform: 'Yelp',
//       rating: 5,
//       comment: 'Dr. Coleman is outstanding and the office is immaculate!',
//       avatar: 'https://via.placeholder.com/40',
//     },
//     {
//       name: 'Sheila Lee',
//       time: '2 days ago',
//       platform: 'PatientPop',
//       rating: 4,
//       comment: 'Great dermatologist with excellent care.',
//       avatar: 'https://via.placeholder.com/40',
//     },
//     {
//       name: 'Sarah Doyle',
//       time: '5 days ago',
//       platform: 'Facebook',
//       rating: 4,
//       comment: 'Caring and thorough in every way.',
//       avatar: 'https://via.placeholder.com/40',
//     },
//   ];

//   return (
//     <div className="bg-white p-4 shadow rounded-lg">
//       <h2 className="text-lg font-bold mb-4">Latest Reviews</h2>
//       <div className="space-y-4">
//         {reviews.map((review, index) => (
//           <div key={index} className="flex items-start gap-4">
//             <img
//               src={review.avatar}
//               alt={`${review.name}'s avatar`}
//               className="w-10 h-10 rounded-full"
//             />
//             <div>
//               <div className="flex items-center justify-between">
//                 <h3 className="font-semibold">{review.name}</h3>
//                 <span className="text-sm text-gray-500">{review.time}</span>
//               </div>
//               <p className="text-sm text-gray-500">{`from ${review.platform}`}</p>
//               <p className="mt-1 text-gray-700">{review.comment}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default LatestReviews;
import React from 'react';
import { FaUser } from 'react-icons/fa'; // Import FaUser icon for user avatar

function LatestReviews() {
  const reviews = [
    {
      name: 'John Doe',
      time: '1 hour ago',
      platform: 'Camera Management',
      rating: 5,
      comment: 'The camera app works flawlessly! Easy to set up and intuitive controls.',
    },
    {
      name: 'Alice Smith',
      time: '3 days ago',
      platform: 'Camera Control',
      rating: 4,
      comment: 'Great app for monitoring cameras, but I wish there were more customization options.',
    },
    {
      name: 'Mike Johnson',
      time: '1 week ago',
      platform: 'Surveillance System',
      rating: 5,
      comment: 'Excellent performance and stability. Perfect for my security setup!',
    },
  ];

  return (
    <div className="bg-white p-4 shadow rounded-2xl">
      <h2 className="text-lg font-bold mb-4">Latest Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* User Icon in place of avatar */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-200">
              <FaUser className="text-gray-700 text-3xl" /> {/* User icon */}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{review.name}</h3>
                <span className="text-sm text-gray-500">{review.time}</span>
              </div>
              <p className="text-sm text-gray-500">{`from ${review.platform}`}</p>
              <p className="mt-1 text-gray-700">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestReviews;
