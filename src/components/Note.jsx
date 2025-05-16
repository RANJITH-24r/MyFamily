import React from 'react'
import './Component.css'
import Familytree from './Familytree'
import Details from './Details'

function Note() {
  return (
    <div>
    <div className='note'>
     <h2>Note</h2> 
     <p>Some members not added</p>
     <Familytree />
     <Details />
    </div>
    </div>
  )
}

export default Note
