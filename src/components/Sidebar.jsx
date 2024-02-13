import React from 'react'
import { logo, dashboard, geofence, live, report, search, statistics, right, avatar } from '../assets' 

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='side-links-container'>
        <img src={logo} alt="logo" />
        <ul>
          <li><img src={dashboard} alt="icon" /><span>Dashboard</span></li>
          <li><img src={search} alt="icon" /><span>Search</span></li>
          <li><img src={report} alt="icon" /><span>Report</span></li>
          <li><img src={live} alt="icon" /><span>Live</span></li>
          <li><img src={statistics} alt="icon" /><span>Statistics</span></li>
          <li><img src={geofence} alt="icon" /><span>Geo-Fence</span></li>
        </ul>
      </div>
      <div className='sidebar-profile'>
        <img src={avatar} className='profile' alt="avatar" />
        <div>
          <h3>Amy Horsefighter</h3>
          <p>ahorsefighter@gmail.com</p>
        </div>
        <img src={right} alt="icon" />
      </div>
    </div>
  )
}

export default Sidebar
