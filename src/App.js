import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Paginas/Homepage';
import Cartelera from './Paginas/Cartelera';
import Localidades from './Paginas/Localidades';
import Confiteria from './Paginas/Confiteria';
import Navbar  from './Componentes/Navbar';
import Login from './Paginas/Login';

import Footer from './Paginas/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/Homepage"  element={<HomePage />} />
          <Route path="/Cartelera" element={<Cartelera />} />
          <Route path="/Localidades" element={<Localidades />} />
          <Route path="/Confiteria" element={<Confiteria />} />
          <Route path='/Login' element={<Login/>}/>
        </Routes>
       {/*  <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
