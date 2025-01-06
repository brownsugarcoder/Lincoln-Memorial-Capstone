import React, { useState } from 'react';
import './PlanTrip.css';

function PlanATrip() {
  // -----------
  // State Setup
  // -----------
  // tripList holds all trips
  // formData holds the input values for a new or edited trip
  // editIndex is the index of the trip currently being edited (null if not editing)
  const [tripList, setTripList] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    notes: '',
  });
  const [editIndex, setEditIndex] = useState(null);

  // ---------------------
  // Handle Form Changes
  // ---------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // --------------------------------
  // Create or Update Trip Submission
  // --------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex === null) {
      // CREATE new trip
      setTripList([...tripList, formData]);
    } else {
      // UPDATE existing trip
      const updatedTrips = [...tripList];
      updatedTrips[editIndex] = formData;
      setTripList(updatedTrips);
    }

    // Reset form
    setFormData({ title: '', date: '', notes: '' });
    setEditIndex(null);
  };

  // --------------
  // Edit Function
  // --------------
  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(tripList[index]);
  };

  // ----------------
  // Delete Function
  // ----------------
  const handleDelete = (index) => {
    const updatedTrips = tripList.filter((_, i) => i !== index);
    setTripList(updatedTrips);
  };

  return (
    <div className="background-container">
    <div className="plan-trip-container">
      <header className="plan-trip-hero">
        <h1>Plan Your Trip</h1>
        <p>Organize your visit to the Lincoln Monument.</p>
      </header>

      <section className="plan-trip-content">
       
        <div className="trip-form-wrapper">
          <h2>{editIndex !== null ? 'Edit Trip' : 'Add a New Trip'}</h2>
          <form onSubmit={handleSubmit} className="trip-form">
            <div className="form-group">
              <label htmlFor="title">Trip Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Weekend Getaway"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Trip Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <textarea
                name="notes"
                id="notes"
                value={formData.notes}
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
                    <h3>{trip.title}</h3>
                    <p>
                      <strong>Date:</strong> {trip.date}
                    </p>
                    <p>
                      <strong>Notes:</strong> {trip.notes || 'None'}
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
