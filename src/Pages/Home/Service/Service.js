import React from 'react';

const Service = ({ service }) => {
    const { img, name, description } = service;
    return (
        <div className='card shadow-2xl rounded-lg lg:text-left text-center mb-8'>
            <figure>
                <img className='lg:pl-5 pt-5' src={img} alt="Album" />
            </figure >
            <div className="card-body text-center text-gray-700">
                <h2 className="text-xl">{name}</h2>
                <p className='text-sm'>{description}</p>

            </div>
        </div >
    );
};

export default Service;