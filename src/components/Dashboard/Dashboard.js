import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{ display:"flex"}}>
       <Sidebar/> 
       <div>
        <Outlet/>
       </div>
    </div>
  )
}

export default Dashboard