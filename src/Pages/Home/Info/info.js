import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const info = () => {
    const infos = [
        { _id: 1, img: clock, title: 'Opening Hours', description: '9:00 am -  10:00 pm', bgColor: 'bg-gradient-to-r from-secondary to-primary' },
        { _id: 2, img: marker, title: 'Visit our location', description: 'Brooklyn, NY 10036, United States', bgColor: 'accent' },
        { _id: 3, img: phone, title: 'Contact us now', description: '+8801316460386', bgColor: 'bg-gradient-to-r from-secondary to-primary' }
    ];
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-11'>
            {
                infos.map(info => <InfoCard key={info._id} info={info}></InfoCard>)
            }
        </div>
    );
};

export default info;