import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const Users = () => {
    const { data, isLoading } = useQuery('users', () => fetch('http://localhost:5000/users')
        .then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl">All Users {data?.length}</h2>

        </div>
    );
};

export default Users;