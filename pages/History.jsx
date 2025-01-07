import React from 'react';
import './History.css';

function History() {
  const historyDetails = [
    {
      title: 'National Treasure',
      date: '2004',
      description: 'This adventure film showcases several Washington DC landmarks, including the Lincoln Memorial and the Washington Monument, as the protagonist searches for hidden historical treasures.',
      image: 'https://img1.wsimg.com/isteam/ip/a56f40c6-758c-4558-b0cc-7cc942f7e33f/2.JPG/:/cr=t:12.49%25,l:0%25,w:100%25,h:75.02%25/rs=w:1200,h:600,cg:true' // Replace with actual image URL
    },
    {
      title: 'Independence Day',
      date: '1996',
      description: 'An action-packed sci-fi movie where the Washington Monument is prominently featured as humanity rallies to defend Earth from an alien invasion.',
      image: 'https://i0.wp.com/retrozap.com/wp-content/uploads/2022/08/SFS175-IndependenceDay-05.jpg?w=1500&quality=89&ssl=1' // Replace with actual image URL
    },
    {
      title: 'Olympus Has Fallen',
      date: '2013',
      description: 'A thriller that depicts a terrorist attack on the White House and showcases various DC landmarks in its intense action sequences.',
      image: 'https://moviemezzanine.com/wp-content/uploads/olympushasfallen-1140x763.jpg' // Replace with actual image URL
    },
    {
      title: 'Night at the Museum',
      date: '2006',
      description: 'This family-friendly film features the Smithsonian museums and other DC locations as magical exhibits come to life overnight.',
      image: 'https://www.independent.com/wp-content/uploads/2009/05/27/nightatthesmithsonian.jpg' // Replace with actual image URL
    },
    {
      title: 'Forrest Gump',
      date: '1994',
      description: "Includes memorable scenes set at the Washington Monument, highlighting key moments in the protagonist's life intertwined with historical events.",
      image: 'https://i.pinimg.com/736x/e9/4b/c1/e94bc197d21d3aa480a99a767117b1de.jpg' // Replace with actual image URL
    },
    {
      title: 'House of Cards',
      date: '2013-2018',
      description: 'This political drama series extensively features Washington DC landmarks, including the Capitol Building, White House, and various monuments, as it delves into the dark side of politics.',
      image: 'https://cdn.mos.cms.futurecdn.net/0930fa7260bd0de4be73db5ddaee382a-1200-80.jpg.webp' // Replace with actual image URL
    },
    {
      title: 'The Exorcist',
      date: '1973',
      description: 'Features scenes around the Georgetown neighborhood and the Washington Monument, adding to the film\'s eerie atmosphere.',
      image: 'https://via.placeholder.com/300x200?text=The+Exorcist' // Replace with actual image URL
    },
    {
      title: "All the President's Men",
      date: '1976',
      description: 'A political thriller that, while primarily set in Washington DC, showcases various monuments and the political landscape of the city.',
      image: 'https://www.thesamfordcrimson.com/wp-content/uploads/2023/10/ATPMCrimson-1140x570.png' // Replace with actual image URL
    }
  ];

  return (
    <div className="history-container">
      {/* Hero banner or header section */}
      <header className="history-hero">
        <h1>Washington DC in Movies</h1>
      </header>
      
      {/* Main content area */}
      <section className="history-content">
        <h2>Movies & TV Shows Featuring DC Monuments</h2>
        <p>Explore how Washington DC's iconic monuments have been featured in various films and TV shows.</p>

        <ul className="history-timeline">
          {historyDetails.map((event, index) => (
            <li key={index} className="timeline-event">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-details">
                <h3>{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-description">{event.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      
      
    </div>
  );
}

export default History;
