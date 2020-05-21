import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Main</div>
      <Link to="/dashboard/profile/f186f02f-bcd6-4f59-9cb4-4879ef7c1082">Go To Profile</Link><br />
      <Link to="/dashboard">Go To Root</Link>
    </div>
  )
}

// const Main = () => {
//   return (
//     <div>
//       <Head title="Hello" />
//       <div className="flex items-center justify-center h-screen">
//         <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
//           This is main
//         </div>
//       </div>
//     </div>
//   )
// }

Main.propTypes = {}

export default Main