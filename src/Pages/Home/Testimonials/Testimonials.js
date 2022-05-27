import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from '../Review/Review';

const Testimonials = () => {
    const reviews = [
        { _id: 1, reviewText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rerum!', img: people1, name: 'Willium Sen', location: 'California' },
        { _id: 2, reviewText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rerum!', img: people2, name: 'Sara Sullivan', location: 'New York' },
        { _id: 3, reviewText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, rerum!', img: people3, name: 'Sabrina Sullivan', location: 'Virginia' }

    ];
    return (
        <section className='lg:px-14 text-center lg:mb-36'>
            <div className='flex items-center'>
                <div className='flex-1'>
                    <h2 className='text-xl text-primary'>Testimonial</h2>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='lg:w-48 w-12' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;