import React from 'react';

const Director = ({ director }) => {
    return (
        <div className="col-lg-6">
            <h3>Director:</h3>
            <p>{director}</p>
        </div>
    );
};

export default Director;