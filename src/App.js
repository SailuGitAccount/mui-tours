//import React from 'react';
import Home from './pages/Home';
import SearchAppBar from './components/AppBar';
import Tour from './pages/Tour';
import {
  Switch,
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tour" element={<Tour />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
