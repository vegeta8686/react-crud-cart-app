import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Edit from './components/Edit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/about' element={<About />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
