import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Swal from 'sweetalert2';

const User = ({ user, serial, refetch }) => {
    const { email, role } = user;
    const handleMakeAdmin = () => {
        fetch(`https://intense-gorge-54941.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops',
                        text: "You haven't access to make an Admin",
                        showConfirmButton: false,
                        timer: 1200
                    })
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'Maked Admin',
                        text: 'User has been successfully converted to Admin',
                        showConfirmButton: false,
                        timer: 1200
                    })
                }
            })
    }
    const handleDeleteApi = () => {
        fetch(`https://intense-gorge-54941.herokuapp.com/user/delete/${email}`, {
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
                        title: 'Deleted',
                        text: 'User has been successfully deleted',
                        showConfirmButton: false,
                        timer: 1200
                    })
                }
            })
    }
    const deleteAlert = () => {
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
                    handleDeleteApi();
                }
            })
    }
    const handleRemoveAdmin = () => {
        fetch(`https://intense-gorge-54941.herokuapp.com/admin/remove/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Opps',
                        text: "You haven't access to remove an Admin",
                        showConfirmButton: false,
                        timer: 1600
                    })
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: 'Removed as Admin',
                        text: 'Successfully removed as admin',
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
                <td>{role !== 'admin' && <button onClick={handleMakeAdmin} className="btn btn-xs btn-primary text-white">Make Admin</button>}</td>
                <td>{role === 'admin' && <button onClick={handleRemoveAdmin} className="btn btn-xs btn-error text-white">Remove as Admin</button>}</td>

                <td><button onClick={deleteAlert} className='text-red-600 text-xl'><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></td>
            </tr>
        </tbody>
    );
};

export default User;