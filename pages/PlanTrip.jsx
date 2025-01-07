import React, { useState, useEffect } from 'react';
import './PlanTrip.css';

function PlanATrip() {
  const [tripList, setTripList] = useState([]);
  const [formData, setFormData] = useState({
    destination: '',
    visitDate: '',
    numberOfPeople: '',
    description: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [error, setError] = useState(null);

  const API_URL = 'https://backend-capstone-f39e.onrender.com/api/trips'; // Replace with your backend URL

  // Fetch trip data from backend
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch trips');
        }
        const data = await response.json();
        console.log (data)
        setTripList(data); // Assuming the API returns an array of trips
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTrips();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log ("form submitted",formData)
    try {
      const response = await fetch(API_URL, {
        method: editIndex === null ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to save trip');
      }

      const savedTrip = await response.json();

      if (editIndex === null) {
        setTripList([...tripList, savedTrip]);
      } else {
        const updatedTrips = [...tripList];
        updatedTrips[editIndex] = savedTrip;
        setTripList(updatedTrips);
      }

      // Reset form
      setFormData({
        destination: '',
        visitDate: '',
        numberOfPeople: '',
        description: '',
      });
      setEditIndex(null);
      console.log ("updated trip list",tripList)
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle edit
  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(tripList[index]);
  };

  // Handle delete
  const handleDelete = async (index) => {
    const tripToDelete = tripList[index];
    try {
      const response = await fetch(`${API_URL}/${tripToDelete.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete trip');
      }

      const updatedTrips = tripList.filter((_, i) => i !== index);
      setTripList(updatedTrips);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="background-container">
      <div className="plan-trip-container">
        <header className="plan-trip-hero">
          <h1>Plan Your Trip</h1>
          <p>Organize your visit to Washington D.C.</p>
        </header>
        <section className="plan-trip-content">
          {error && <p className="error-message">{error}</p>}
          <div className="trip-form-wrapper">
            <h2>{editIndex !== null ? 'Edit Trip' : 'Add a New Trip'}</h2>
            <form onSubmit={handleSubmit} className="trip-form">
              <div className="form-group">
                <label htmlFor="destination">Trip Destination</label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="e.g., Paris"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="visitDate">Trip Date</label>
                <input
                  type="date"
                  name="visitDate"
                  id="visitDate"
                  value={formData.visitDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="numberOfPeople">Number of Travelers</label>
                <input
                  type="number"
                  name="numberOfPeople"
                  id="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  placeholder="e.g., 2"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="e.g., Pack sunscreen, buy tickets in advance..."
                  rows="3"
                />
              </div>
              <button type="submit" className="submit-btn">
                {editIndex !== null ? 'Update Trip' : 'Add Trip'}
              </button>
            </form>
          </div>
          <div className="trip-list-wrapper">
            <h2>Your Trip Plans</h2>
            {tripList.length === 0 ? (
              <p>No trips planned yet. Use the form above to add one.</p>
            ) : (
              <ul className="trip-list">
                {tripList.map((trip, index) => (
                  <li key={index} className="trip-item">
                    <div className="trip-details">
                      <h3>{trip.destination}</h3>
                      <p>
                        <strong>Date:</strong> {trip.visitDate}
                      </p>
                      <p>
                        <strong>Travelers:</strong> {trip.numberOfPeople}
                      </p>
                      <p>
                        <strong>Description:</strong> {trip.description || 'None'}
                      </p>
                    </div>
                    <div className="trip-actions">
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default PlanATrip;