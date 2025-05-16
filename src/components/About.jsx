import React from 'react'
import Developer from '../assets/me.jpg'

function About() {
  return (
    <div className='develope'>
      <div className='about-info'>
        <h2>About he Developer :</h2>
        <p>
Hello! I'm Ranjith, the creator of this Family Tree website. I built this platform to help families preserve their stories and heritage in a simple, beautiful way. I believe that every family has a unique story, and this website is a place to cherish and explore those connections.
In my free time, I love learning about family traditions and spending time with my own family. If you have any feedback or suggestions, please feel free to reach out.</p>
      </div>
      <img src={Developer} alt="" width="1215" height="482"/>
    </div>
  )
}

export default About
