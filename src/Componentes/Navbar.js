import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../imagenes/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Navbar() {
  const nombres = ['Nombre1', 'Nombre2', 'Nombre3'];

  return (
    <nav className='nav'>
      
      {/* <img src={logo} alt="logo"></img> */}
      <NavLink to="/Homepage" className="nav-item z-10" activeclassname="is-active" exact="true">Home</NavLink>
      <NavLink to="/Cartelera" className="nav-item" activeClassName="is-active">Cartelera</NavLink>
      <NavLink to="/Localidaes" className="nav-item" activeClassName="isactive">Cines</NavLink>
      <NavLink to="/Confiteria" className="nav-item" activeClassName="is-active">Confitería</NavLink>
      <NavLink to="/Login" className="nav-button">Iniciar Sesión</NavLink>
      <NavLink to="/Local" className="nav-button1">
        <span>Elige tu cine</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-badge-down"
          width="20" /* Ajusta el tamaño según sea necesario */
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#4659DF"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginLeft: '5px' }} /* Ajusta el margen izquierdo */
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 13v-6l-5 4l-5 -4v6l5 4z" />
        </svg>
      </NavLink>


      <span className="nav-indicador"></span>
    </nav>
  );
}

export default Navbar;
