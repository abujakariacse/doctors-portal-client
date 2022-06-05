import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading/Loading';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [role, adminLoading] = useAdmin(user);
    if (adminLoading) {
        return <Loading />
    }
    return (
        <div className="drawer drawer-mobile" >
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mt-4 rounded-md" style={{ backgroundColor: "#F1F5F9" }}>
                <div className='mt-14 ml-3 lg:ml-14'>
                    <Outlet />
                </div>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Dashboard Menu</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><NavLink to='/dashboard/myreviews'>My Reviews</NavLink></li>
                    {
                        role === 'admin' && <>
                            <li><NavLink to='/dashboard/users'>All User</NavLink></li>
                            <li><NavLink to='/dashboard/adddoctor'>Add Doctor</NavLink></li>
                            <li><NavLink to='/dashboard/managedoctor'>Manage Doctors</NavLink></li>

                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;