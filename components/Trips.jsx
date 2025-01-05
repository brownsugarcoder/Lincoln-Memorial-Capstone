import React from 'react'
import './trips.css';
import monument1 from '../public/monument1.jpg'; // Import your image


export const Trips = () => {
  return (
    
    <div className="trips-wrapper section">
      <h2>Popular Trips</h2>

      <div className="cards">
        <div className="card">
          <img src={monument1.jpg} alt="" className="trip-image" />
          <div className="trip-content">
            <div className="rating">
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </div>
            <h3> Lincoln Memorial</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;
