import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Mercury from './pages/Mercury'
import Venus from './pages/Venus'
import Neptune from './pages/Neptune'
import Uranus from './pages/Uranus'
import Saturn from './pages/Saturn'
import Jupiter from './pages/Jupiter'
import Mars from './pages/Mars'
import Earth from './pages/Earth'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Mercury/>}/>
        <Route path='/mercury' element={<Mercury/>}/>
        <Route path='/venus' element={<Venus/>}/>
        <Route path='/earth' element={<Earth/>}/>
        <Route path='/mars' element={<Mars/>}/>
        <Route path='/jupiter' element={<Jupiter/>}/>
        <Route path='/saturn' element={<Saturn/>}/>
        <Route path='/uranus' element={<Uranus/>}/>
        <Route path='/neptune' element={<Neptune/>}/>
      </Routes>
    </Router>
  );
}

export default App;

