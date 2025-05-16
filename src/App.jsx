import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from '../src/components/Landing'
import Groupoto from './components/Groupoto'
import Familytree from './components/Familytree'
import Note from './components/Note';
import About from './components/About';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/familytree" element={<Note />} />
        <Route path="/about" element={<About />} />

          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
