import React from "react";
import './home.css'; 

const Home = () => {
  return (
      <main className="home-page">
          {/* Hero Section */}
          <div className="hero-section">
              <section className="fade-in-keyframes">
                  <div className="hero-text">
                      <h1>Washington D.C</h1>
                      <p>Discover one of America’s most iconic landmarks and its rich history.</p>
                  </div>
              </section>
          </div>
              
          {/* Intro Section */}
          <section className="intro-section">
            <h1></h1>
            <p></p>
            <img src="images/bus.png" alt="bus icon" className="bus-icon" />
          </section>
              
          {/* Popular Trips Section */}
          <section className="trips-wrapper section">
            <h2>Popular Tours</h2>
            <div className="cards">
              {/* Card 1 */}
              <div className="card">
                <img src="images/8.jpg" alt="Lincoln Memorial " className="trip-image" />
                <div className="trip-content">
                  <h3>Private Washington DC City Tour</h3>
                  <p>Explore the rich history and architectural beauty of the Lincoln Memorial.</p>
                  <div className="rating">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                  </div>
                  <div className="pricing"> 
                    <span className="price">$85.99</span>
                    <button className="booking">Book Now</button>
                    <div className="pickup-info">
                      <i className="ri-map-pin-line"></i>
                      <span> Pick Up At Obama Ave. SW</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="card">
                <img src="images/nightwh.jpg" alt="Evening Tour" className="trip-image" />
                <div className="trip-content">
                  <h3>Evening Tour</h3>
                  <p>Enjoy a serene evening exploring the illuminated Lincoln Memorial.</p>
                  <div className="rating">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                  </div>
                  <div className="pricing"> 
                    <span className="price">$25.99</span>
                    <button className="booking">Book Now</button>
                    <div className="pickup-info">
                      <i className="ri-map-pin-line"></i>
                      <span> Pick Up At Obama Ave. SW</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="card">
                <img src="images/pt.jpg" alt="Photography Tour" className="trip-image" />
                <div className="trip-content">
                  <h3>Photography Tour</h3>
                  <p>Capture stunning photos of the Lincoln Memorial and its surroundings.</p>
                  <div className="rating">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                  </div>
                  <div className="pricing"> 
                    <span className="price">$55.99</span>
                    <button className="booking">Book Now</button>
                    <div className="pickup-info">
                      <i className="ri-map-pin-line"></i>
                      <span> Tour Begins At Monumental Dr. </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card 4 */}
              <div className="card">
                <img src="images/2.jpg" alt="Lincoln Memorial Walking Tour" className="trip-image" />
                <div className="trip-content">
                  <h3>Lincoln Memorial Walking Tour</h3>
                  <p>Explore the rich history and architectural beauty of the Lincoln Memorial.</p>
                  <div className="rating">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                  </div>
                  <div className="pricing"> 
                    <span className="price">$35.99</span>
                    <button className="booking">Book Now</button>
                    <div className="pickup-info">
                      <i className="ri-map-pin-line"></i>
                      <span> Pick Up At Cherry Hill</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </section>
      </main>
  );
}

export default Home;
