import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton';
import Appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{ background: `url(${Appointment})` }}>
            <div className='py-16'>
                <div className='text-center'>
                    <h4 className='text-xl text-primary'>Contact Us</h4>
                    <h2 className='text-4xl text-white'>Stay Connected With Us</h2>
                </div>
                <div className='flex justify-center' >
                    <form className='pt-10 mx-auto text-center'>
                        <input type="email" placeholder="Email Address" className="input input-bordered w-96 lg:block mb-5" required />
                        <input type="text" placeholder="Subject" className="input input-bordered w-96 lg:block mb-5" />
                        <textarea className="textarea textarea-bordered h-24 w-96 resize-none lg:block mb-5" placeholder="Your Message" required ></textarea>
                        <PrimaryButton >Submit</PrimaryButton>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Contact;