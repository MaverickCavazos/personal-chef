import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" exact element={ <Home/> } />
          <Route path="/WhatIDo" exact element= { <About/> } />
          <Route path="/Gallery" exact element= { <Gallery/> } />
          <Route path="/Recipes" exact element= {<Recipes/> } />
          <Route path="/Contact" exact element= {<Contact/> } />
          <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
      <Footer></Footer>
  </div>
  );
}

export default App;
