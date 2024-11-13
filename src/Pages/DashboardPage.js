import React from 'react'
import DashBoard from '../components/dashboard/DashBoard'
import SideBar from '../components/SideBar/SideBar'
import { Routes,Route } from 'react-router-dom'
import Manage from '../components/dashboard/Manage.mjs'


export default function DashboardPage() {
  return (
    <div className='flex '>
        <SideBar/>
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<DashBoard />} /> 
            <Route path="/manage" element={<Manage />} />   
            <Route path="/some" element={<Manage />} />             
          </Routes>
        </div>
        

    </div>
  )
}
