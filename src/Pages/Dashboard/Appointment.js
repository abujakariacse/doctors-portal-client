import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Swal from 'sweetalert2';
const Appointment = ({ appointment, serial, refetch }) => {
    const { _id, patient, serviceName, date, slot } = appointment;

    //    Tried but not working
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
                    fetch(`https://intense-gorge-54941.herokuapp.com/booking/delete/${_id}`, {
                        method: 'DELETE',
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                refetch();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Appointment Removed',
                                    text: 'Appointment successfully removed',
                                    showConfirmButton: false,
                                    timer: 1200
                                })
                            }
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