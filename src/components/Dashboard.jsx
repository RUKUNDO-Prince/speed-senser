import React from 'react'
import { location } from '../assets'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <p><img src={location} alt="location" /><span>Current Location :</span>Mukamira, Nyabihu</p>
    </div>
  )
}

export default Dashboard
