import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Start } from './views';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
    </Routes>
  );
}
