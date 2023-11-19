import React from 'react';

const Pelicula = ({ pelicula, imagePath }) => {
    return (
        <div className="col-lg-4 mb-4">
            <div className="card">
                <img src={`${imagePath}/${pelicula.poster_path}`} className="card-img-top" alt={pelicula.title} />
                <div className="card-body">
                    <h5 className="card-title">{pelicula.title}</h5>
                </div>
            </div>
        </div>
    );
}

export default Pelicula;
