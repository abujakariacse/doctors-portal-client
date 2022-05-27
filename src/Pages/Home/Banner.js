import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className='bg-[url("https://i.ibb.co/TghrQxY/bg.png")] hero lg:my-32 my-12'>
            < div className="hero-content flex-col lg:flex-row-reverse" >
                <img src={chair} className="lg:max-w-md rounded-lg shadow-2xl" alt='chair_image' />
                <div className='mt-5'>
                    <h1 className="text-5xl font-bold text-gray-700">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div >
        </div >
    );
};

export default Banner;