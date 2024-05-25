import axios from 'axios';

export const fetchPlaces = async (city: string) => {
  const response = await axios.get(`/api/places/${city}`);
  return response.data;
};

export const getPlaceDetails = async (id: string) => {
  const response = await axios.get(`/api/places/${id}`);
  return response.data;
};

export const deletePlace = async (id: string) => {
  await axios.delete(`/api/places/${id}`);
};
