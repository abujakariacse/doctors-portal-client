import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Swal from 'sweetalert2';
const Appointment = ({ appointment, serial }) => {
    const { patient, serviceName, date, slot } = appointment;
    const handleAppointmentDelete = e => {
        e.preventDefault();
        Swal.fire({
            title: 'Are You Sure?',
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#198754',
            showDenyButton: true,
            denyButtonText: 'No'
        })
            .then(result => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted',
                        text: 'Your Booked Appointment Has been Deleted',
                        showConfirmButton: false,
                        timer: 1200
                    })
                }
            })

    }
    return (
        <tbody>
            <tr>
                <th>{serial}</th>
                <td>{patient}</td>
                <td>{serviceName}</td>
                <td>{date}</td>
                <td>{slot}</td>
                <td><button onClick={handleAppointmentDelete} className='text-red-600 text-xl'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
            </tr>
        </tbody>
    );
};

export default Appointment;