import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from '../Service/Service';


const Services = () => {
    const services = [
        { _id: 1, img: fluoride, name: 'Fluoride Treatment', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
        { _id: 2, img: cavity, name: 'Cavity Filling', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
        { _id: 3, img: whitening, name: 'Teeth Whitening', description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
    ];
    return (
        <div className='mt-28'>
            <h1 className='text-xl text-secondary text-center font-bold'>OUR SERVICES</h1 >
            <h2 className='text-3xl text-center'>Services We Provide</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 px-5 lg:w-11/12 mx-auto mt-20'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div >
    );
};

export default Services;