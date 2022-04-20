import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Footer from './components/Footer';
import Contact from './components/Contact';
/* import Gallery from './components/Gallery'; */

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/WhatIDo" exact element={<About />} />
          {/* <Route path="/Gallery" exact element={<Gallery />} /> */}
          <Route path="/Recipes" exact element={<Recipes />} />
          <Route path="/Contact" exact element={<Contact />} />
          <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
