import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import PlanTrip from '../pages/PlanTrip';
import History from '../pages/History';
import Explore from '../pages/Explore';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
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
        </Routes>
      
    </Router>

    
   
  );
}

export default App;