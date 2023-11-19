import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function Cartelera() {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "66b7a456851fd240629f9890c2795696";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

    const [peliculas, setPeliculas] = useState([]);
    const [buscadorKey, setBuscadorKey] = useState("");

    useEffect(() => {
        fetchMovie(buscadorKey);
    }, [buscadorKey]);

    const fetchMovie = async (buscadorKey) => {
        try {
            const type = buscadorKey ? "search" : "discover";
            const { data: { results } } = await axios.get(`${API_URL}/${type}/movie`, {
                params: {
                    api_key: API_KEY,
                    query: buscadorKey
                },
            });
            setPeliculas(results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleInputChange = (event) => {
        setBuscadorKey(event.target.value);
    }

    return (
        <div className="container">
            <h1 className="text-center mt-4 mb-3">Cartelera</h1>
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar película..."
                    value={buscadorKey}
                    onChange={handleInputChange}
                />
            </div>
            <div className="row">
                {peliculas.map((pelicula) => (
                    <div key={pelicula.id} className="col-lg-4 mb-4">
                        <div className="card">
                            <img src={`${IMAGE_PATH}/${pelicula.poster_path}`} className="card-img-top" alt={pelicula.title} />
                            <div className="card-body">
                                <h5 className="card-title">{pelicula.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cartelera;
