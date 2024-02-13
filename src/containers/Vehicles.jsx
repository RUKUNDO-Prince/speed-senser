import React from 'react'

const Vehicles = (props) => {
  return (
    <div className='vehicles-container'>
      <img src={props.img} alt="img" />
      <div className='vehicles-data'>
        <p><span>PLATE:</span>{props.plate}</p>
        <p><span>OWNER:</span>{props.owner}</p>
        <p><span>LICENSE NUMBER:</span>{props.license_number}</p>
        <a href="#">view details...</a>
      </div>
    </div>
  )
}

export default Vehicles
