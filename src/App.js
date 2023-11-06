import React from 'react';
import './App.css';
import Navegador from './componentes/Navegador';
import Footer from './componentes/Footer';
import CuerpoPagina from './componentes/CuerpoPagina';


function App() {
  return (
    <div className="App">
      <Navegador />
      <CuerpoPagina />
      <Footer />

    </div>
  );
}

export default App;
