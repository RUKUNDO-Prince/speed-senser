import React from 'react'
import { location, bar1, bar2, bar3, card1, card2, card3 } from '../assets'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <p><img src={location} alt="location" /><span>Current Location :</span>Mukamira, Nyabihu</p>
      <div className='cards'>
        <div className='card'>
          <div>
            <div className='card-text'>
              <img src={bar1} alt="icon" />
              <div>
                <p>Over-speeding Cases</p>
                <h1>20</h1>
              </div>
            </div>
            <img src={card1} alt="icon" />
          </div>
          <p className='text'>In the past hour</p>
        </div>
        <div className='card'>
          <div>
            <div className="card-text">
              <img src={bar2} alt="icon" />
              <div>
                <p>Devices Disconnected</p>
                <h1>0</h1>
              </div>
            </div>
            <img src={card2} alt="icon" />
          </div>
          <p className='text'>In the past hour</p>
        </div>
        <div className='card'>
          <div>
            <div className="card-text">
              <img src={bar3} alt="icon" />
              <div>
                <p>Accidents</p>
                <h1>2</h1>
              </div>
            </div>
            <img src={card3} alt="icon" />
          </div>
          <p className='text'>In the past hour</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
