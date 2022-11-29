//import {Container} from 'react-bootstrap';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
