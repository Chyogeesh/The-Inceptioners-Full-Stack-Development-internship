import React, { useState, useEffect } from 'react';

const TourPackages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/packages')
      .then(response => response.json())
      .then(data => setPackages(data));
  }, []);

  return (
    <div className="packages">
      {packages.map(pkg => (
        <div key={pkg._id} className="package-card">
          <img src={pkg.image} alt={pkg.title} />
          <h3>{pkg.title}</h3>
          <p>{pkg.description}</p>
          <p>Price: ${pkg.price}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default TourPackages;
