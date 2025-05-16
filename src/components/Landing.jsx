import React from 'react';
import './Component.css';
import { Link, Outlet } from 'react-router-dom';
import Qoute from './Qoute'
import Groupoto from './Groupoto';


function Landing(){
    return (
  <div>
    <div className='landing'>
       <Link to="/about" className='about'>About</Link>
       <div className='welcome'>
         <h2>The Family</h2>
         <p className='lp'>Explore Our Family Legacy.</p>
       </div>
       <Link to="familytree" className='familytree'>&gt; Family Tree</Link>
       </div>
       <Qoute />
       <Groupoto />
     </div>
    );
}

export  default Landing;