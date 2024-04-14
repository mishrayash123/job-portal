import React, { useEffect, useState } from 'react'
import { MdOutlineSearch } from "react-icons/md";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BsFillBellFill } from "react-icons/bs";
import User from '../assets/User.png'
import './Navbar.css'
import ProfileModal from './ProfileModal';
import { useAuth } from "../AuthContext";

const Navbar = () => {
    const { isLoggedIn} = useAuth();

    const location = useLocation();
    const [activeNavLink, setActiveNavLink] = useState(null);

    const [showModal, setShowModal] = useState(false);

    const handleClick = (event) => {
        event.preventDefault(); // Prevent default navigation behavior
        setShowModal(prevState => !prevState); // Show the modal
    };

    useEffect(() => {
        setActiveNavLink(location.pathname);
    }, [location]);

    // const handlePostJobClick = () => {
    //     // If employee account exists, show success message and navigate to job post page
    //     if (employeeAccountExists) {
    //         alert('Employee account exists. Redirecting to job post page.');
    //         // Navigate to job post page
    //         window.location.href = '/job-post';
    //     } else {
    //         // If employee account doesn't exist, show error message and redirect to create account page
    //         alert('Employee account does not exist. Redirecting to create account page.');
    //         // Redirect to create account page
    //         window.location.href = '/createAccount';
    //     }
    return (
        <div className='bg-[#3D3B40] bg-opacity-80  h-[92px] w-full flex  justify-center items-center relative top-0 z-50'>
            <div className='flex items-center justify-between h-[47px] w-[1282px] relative opacity-100'>
                <div className='flex justify-between items-center leading-[46.88px] gap-x-10 z-[500]'>
                    <p className='font-Roboto text-[#ffffff] font-[900] text-[40px] leading-[46.88px] z-[5000] bg-opacity-70'>Robto</p>

                    <div className='w-[319px] h-fit gap-[10px] relative'>
                        <MdOutlineSearch className="absolute top-2 left-3 w-[31px] h-[31px]" />
                        <input
                            type="text"
                            className="bg-[#ffffff] text-[#666666] rounded-md pl-14 w-full font-SofiaSans font-semibold "
                            placeholder='Search' />
                    </div>
                </div>

                <div className='flex justify-center items-center gap-x-10'>
                    <div className='flex gap-x-10 justify-between items-center font-Roboto font-bold'>
                        <NavLink exact to='/' className='flex flex-col'>
                            <p className='text-[#ffffff] leading-[28.13px] text-[24px]'>Home</p>
                            {activeNavLink === '/' && <div className='w-full h-1 bg-[#ffffff] line' />}
                        </NavLink>
                        <NavLink exact to='/job' className='flex flex-col'>
                            <p className='text-[#ffffff] leading-[28.13px] text-[24px]'>Job</p>
                            {activeNavLink === '/job' && <div className='w-full h-1 bg-[#ffffff] line' />}
                        </NavLink>
                    </div>
                    <NavLink exact to='/notification'>
                        <BsFillBellFill className='text-[#ffffff] w-[27.17px] h-[35.39px]' />
                        {activeNavLink === '/notification' && <div className='w-full h-1 bg-[#ffffff] line' />}
                    </NavLink >

                    {
                        isLoggedIn ?
                            (
                                <>
                                    <NavLink exact to='/profile' onClick={handleClick}>
                                        <img src={User} alt="user" className='w-[41.67px] h-[41.67px]' />
                                        {/* You can add conditional styling for the active NavLink here */}
                                        {/* {activeNavLink === '/profile' && <div className='w-full h-1 bg-[#ffffff] line' />} */}
                                    </NavLink>
                                    {showModal && (
                                        <div className='absolute top-[100%]'>
                                            <ProfileModal />
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                </>
                            )
                    }
                    {isLoggedIn ?
                        (<>
                            <button className='h-[41px] w-fit rounded-md bg-darkBlue px-[28px] py-[10px] '>
                                <Link to='/job-post' >
                                    <p className='text-[#ffffff] leading-[21.09px] font-bold font-Roboto text-[18px]'>Post job</p>
                                </Link>
                            </button>
                        </>)
                        :
                        (
                            <>
                                <button className='h-[41px] w-[107px] rounded-md bg-darkBlue px-[28px] py-[10px] '>
                                    <Link to='/login'>
                                        <p className='text-[#ffffff] leading-[21.09px] font-bold font-Roboto text-[18px]'>Login</p>
                                    </Link>
                                </button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>

    )
}

export default Navbar