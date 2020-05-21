import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/f186f02f-bcd6-4f59-9cb4-4879ef7c1082">Go To Profile</Link><br />
      <Link to="/dashboard/main">Go To Main</Link>
    </div>
  )
}

// const Dashboard = () => {
//   return (
//     <div>
//       <Head title="Hello" />
//       <div className="flex items-center justify-center h-screen">
//         <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
//           This is dashboard
//         </div>
//       </div>
//     </div>
//   )
// }

Dashboard.propTypes = {}

export default Dashboard