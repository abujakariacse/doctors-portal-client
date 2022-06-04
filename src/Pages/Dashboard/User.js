import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Swal from 'sweetalert2';

const User = ({ user, serial, refetch }) => {
    const { email, role } = user;
    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                Swal.fire({
                    icon: 'success',
                    title: 'Maked Admin',
                    text: 'User has been successfully converted to Admin',
                    showConfirmButton: false,
                    timer: 1200
                })
            })
    }
    const handleUserDelete = () => {
        Swal.fire({
            title: 'Delete',
            text: 'Are you sure to delete the user?',
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
                        text: 'User has been successfully Deleted',
                        showConfirmButton: false,
                        timer: 1200
                    })
                }
            })
    }
    return (
        <tbody
            key={user._id}>
            <tr>
                <th>{serial}</th>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={handleMakeAdmin} className="btn btn-xs">Make Admin</button>}</td>
                <td><button onClick={handleUserDelete} className='text-red-600 text-xl'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
            </tr>
        </tbody>
    );
};

export default User;