import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import MissionsList from './components/MissionsList';
import MyProfile from './components/myProfile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/missions/*" element={<MissionsList />} />
        <Route exact path="/myProfile/*" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
