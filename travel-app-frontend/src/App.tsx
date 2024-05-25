import React from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/place/:id" element={<PlaceDetailPage/>} />
        <Route element={<NotFoundPage/>} />
      </Routes>
  );
};

export default App;
