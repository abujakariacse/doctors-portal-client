import React from 'react';

const Review = ({ review }) => {
    const { img, reviewText, name, location } = review;
    return (
        <div class="card lg:max-w-lg w-11/12 mx-auto bg-base-100 shadow-xl mb-11 py-8">
            <div class="card-body">
                <p className='text-black'>{reviewText}</p>
            </div>
            <div className='pl-8 flex items-center'>
                <div class="avatar">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div className='text-left'>
                    <h2 className='text-xl font-bold'>{name}</h2>
                    <h4 className='text-base'>{location}</h4>
                </div>
            </div>
        </div>
    );
};

export default Review;