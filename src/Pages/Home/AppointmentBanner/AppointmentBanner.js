import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import Appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton';

const AppointmentBanner = () => {
    return (
        <div className="hero lg:mt-40 mt-16 mb-20" style={{ background: `url(${Appointment})` }} >
            <div className="bg-cover hero-content grid grid-cols-1 lg:grid-cols-2 rounded-sm mb-[-35px]">
                <img src={doctor} className=" rounded-lg mt-[-140px] hidden lg:block" alt='appointment_banner' />
                <div className='py-28'>
                    <p className="font-bold text-primary">Appointment</p>
                    <h1 className='text-3xl font-bold text-white'>Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;