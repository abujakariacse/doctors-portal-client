import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import Appointment from '../../../assets/images/appointment.png';

const AppointmentBanner = () => {
    return (
        <div className="hero lg:w-lg mt-24">
            <div style={{ background: `url(${Appointment})` }} className="bg-cover hero-content grid grid-cols-1 lg:grid-cols-2 rounded-sm mb-[30px]">
                <img src={doctor} className="max-w-sm rounded-lg mt-[-100px] mb-[-20px] hidden lg:block" alt='appointment_banner' />
                <div>
                    <p className="font-bold text-primary">Appointment</p>
                    <h1 className='text-3xl font-bold text-white'>Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary rounded-md">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;