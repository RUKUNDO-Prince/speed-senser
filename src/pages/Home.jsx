import React, { useState } from 'react';
import { Sidebar, Dashboard, Search, Report, Live, Statistics, GeoFence } from '../components';

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState('dashboard');

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className='home-container'>
      <div>
        <Sidebar selectedComponent={selectedComponent} onSelectComponent={handleComponentChange} />
      </div>
      <div className="component">
        {selectedComponent === 'dashboard' && <Dashboard />}
        {selectedComponent === 'search' && <Search />}
        {selectedComponent === 'report' && <Report />}
        {selectedComponent === 'live' && <Live />}
        {selectedComponent === 'statistics' && <Statistics />}
        {selectedComponent === 'geofence' && <GeoFence />}
      {/* component */}
      </div>
    </div>
  );
}

export default Home;
