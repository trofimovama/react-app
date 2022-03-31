import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home'
import Weather from './routes/Weather';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
    </>
  );
}

export default App;