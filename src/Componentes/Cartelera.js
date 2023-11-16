import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import akira from "../imagenes/akira.png";
function Cartelera() {
    const peliculas = [
        { titulo: 'Película 1', imagen: akira },
        { titulo: 'Película 2', imagen: akira },
        { titulo: 'Película 3', imagen: akira },
        { titulo: 'Película 4', imagen: akira },
        { titulo: 'Película 5', imagen: akira },
        { titulo: 'Película 6', imagen: akira },
    ];

    return (
        <div className="container">
            <h1 className="text-center mt-4 mb-3">Cartelera</h1>
            <div className="row">
                {peliculas.map((pelicula, index) => (
                    <div key={index} className="col-lg-4 mb-4">
                        <div className="card">
                            <img src={pelicula.imagen} className="card-img-top" alt={pelicula.titulo} />
                            <div className="card-body">
                                <h5 className="card-title text-center">{pelicula.titulo}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cartelera;
