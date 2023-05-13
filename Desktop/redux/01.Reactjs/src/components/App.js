import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

function App(){
  return (
    <Routes>
      <Route path='/' exact element={<Home />}></Route>
      <Route path='/:id' element={<Detail />}></Route>
    </Routes>
  );
}

export default App;