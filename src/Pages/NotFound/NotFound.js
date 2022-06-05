import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NotFound = () => {
    return (
        <div className='lg:mt-16'>
            <h4 className='text-center'>
                <FontAwesomeIcon className='text-8xl text-gray-500' icon={faFaceFrown}></FontAwesomeIcon>
            </h4>
            <h1 className='text-center font-mono text-2xl mt-4'>Sorry, Page Not Found</h1>
            <p className='text-center font-mono mt-4 text-gray-500 text-xl'>The page you are looking for doesn't exist or an other error occurred.<br />
                Go back, or head over to maczone.com to choose a new direction</p>
        </div>
    );
};

export default NotFound;