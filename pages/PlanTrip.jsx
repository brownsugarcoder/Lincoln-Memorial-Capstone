import React, { useState, useEffect } from 'react';
import './PlanTrip.css';

const API_URL = 'https://backend-capstone-f39e.onrender.com/api/trips'; // Replace with your backend URL

function PlanATrip() {
  const [tripList, setTripList] = useState([]);
  const [formData, setFormData] = useState({
    destination: '',
    visitDate: '',
    numberOfPeople: '',
    description: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Disable button while submitting

  // Fetch trips from the backend on component mount
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch trips');
        }
        const trips = await response.json();
        setTripList(trips);
        console.log('Fetched trips:', trips);
      } catch (err) {
        console.error('Error fetching trips:', err);
      }
    };
    fetchTrips();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Format the date to the required format
    const formattedDate = new Date(formData.visitDate).toLocaleDateString('en-CA');
    const dataToSend = {
      ...formData,
      visitDate: formattedDate,
    };

    // Validate formData
    if (!dataToSend.destination || !dataToSend.visitDate || !dataToSend.numberOfPeople) {
      console.error('Missing required fields:', dataToSend);
      return;
    }

    try {
      setIsSubmitting(true); // Disable the submit button while submitting

      const method = editIndex === null ? 'POST' : 'PUT';
      const url = editIndex === null ? API_URL : `${API_URL}/${tripList[editIndex]._id}`; // Use the correct URL for PUT

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Backend response error:', errorText);
        throw new Error('Failed to save trip');
      }

      const savedTrip = await response.json();
      console.log('Saved trip from backend:', savedTrip);

      // Update state with the new or updated trip
      if (editIndex === null) {
        setTripList((prevTrips) => [...prevTrips, savedTrip]);
      } else {
        setTripList((prevTrips) =>
          prevTrips.map((trip, index) => (index === editIndex ? savedTrip : trip))
        );
      }

      // Reset form
      setFormData({
        destination: '',
        visitDate: '',
        numberOfPeople: '',
        description: '',
      });
      setEditIndex(null);
    } catch (err) {
      console.error('Error saving trip:', err);
    } finally {
      setIsSubmitting(false); // Re-enable the submit button
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData({ ...tripList[index] });
  };

  const handleDelete = async (index) => {
    const tripToDelete = tripList[index];
    if (!window.confirm('Are you sure you want to delete this trip?')) return;

    try {
      console.log(`Attempting to delete trip with ID: ${tripToDelete._id}`);
      const response = await fetch(`${API_URL}/${tripToDelete._id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete trip');
      }

      const updatedTrips = tripList.filter((_, i) => i !== index);
      setTripList(updatedTrips);
      console.log('Successfully deleted trip:', tripToDelete);
    } catch (err) {
      console.error('Error deleting trip:', err);
      alert('An error occurred while deleting the trip. Please try again.');
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
          <div className="trip-form-wrapper">
            <h2>{editIndex !== null ? 'Edit Trip' : 'Add a New Trip'}</h2>
            <form onSubmit={handleSubmit} className="trip-form">
              <div className="form-group">
                <label htmlFor="destination">Trip Destination</label>
                <input
                  type="text"
                  name="destination"
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
                  value={formData.visitDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="numberOfPeople">Number Of Travelers</label>
                <input
                  type="number"
                  name="numberOfPeople"
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
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting} // Disable the button while submitting
              >
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
                  <li key={trip._id} className="trip-item">
                    <div className="trip-details">
                      <h3>{trip.destination}</h3>
                      <p>
                        <strong>Date:</strong> {new Date(trip.visitDate).toLocaleDateString()}
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




















/*import React, { useState, useEffect } from 'react';
import './PlanTrip.css';

const API_URL = 'https://backend-capstone-f39e.onrender.com/api/trips'; // Replace with your backend URL

function PlanATrip() {
  const [tripList, setTripList] = useState([]);
  const [formData, setFormData] = useState({
    destination: '',
    visitDate: '',
    numberOfPeople: '',
    description: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Disable button while submitting

  // Fetch trips from the backend on component mount
  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch trips');
        }
        const trips = await response.json();
        setTripList(trips);
        console.log('Fetched trips:', trips);
      } catch (err) {
        console.error('Error fetching trips:', err);
      }
    };
    fetchTrips();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  
    // Format the date to the required format
    const formattedDate = new Date(formData.visitDate).toLocaleDateString('en-CA');
    const dataToSend = {
      ...formData,
      visitDate: formattedDate,
    };
  
    // Validate formData
    if (!dataToSend.destination || !dataToSend.visitDate || !dataToSend.numberOfPeople) {
      console.error('Missing required fields:', dataToSend);
      return;
    }
  
    try {
      const response = await fetch(API_URL, {
        method: editIndex === null ? 'POST' : 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Backend response error:', errorText);
        throw new Error('Failed to save trip');
      }
  
      const savedTrip = await response.json();
      console.log('Saved trip from backend:', savedTrip);
      // Update state with new trip
      if (editIndex === null) {
        setTripList((prevTrips) => [...prevTrips, savedTrip]);
      } else {
        setTripList((prevTrips) =>
          prevTrips.map((trip, index) =>
            index === editIndex ? savedTrip : trip
          )
        );
      }
      // Reset form
      setFormData({
        destination: '',
        visitDate: '',
        numberOfPeople: '',
        description: '',
      });
      setEditIndex(null);
    } catch (err) {
      console.error('Error saving trip:', err);
    }
  };
  
  

  
  
  
  
  
  
  
  
  
  
  

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData({ ...tripList[index] });
  };

  const handleDelete = async (index) => {
    const tripToDelete = tripList[index];

    if (!window.confirm('Are you sure you want to delete this trip?')) return;

    try {
      console.log(`Attempting to delete trip with ID: ${tripToDelete._id}`);
      const response = await fetch(`${API_URL}/${tripToDelete._id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete trip');
      }
      const updatedTrips = tripList.filter((_, i) => i !== index);
      setTripList(updatedTrips);
      console.log('Successfully deleted trip:', tripToDelete);
    } catch (err) {
      console.error('Error deleting trip:', err);
      alert('An error occurred while deleting the trip. Please try again.');
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
          <div className="trip-form-wrapper">
            <h2>{editIndex !== null ? 'Edit Trip' : 'Add a New Trip'}</h2>
            <form onSubmit={handleSubmit} className="trip-form">
              <div className="form-group">
                <label htmlFor="destination">Trip Destination</label>
                <input
                  type="text"
                  name="destination"
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
                  value={formData.visitDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="numberOfPeople">Number Of Travelers</label>
                <input
                  type="number"
                  name="numberOfPeople"
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
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting} // Disable the button while submitting
              >
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
                        <strong>Date:</strong> {new Date(trip.visitDate).toLocaleDateString()}
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
*/


