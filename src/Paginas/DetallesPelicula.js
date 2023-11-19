import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PeliculaInfo from '../Componentes/PeliculaInfo';
import Director from '../Componentes/Director';
import Reparto from '../Componentes/Reparto';

const DetallesPelicula = () => {
    const { id } = useParams();
    const [pelicula, setPelicula] = useState(null);
    const [director, setDirector] = useState('');
    const [reparto, setReparto] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
                    params: {
                        api_key: "66b7a456851fd240629f9890c2795696",
                        language: 'es'
                    },
                });
                setPelicula(data);

                const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
                    params: {
                        api_key: "66b7a456851fd240629f9890c2795696"
                    },
                });
                const directorInfo = castResponse.data.crew.find(member => member.job === 'Director');
                if (directorInfo) {
                    setDirector(directorInfo.name);
                }

                const cast = castResponse.data.cast.slice(0, 5);
                setReparto(cast);
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="container">
            <h1>Detalles de la Película</h1>
            {pelicula && (
                <div className="movie-details-box">
                    <PeliculaInfo pelicula={pelicula} />
                    <div className="row">
                        <Director director={director} />
                        <Reparto reparto={reparto} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default DetallesPelicula;
