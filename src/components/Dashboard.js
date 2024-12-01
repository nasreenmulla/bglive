// import React from 'react';
// import RatingsCard from './RatingsCard';
// import PublicReviewsCard from './PublicReviewsCard';
// import LatestReviews from './LatestReviews';
// import MetricCard from './MetricCard';

// function Dashboard() {
//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       <RatingsCard />
//       <PublicReviewsCard />
//       <MetricCard
//         title="Online Requests"
//         value="9,245"
//         subValues={[
//           { label: 'New', value: '5.9k' },
//           { label: 'Returning', value: '3.1k' },
//         ]}
//       />
//       <MetricCard
//         title="Phone Leads"
//         value="3,271"
//         subValues={[
//           { label: 'New', value: '2.6k' },
//           { label: 'Returning', value: '671' },
//         ]}
//       />
//       <LatestReviews />
//     </div>
//   );
// }

// export default Dashboard;

import React from 'react';
import RatingsCard from './RatingsCard';
import PublicReviewsCard from './PublicReviewsCard';
import LatestReviews from './LatestReviews';
import MetricCard from './MetricCard';

function Dashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <RatingsCard />
      <PublicReviewsCard />
      <MetricCard
        title="Users"
        value="5000"
        subValues={[
          { label: 'New', value: '200' },
          { label: 'Old', value: '412' },
        ]}
      />
      <MetricCard
        title="Cameras"
        value="1500"
        subValues={[
          { label: 'New', value: '2.6k' },
          { label: 'Returning', value: '671' },
        ]}
      />
        <MetricCard
        title="Packages"
        value="1200"
        subValues={[
          { label: 'New', value: '2.6k' },
          { label: 'Returning', value: '671' },
        ]}
      />
      <LatestReviews />
    </div>
  );
}

export default Dashboard;

