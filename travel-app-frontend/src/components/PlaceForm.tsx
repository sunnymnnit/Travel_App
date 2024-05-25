import React, { useState } from 'react';
import axios from 'axios';

const PlaceForm: React.FC<{ setPlaces: React.Dispatch<React.SetStateAction<any[]>> }> = ({ setPlaces }) => {
  const [city, setCity] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await axios.get(`/api/places/${city}`);
    setPlaces(response.data.places);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Fetch Places</button>
    </form>
  );
};

export default PlaceForm;
