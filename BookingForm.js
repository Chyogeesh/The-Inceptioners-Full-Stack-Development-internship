import React, { useState } from 'react';

const BookingForm = ({ packageId }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, packageId })
    })
    .then(response => response.json())
    .then(data => alert('Booking successful!'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input name="email" onChange={handleChange} placeholder="Email" required />
      <input name="phone" onChange={handleChange} placeholder="Phone" required />
      <input name="travelers" onChange={handleChange} placeholder="Travelers" required />
      <textarea name="specialRequests" onChange={handleChange} placeholder="Special Requests"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
