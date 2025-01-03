import React from "react";
import './home.css'; 
import Header from '../components/Header';
import axios from "axios";

const Home = () => {
    return (
      <main className="home-page">
      <section className="hero-section">
        <img
          src="https://your-image-url.com/lincoln-memorial.jpg"
          alt="Lincoln Memorial"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Welcome to the Lincoln Memorial Project</h1>
          <p>Discover one of America’s most iconic landmarks and its rich history.</p>
        </div>
      </section>

      <section className="intro-section">
        <h2>About This Site</h2>
        <p>
          This mini website is your guide to understanding the history, significance,
          and planning your own trip to the Lincoln Memorial.
        </p>
       
      </section>
    </main>
  );
}

  export default Home;

