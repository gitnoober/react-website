import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
// Use Routes instead of Switch

function App() {
  return (
    <>
    <Router>
      <Navbar /> 
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
      </Router>
    </>
  );
}


export default App;

// So basically in here we are setting up routes
// setting up the home page as of now

