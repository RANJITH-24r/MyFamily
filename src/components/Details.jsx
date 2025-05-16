import React from 'react'
import Morecard from './Morecard'

function Details() {
  return (
    <div>
      <h2>For More Details:</h2>
      <div className='dif' >
      <div className="sons"><Morecard name="Narshimulu Family"  />
      <Morecard name="Vishnu Family"    />
      <Morecard name="Vishwambar Family" />
      <Morecard name="Narshima Family"   />
      </div>
      <div className="daughters"><Morecard name="Lakshmi Devi Family"  />
    <Morecard name="Eshwarama Family"    />
      <Morecard name="Sudhesna Family" />
      <Morecard name="Sugunamma Family"   />
      </div>
      <div className="krishna"><Morecard name="Premilamma Family"  />
       <Morecard name="Nagamma Family"    />
      <Morecard name="Chitamma Family" />
      </div>
       </div>
    </div>
  )
}

export default Details
