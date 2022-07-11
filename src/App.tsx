import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home'
import Weather from './routes/Weather';
import Mobile from './routes/Mobile';

const App:React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/mobile' element={<Mobile />} />
      </Routes>
    </>
  );
}

export default App;