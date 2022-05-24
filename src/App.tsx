import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom"
import Home from './views/Home';
import Header from './views/Header';
import Footer from './views/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
