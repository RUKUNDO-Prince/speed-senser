import React, { useState } from 'react';
import { logo, dashboard, geofence, live, report, search, statistics, right, avatar } from '../assets';
import Dashboard from './Dashboard';
import Search from './Search';
import Report from './Report';
import Live from './Live';
import Statistics from './Statistics';
import GeoFence from './GeoFence';

const Sidebar = () => {
  const [selectedLink, setSelectedLink] = useState('dashboard'); // Set default value to 'dashboard'

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className='sidebar'>
      <div className='side-links-container'>
        <img src={logo} alt="logo" />
        <ul>
          <li className={selectedLink === 'dashboard' ? 'selected' : ''} onClick={() => handleLinkClick('dashboard')}>
            <img src={dashboard} alt="icon" /><span>Dashboard</span>
          </li>
          <li className={selectedLink === 'search' ? 'selected' : ''} onClick={() => handleLinkClick('search')}>
            <img src={search} alt="icon" /><span>Search</span>
          </li>
          <li className={selectedLink === 'report' ? 'selected' : ''} onClick={() => handleLinkClick('report')}>
            <img src={report} alt="icon" /><span>Report</span>
          </li>
          <li className={selectedLink === 'live' ? 'selected' : ''} onClick={() => handleLinkClick('live')}>
            <img src={live} alt="icon" /><span>Live</span>
          </li>
          <li className={selectedLink === 'statistics' ? 'selected' : ''} onClick={() => handleLinkClick('statistics')}>
            <img src={statistics} alt="icon" /><span>Statistics</span>
          </li>
          <li className={selectedLink === 'geofence' ? 'selected' : ''} onClick={() => handleLinkClick('geofence')}>
            <img src={geofence} alt="icon" /><span>Geo-Fence</span>
          </li>
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

      {/* Conditionally render corresponding component based on the selected link */}
      {selectedLink === 'dashboard' && <Dashboard />}
      {selectedLink === 'search' && <Search />}
      {selectedLink === 'report' && <Report />}
      {selectedLink === 'live' && <Live />}
      {selectedLink === 'statistics' && <Statistics />}
      {selectedLink === 'geofence' && <GeoFence />}
    </div>
  );
}

export default Sidebar;
