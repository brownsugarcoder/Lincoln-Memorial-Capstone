import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import PlanTrip from '../pages/PlanTrip';
import Login from '../pages/Login';
import History from '../pages/History';
import Explore from '../pages/Explore';
import Navbar from '../components/Navbar';
import Trips from '../components/Trips';
import Toggle from '../components/Toggle';


import './assets/index.css'

function App () {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<History />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/plantrip" element={<PlanTrip />} />
        <Route path="/login" element={<Login />} />
        </Routes>
       <Trips/ >
    </Router>

    
   
  );
}

export default App;