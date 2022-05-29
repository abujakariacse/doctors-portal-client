import React from 'react';
import { Link } from 'react-router-dom';
import FooterImg from '../../../assets/images/footer.png';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer style={{ background: `url(${FooterImg})`, backgroundSize: 'cover' }}>
            <div className="footer p-10">

                <div>
                    <span className="footer-title">Services</span>
                    <Link to='' className="link link-hover">Emergency Checkup</Link>
                    <Link to='' className="link link-hover">Monthly Checkup</Link>
                    <Link to='' className="link link-hover">Weekly Checkup</Link>
                    <Link to='' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='' className="link link-hover">Fluoride Treatment  </Link>
                    <Link to='' className="link link-hover">Cavity Filling</Link>
                    <Link to='' className="link link-hover">Teath Whitening</Link>

                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='' className="link link-hover">Terms of use</Link>
                    <Link to='' className="link link-hover">Privacy policy</Link>
                    <Link to='' className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='mb-5'>
                <p className='text-center text-xs lg:text-base'>Copyright © {year} - All Rights Reserved By Doctors Portal</p>
            </div>
        </footer>
    );
};

export default Footer;