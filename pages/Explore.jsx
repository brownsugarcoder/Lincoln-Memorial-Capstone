import React from 'react';
import './Explore.css';

function Explore() {
  
  const exploreItems = [
    {
      title: 'Roses Luxury',
      description: 'For an unforgettable dining experience, Roses Luxury on Capitol Hill is the place to be. This Michelin-starred restaurant offers an eclectic menu inspired by global flavors and local ingredients. ',
      image: '/images/Rose.jpg', 
    },
    {
      title: 'District Taco',
      description: 'Craving authentic Mexican cuisine? District Taco offers a vibrant menu of freshly made tacos, burritos, and quesadillas using organic and locally sourced ingredients.',
      image: '/images/tacos.webp',
    },
    {
      title: 'District Burger',
      description: 'Craving authentic Mexican cuisine? District Taco offers a vibrant menu of freshly made tacos, burritos, and quesadillas using organic and locally sourced ingredients.',
      image: '/images/burger.webp'
    },
    {
      title: 'Bens Chilli Bowl',
      description: 'Enjoy a quick bite or a sit-down meal at various cafés and restaurants around the National Mall.',
      image: '/images/drinks.webp',
    },
    {
      title: 'Bens Chilli Bowl',
      description: 'A Washington, D.C. landmark since 1958, Bens Chili Bowl is famous for its mouthwatering half-smokes and rich history. Located on U Street, this iconic eatery has been a gathering spot for locals and celebrities alike.',
      image: '/images/bens.webp'
    },
    {
      title: 'Cafés & Dining',
      description: 'Enjoy a quick bite or a sit-down meal at various cafés and restaurants around the National Mall.',
      image: '/images/burger.webp',
    },
  ];

  return (
    <div className="back-container">
      <div className="explore-wrapper">
        <h1>Explore Washington DC Food Destinations</h1>
        <p>Discover attractions, tours, and experiences in the heart of Washington, D.C.</p>
        
        <div className="explore-card-container">
          {exploreItems.map((item, index) => (
            <div className="explore-card" key={index}>
              <img src={item.image} alt={item.title} className="explore-card-image" />
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
