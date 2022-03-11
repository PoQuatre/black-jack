import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { StartScreen } from './components';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
    </Routes>
  );
}
