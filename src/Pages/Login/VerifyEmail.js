import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const VerifyEmail = () => {
    const [user] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const handleEmailVerification = () => {
        sendEmailVerification(user?.email);
        toast("Email sent");
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>
                <div className='flex justify-center items-center'>
                    <span className='text-6xl bg-orange-200 p-6 rounded-full'><FontAwesomeIcon icon={faEnvelopeOpen} className='text-green-600'></FontAwesomeIcon></span>
                </div>
                <div className='flex justify-center '>
                    <div className='w-1/3'>
                        <h2 className='text-2xl text-center mt-3 font-mono'>Verify Your Email</h2>
                        <p className='text-base font-mono mt-3'>We have sent an email to {user?.email} to verify your email address and active your account. The link in the email will expire in 24 hours</p>
                        <p className='text-base mt-4'><button onClick={handleEmailVerification} className='text-primary text-lg font-mono mr-3'>Click here</button> if you didn't receive an email or would like to change the email address you signed up with</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;