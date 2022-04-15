import logo from './logo.svg';
import './App.css';
import { Browser as Router, Routers, Route, Navigate } from "react-router-dom";
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
