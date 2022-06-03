import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import Appointment from './Appointment';


const MyAppointments = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { data, isLoading } = useQuery('appointments', () => fetch(`http://localhost:5000/myappointments?email=${user?.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 401 || res.status === 403) {
                navigate('/');
                signOut(auth);
                localStorage.removeItem('accessToken');
            }
            return res.json()
        }))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl font-serif mb-6'>My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table w-full lg:w-11/12">
                    <thead style={{ backgroundColor: '#E6E6E6' }}>
                        <tr>
                            <th></th>
                            <th>Patient Name</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th> </th>
                        </tr>
                    </thead>
                    {
                        data?.map((appointment, index) => <Appointment
                            serial={index + 1}
                            key={appointment._id}
                            appointment={appointment}></Appointment>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;