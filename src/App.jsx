import { useState } from 'react'
import Home from './pages/Home/Home'
import JobListings from './pages/JobListings/JobListings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobTracking from './pages/JobTracking/JobTracking';
import Admin from './pages/Admin/Admin';
import { Apply } from './pages/Apply/Apply';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='joblistings' element={<JobListings />} />
          <Route path='jobtracking' element={<JobTracking />} />
          <Route path='admin' element={<Admin />} />
          <Route path="apply" element={<Apply />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
