import React from 'react';

const Reparto = ({ reparto }) => {
    return (
        <div className="col-lg-6">
            <h3>Reparto:</h3>
            <ul>
                {reparto.map(actor => (
                    <li key={actor.id}>{actor.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Reparto;