import React from 'react';

const InfoCard = ({ info }) => {
    const { img, title, description, bgColor } = info;
    return (
        <div className={`card lg:card-side bg-accent shadow-xl rounded-md lg:text-left text-center ${bgColor}`} >
            <figure>
                <img className='lg:pl-5 pt-5' src={img} alt="Album" />
            </figure >
            <div className="card-body text-white">
                <h2 className="text-2xl">{title}</h2>
                <p>{description}</p>

            </div>
        </div >
    );
};

export default InfoCard;