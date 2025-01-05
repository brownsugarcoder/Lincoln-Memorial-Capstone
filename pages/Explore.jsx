import React from 'react';
import './Explore.css';

function Explore() {
  // Example data for exploration items—replace these with real data or API calls
  const exploreItems = [
    {
      title: 'Lincoln Memorial Reflecting Pool',
      description: 'A serene reflecting pool in front of the Lincoln Monument, offering beautiful views and photo opportunities.',
      imgUrl: 'https://via.placeholder.com/300x200', // Replace with your own image URL
    },
    {
      title: 'National Mall Tour',
      description: 'A walking tour of the National Mall, including the Washington Monument and WWII Memorial.',
      imgUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Nearby Museums',
      description: 'Discover the Smithsonian museums and galleries just steps away from the Lincoln Monument.',
      imgUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Cafés & Dining',
      description: 'Enjoy a quick bite or a sit-down meal at various cafés and restaurants around the National Mall.',
      imgUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Cafés & Dining',
      description: 'Enjoy a quick bite or a sit-down meal at various cafés and restaurants around the National Mall.',
      imgUrl: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Cafés & Dining',
      description: 'Enjoy a quick bite or a sit-down meal at various cafés and restaurants around the National Mall.',
      imgUrl: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <div className="background-container">
      <div className="explore-wrapper">
        <h1>Explore Washington DC</h1>
        <p>Discover attractions, tours, and experiences in the heart of Washington, D.C.</p>
        
        <div className="explore-card-container">
          {exploreItems.map((item, index) => (
            <div className="explore-card" key={index}>
              <img src={item.imgUrl} alt={item.title} className="explore-card-image" />
              <h2 className="explore-card-title">{item.title}</h2>
              <p className="explore-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
