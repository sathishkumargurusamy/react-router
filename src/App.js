import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Child from './Child';
import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/child" element={<Child />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
