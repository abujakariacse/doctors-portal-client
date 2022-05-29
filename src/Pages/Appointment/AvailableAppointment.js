import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <h4 className='text-secondary text-xl text-center'>Available Services on {format(date, 'PP')}</h4>

        </div>
    );
};

export default AvailableAppointment;