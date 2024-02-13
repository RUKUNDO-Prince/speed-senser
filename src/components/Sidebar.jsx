import React from 'react';
import { logo, dashboard, geofence, live, report, search, statistics, right, avatar } from '../assets';

const Sidebar = ({ selectedComponent, onSelectComponent }) => {
  return (
    <div className='sidebar'>
      <div className='side-links-container'>
        <img src={logo} alt="logo" />
        <ul>
          <li className={selectedComponent === 'dashboard' ? 'selected' : ''} onClick={() => onSelectComponent('dashboard')}>
            <img src={dashboard} alt="icon" /><span>Dashboard</span>
          </li>
          <li className={selectedComponent === 'search' ? 'selected' : ''} onClick={() => onSelectComponent('search')}>
            <img src={search} alt="icon" /><span>Search</span>
          </li>
          <li className={selectedComponent === 'report' ? 'selected' : ''} onClick={() => onSelectComponent('report')}>
            <img src={report} alt="icon" /><span>Report</span>
          </li>
          <li className={selectedComponent === 'live' ? 'selected' : ''} onClick={() => onSelectComponent('live')}>
            <img src={live} alt="icon" /><span>Live</span>
          </li>
          <li className={selectedComponent === 'statistics' ? 'selected' : ''} onClick={() => onSelectComponent('statistics')}>
            <img src={statistics} alt="icon" /><span>Statistics</span>
          </li>
          <li className={selectedComponent === 'geofence' ? 'selected' : ''} onClick={() => onSelectComponent('geofence')}>
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
    </div>
  );
}

export default Sidebar;
