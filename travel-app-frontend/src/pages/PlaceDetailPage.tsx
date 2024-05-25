import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PlaceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [place, setPlace] = useState<any>(null);

  useEffect(() => {
    const fetchPlace = async () => {
      const response = await axios.get(`/api/places/${id}`);
      setPlace(response.data);
    };

    fetchPlace();
  }, [id]);

  if (!place) return <div>Loading...</div>;

  return (
    <div>
      <h1>{place.name}</h1>
      <p>{place.description}</p>
    </div>
  );
};

export default PlaceDetailPage;
