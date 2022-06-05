import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctors').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl'>Manage Doctors</h2>
            <table className="table w-full lg:w-11/12 mt-7">
                <thead style={{ backgroundColor: '#E6E6E6' }}>
                    <tr>
                        <th>Serial No.</th>
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
                            <td>{doctor.name}</td>
                            <td>{doctor.speciality}</td>
                            <td>{doctor.email}</td>
                            <td>{doctor.phone}</td>
                            <td><button className='text-red-600 text-xl'><FontAwesomeIcon icon={faTrash
                            }></FontAwesomeIcon></button></td>
                        </tr>
                    </tbody>)
                }
            </table>
        </div>
    );
};

export default ManageDoctors;