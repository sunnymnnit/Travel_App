import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlaceList from '../components/PlaceList';
import PlaceForm from '../components/PlaceForm';

const HomePage: React.FC = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await axios.get('/api/places');
      setPlaces(response.data);
    };

    fetchPlaces();
  }, []);

  const handleDelete = async (id: string) => {
    await axios.delete(`/api/places/${id}`);
    setPlaces(places.filter(place => place._id !== id));
  };

  return (
    <div>
      <h1>Favorite Places</h1>
      <PlaceForm setPlaces={setPlaces} />
      <PlaceList places={places} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
