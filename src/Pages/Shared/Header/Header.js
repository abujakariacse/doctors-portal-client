import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, NavLink, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = ({ children }) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    const logout = () => {
        signOut(auth);
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>

    }
    const menuItems = <>
        <li><NavLink className='rounded-md h-10 mr-4 font-bold' to='/'>Home</NavLink></li>
        <li><NavLink className='rounded-md h-10 mr-4 font-bold' to='/about'>About</NavLink></li>
        <li><NavLink className='rounded-md h-10 mr-4 font-bold' to='/appointment'>Appointment</NavLink></li>
        <li><NavLink className='rounded-md h-10 mr-4 font-bold' to='/reviews'>Reviews</NavLink></li>
        <li><NavLink className='rounded-md h-10 mr-4 font-bold' to='/contact'>Contact</NavLink></li>
        <li>{user ? <Link onClick={logout} to='#' className='rounded-md h-10 mr-4 font-bold'>Sign Out</Link> : <NavLink className='rounded-md h-10 mr-4 font-bold' to='/login'>Login</NavLink>}</li>
    </>;
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar">
                    <div className="flex-1 px-2 mx-2 font-bold text-2xl ml-14">Doctors Portal</div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal mr-14">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 drw">
                    {
                        menuItems
                    }

                </ul>

            </div>
        </div>
    );
};

export default Header;