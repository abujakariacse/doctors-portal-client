import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ForgotPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    // React Hook Forms
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        sendPasswordResetEmail(data?.email)
    }
    if (sending) {
        toast('Please check your inbox');
    }
    if (error) {
        toast('Reset Failed')
    }

    return (
        <div className='flex justify-center h-screen items-center'>
            <div className="card w-96 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-xl text-center">Reset Password</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-accent w-full max-w-xs text-white' type="submit" value='Reset Password' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;