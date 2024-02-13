import React from 'react'
import Vehicles from '../containers/Vehicles'
import { vehiclesData } from '../constants/data'

const Search = () => {
  const vehiclesList = vehiclesData.map((item, key) => {
      return (
        <Vehicles img={item.img} owner={item.owner} plate={item.plate} license_number={item.license_number} />
      )
  });

  return (
    <div className='search-page'>
      <h1>Search</h1>
      <input type="text" />
      <span>Found 255 results</span>
      {vehiclesList}
    </div>
  )
}

export default Search
