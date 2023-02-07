import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import MissionsList from './components/MissionsList';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/missions/*" element={<MissionsList />} />
      </Routes>
    </>
  );
}

export default App;
