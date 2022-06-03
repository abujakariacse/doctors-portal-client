import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                    <li><Link to='/dashboard/myreviews'>My Reviews</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;