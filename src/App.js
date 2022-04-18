import React, { useState } from 'react';
import Nav from './components/Nav';
import Homepage from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Recipes from './components/Recipes';
import WhatIDo from './components/whatido';

function App() {
 
  const [pages] =  useState([<Homepage/>,<WhatIDo/>,<Recipes/>,<ContactForm/>])
  const [currentPage, setCurrentPage] = useState(pages[0])


  return (
    <div>
      <Nav

        pages = {pages}
        setCurrentPage = {setCurrentPage}
        currentPage = {currentPage}
      ></Nav>
      <main>
          {currentPage}
      </main>
    </div>
  );
}

export default App;
