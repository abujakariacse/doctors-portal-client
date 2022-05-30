import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { _id, name, slots } = treatment;
    const handleFormSubmitOnModal = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const slot = e.target.slot.value;
        console.log(_id, slot, name, phone, email);
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
                        <input name='name' type="text" placeholder='Full Name' className="input input-bordered w-full max-w-xs" required />
                        <input name='phone' type="text" placeholder='Phone Number' className="input input-bordered w-full max-w-xs" required />
                        <input name='email' type="email" placeholder='Email' className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" className='btn btn-primary w-full max-w-xs' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;