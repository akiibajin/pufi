import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './views/home';
import Header from './views/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
