import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
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
            <div>
                <div className="hero lg:w-2/3 mx-auto lg:mt-20">
                    <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='treatment' />
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold text-accent">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6 text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary text-white font-bold">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Services;