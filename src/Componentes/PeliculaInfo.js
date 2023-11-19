import React from 'react';

const PeliculaInfo = ({ pelicula }) => {
    return (
        <div className="row">
            <div className="col-lg-3">
                <img src={`https://image.tmdb.org/t/p/original/${pelicula.poster_path}`} alt={pelicula.title} className="img-fluid" />
            </div>
            <div className="col-lg-9">
                <h2 className="text-uppercase">{pelicula.title}</h2>
                <p>{pelicula.overview}</p>
                {pelicula.tagline && <p>{pelicula.tagline}</p>}
            </div>
        </div>
    );
};

export default PeliculaInfo;