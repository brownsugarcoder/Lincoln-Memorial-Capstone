import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './History.css';

function History() {
  // Replace these placeholders with actual historical facts and details!
  const historyDetails = [
    {
      title: 'Construction Beginnings',
      date: '1914',
      description: 'A short description about how the monument construction began...'
    },
    {
      title: 'Inauguration',
      date: '1922',
      description: 'Key facts about the dedication ceremony, important guests, etc.'
    },
    {
      title: 'Notable Renovations',
      date: '1960s - Present',
      description: 'Any major renovations, restorations, or improvements over time...'
    }
  ];

  return (
    <div className="history-container">
      {/* Hero banner or header section */}
      <header className="history-hero">
        <h1>Lincoln Monument: History</h1>
        <p>Learn about the origins and evolution of this iconic monument.</p>
      </header>
      
      {/* Main content area */}
      <section className="history-content">
        <h2>Key Milestones</h2>
        <ul className="history-timeline">
          {historyDetails.map((event, index) => (
            <li key={index} className="timeline-event">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Section: Historical Significance */}
      <section className="historical-significance">
        <h2>Why It Matters</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a augue a metus accumsan 
          condimentum. Praesent vel dolor eu dolor fermentum lobortis. In blandit aliquam diam a semper.
        </p>
      </section>
    </div>
  );
}

export default History;
