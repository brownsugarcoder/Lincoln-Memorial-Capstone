import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Weather from '../components/Weather';
import Home from '../pages/Home';
import PlanTrip from '../pages/PlanTrip';
import Login from '../pages/Login';
import History from '../pages/History';
import Explore from '../pages/Explore';
import Navbar from '../components/Navbar';
import Trips from '../components/Trips';
import 'remixicon/fonts/remixicon.css';
import Footer from '../components/Footer';
import Toggle from '../components/Toggle';


import './assets/index.css'

function App () {
  return (
    <> 
   
   
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<History />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/plantrip" element={<PlanTrip />} />
        <Route path="/login" element={<Login />} />
        </Routes>
        
      
    </Router>
    </>
    
    
   
  );
}

export default App;