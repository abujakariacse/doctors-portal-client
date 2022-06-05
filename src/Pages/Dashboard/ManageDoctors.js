import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../Shared/Loading/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctors', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDoctorDelete = doctor => {
        Swal.fire({
            title: 'Delete',
            text: 'Are you sure to delete the Doctor?',
            icon: 'warning',
            showConfirmButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#198754',
            showDenyButton: true,
            denyButtonText: 'No'
        })
            .then(result => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/deletedoctor/${doctor?.email}`, {
                        method: 'DELETE',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            Swal.fire({
                                icon: 'success',
                                title: 'Deleted',
                                text: 'Doctor has been successfully deleted',
                                showConfirmButton: false,
                                timer: 1200
                            })
                            refetch();
                        })
                }
            })

    }
    return (
        <div>
            <h2 className='text-3xl'>Manage Doctors</h2>
            <table className="table w-full lg:w-11/12 mt-7">
                <thead style={{ backgroundColor: '#E6E6E6' }}>
                    <tr>
                        <th>Serial No.</th>
                        <th>Avatar</th>
                        <th>Doctors Name</th>
                        <th>Speciality</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    doctors?.map((doctor, index) => <tbody
                        key={doctor._id}>
                        <tr>
                            <th>{index + 1}</th>
                            <td><span className="avatar online">
                                <span className="w-16">
                                    <img className='rounded-full' src={doctor.img} alt='' />
                                </span>
                            </span></td>
                            <td>{doctor.name}</td>
                            <td>{doctor.speciality}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.phone}</td>
                            <td><button onClick={() => handleDoctorDelete(doctor)} className='text-red-600 text-xl'><FontAwesomeIcon icon={faTrash
                            }></FontAwesomeIcon></button></td>
                        </tr>
                    </tbody>)
                }
            </table>
        </div>
    );
};

export default ManageDoctors;