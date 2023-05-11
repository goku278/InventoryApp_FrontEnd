import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import AddItem from './pages/AddItem';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-item' element={<AddItem/>} />
      </Routes>
    </Router>
  );
}

export default App;
