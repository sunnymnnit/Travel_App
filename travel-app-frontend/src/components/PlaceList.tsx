import React from 'react';
import { Link } from 'react-router-dom';

const PlaceList: React.FC<{ places: any[], onDelete: (id: string) => void }> = ({ places, onDelete }) => {
  return (
    <ul>
      {places.map(place => (
        <li key={place._id}>
          <Link to={`/place/${place._id}`}>{place.name}</Link>
          <button onClick={() => onDelete(place._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default PlaceList;
