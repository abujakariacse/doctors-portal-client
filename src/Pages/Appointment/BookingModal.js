import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2';
const BookingModal = ({ treatment, setTreatment, date, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const handleFormSubmitOnModal = e => {
        e.preventDefault();
        const userName = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const slot = e.target.slot.value;
        console.log(_id, slot, name, phone, email);
        const booking = {
            bookingId: _id,
            serviceName: name,
            date: format(date, 'PP'),
            slot: slot,
            patient: userName,
            patientEmail: email,
            phone: phone
        };
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Service Booked',
                        showConfirmButton: false,
                        timer: 1200
                    })
                }

            })
        refetch();
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">{name}</h3>
                    <form onSubmit={handleFormSubmitOnModal} className='grid grid-cols-1 gap-5 justify-items-center mt-4'>
                        <input disabled readOnly type="text" defaultValue={format(date, 'PP')} className="input input-bordered w-full max-w-xs font-bold" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots?.map(slot => <option
                                    key={Math.random() * 10}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full max-w-xs font-bold" required />
                        <input name='phone' type="number" placeholder='Phone Number' className="input input-bordered w-full max-w-xs" required />
                        <input name='email' type="email" defaultValue={user?.email} disabled className="input input-bordered w-full max-w-xs font-bold" required />
                        <input type="submit" className='btn btn-primary w-full max-w-xs text-white' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;