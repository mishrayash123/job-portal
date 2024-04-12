import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const PostJob = () => {
    return (
        <div className='flex flex-col w-full'>
            <Navbar />
            <div className='flex flex-col w-full'>
                <Outlet/>
            </div>
            
            <Footer/>
            {/* Button to navigate to CreateAccount page */}
            <Link to='/create-account'>
                <button className='px-[68px] py-[22px] w-fit rounded-lg bg-darkBlue flex items-center gap-x-2'>
                    <p className='uppercase font-Roboto font-black text-[20px] leading-[23.44px] text-[#ffffff]'>Create Account</p>
                </button>
            </Link>
        </div>
    )
}

export default PostJob;
