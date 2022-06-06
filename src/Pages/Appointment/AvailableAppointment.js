import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import AppointmentService from './AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState({});
    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://intense-gorge-54941.herokuapp.com/availableSlots?date=${formattedDate}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h4 className='text-primary text-xl text-center'>Available Services on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-4'>
                {
                    services?.map(service => <AppointmentService
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AppointmentService>)
                }
            </div>
            {treatment && <BookingModal refetch={refetch} treatment={treatment} setTreatment={setTreatment} date={date}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;