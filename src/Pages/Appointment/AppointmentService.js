import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg  shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl text-primary">{name}</h2>
                <p>{
                    slots.length ? <span className='font-bold'>{slots[0]}</span> : <span className='text-red-500'>Try Another Day</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                        className="modal-button btn btn-primary uppercase text-white"
                        onClick={() => setTreatment(service)}
                        disabled={!slots.length}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;