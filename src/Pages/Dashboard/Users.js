import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import User from './User';

const Users = () => {
    const { data, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl mb-6">All Users</h2>
            <table className="table w-full lg:w-11/12">
                <thead style={{ backgroundColor: '#E6E6E6' }}>
                    <tr>
                        <th>Serial No.</th>
                        <th>Patient Name</th>
                        <th>Role</th>
                        <th>Remove Role</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    data?.map((user, index) => <User
                        key={user._id}
                        user={user}
                        serial={index + 1}
                        refetch={refetch}
                    ></User>)
                }
            </table>

        </div>
    );
};

export default Users;