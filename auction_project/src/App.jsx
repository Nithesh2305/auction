import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Import the Home page
import Signup from './components/Signup'; // Import the Signup component
import Signin from './components/Signin'; // Import the Signin component

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />
        {/* Signin Page */}
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
};

export default App;