import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../Shared/Loading/Loading';


const AddDoctor = () => {
    const { data: specialties, isLoading } = useQuery('specialties', () =>
        fetch('http://localhost:5000/specialties')
            .then(res => res.json()))
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const imageStorageKey = 'b058db99ef6ef26e591e1cb4a9526186';

    const onSubmit = data => {
        const img = data.img[0];
        const formData = new FormData();
        formData.append('image', img)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        phone: data.phone,
                        speciality: data.speciality,
                        img: img
                    }
                    fetch(`http://localhost:5000/doctor`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(success => {
                            if (success.insertedId) {
                                reset();
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Added',
                                    text: "Doctor has been added",
                                    showConfirmButton: false,
                                    timer: 1200

                                })
                            }
                            else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops',
                                    text: "Failed to add doctor",
                                    showConfirmButton: false,
                                    timer: 1200
                                })
                            }
                        })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Opps',
                        text: "Imaged not uploaded",
                        showConfirmButton: false,
                        timer: 1200
                    })
                }
            })
    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className='card-body'>
                <h2 className='text-3xl text-center'>Add a Doctor</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
                    {/* Name Field */}
                    <div className="form-control w-full max-w-xs">
                        <input {...register("name", {
                            required:
                            {
                                value: true,
                                message: 'Please enter a name'
                            },
                            minLength: {
                                value: 4,
                                message: 'Name Should be 4 charecter or longer'
                            }
                        })} type="text" placeholder="Doctor's Name" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="text-sm text-error">{errors.name.message}</span>}
                            {errors.name?.type === 'minLength' && <span className="text-sm text-error">{errors.name.message}</span>}
                        </label>
                    </div>
                    {/* Email Field */}
                    <div className="form-control w-full max-w-xs">
                        <input {...register("email", {
                            required: {
                                value: true,
                                message: 'Please enter a email address'
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Please Enter a valid email'
                            }
                        })} type="email" placeholder="Doctors Email" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="text-sm text-error">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="text-sm text-error">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <input {...register("phone", {
                            required: {
                                value: true,
                                message: 'Please enter a phone number'
                            },

                            pattern: {
                                value: /^[+0]{0,2}(91)?[0-9]{10}$/,
                                message: 'Please Enter a valid phone number'
                            }
                        })} type="number" placeholder="Doctors Phone" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="text-sm text-error">{errors?.phone?.message}</span>}
                            {errors.phone?.type === 'pattern' && <span className="text-sm text-error">{errors?.phone?.message}</span>}
                        </label>
                    </div>
                    <select {...register("speciality", {
                        required: { value: true, message: 'Please select one option' }
                    })} className="select select-bordered w-full max-w-xs mb-4">
                        {
                            specialties?.map(speciality => <option
                                key={speciality._id}
                            >{speciality.name}</option>)
                        }

                    </select>
                    <div className="form-control w-full max-w-xs">
                        <input {...register("img", {
                            required:
                            {
                                value: true,
                                message: 'Please upload a image'
                            }
                        })} type="file" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="text-sm text-error">{errors.img?.message}</span>}
                        </label>
                    </div>


                    {/* Submit Btn */}
                    <input className="btn btn-accent text-white w-full max-w-xs" type="submit" value='Add' />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;