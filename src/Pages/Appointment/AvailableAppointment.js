import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-primary text-xl text-center'>Available Services on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppointmentService>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;