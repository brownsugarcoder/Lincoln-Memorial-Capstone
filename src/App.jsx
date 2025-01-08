import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from '../pages/Home';
import PlanTrip from '../pages/PlanTrip';
import Login from '../pages/Login';
import History from '../pages/History';
import Explore from '../pages/Explore';
import Navbar from '../components/Navbar';
import Trips from '../components/Trips';
import 'remixicon/fonts/remixicon.css';
import Footer from '../components/Footer';



import './assets/index.css'

function App () {
  return (
    <> 
   
    <Router>
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<History />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/plantrip" element={<PlanTrip />} />
          <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
        </div>  
      </Router>
    </>
    
   
  );
}

export default App;