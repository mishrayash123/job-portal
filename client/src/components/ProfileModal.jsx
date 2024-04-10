import React from 'react'
import ProfileCard from '../assets/profile-card.png'
import Saved from '../assets/saved.png'
import Help from '../assets/help.png'
import './ProfileModal.css'
import { Link } from 'react-router-dom'
import { useAuth } from "../AuthContext";

const ProfileModal = () => {
    const { logout} = useAuth();
  return (
    <div className='flex flex-col w-[343px] h-[280px] rounded-lg bg-[#FFFFFF] profileCard'>
        <div className='w-full h-[calc(280px-39px)] px-6 py-7 flex flex-col gap-y-4'>
            <p className='font-Roboto font-semibold text-[24px] leading-[28.13px] text-[#424242] '>zeenajalil@gmail.com</p>
            <div className='flex flex-col  pt-3'>
                <div className='flex items-center px-2 py-2 gap-x-2 hover:bg-lightBlue transition-all duration-200 rounded-md cursor-pointer'>
                    <img src={ProfileCard} alt="profile-card" />
                    <Link to='/profile' className='w-full'>
                    <p className='font-Roboto font-normal text-[16px] leading-[18.75px] text-[#424242]'>Profile</p>

                    </Link>
                </div>

                <div className='flex items-center px-2 py-2 gap-x-2 hover:bg-lightBlue transition-all duration-200 rounded-md cursor-pointer'>
                    <img src={Saved} alt="saved" />
                    <Link to='/my-jobs' className='w-full'>
                    <p className='font-Roboto font-normal text-[16px] leading-[18.75px] text-[#424242]'>My Jobs</p>

                    </Link>
                </div>

                <div className='flex items-center px-2 py-2 gap-x-2 hover:bg-lightBlue transition-all duration-200 rounded-md cursor-pointer'>
                    <img src={Help} alt="saved" />
                    
                    <p className='font-Roboto font-normal text-[16px] leading-[18.75px] text-[#424242]'>Help</p>
                </div>


            </div>
        </div>

        <div className='w-full h-[39px] flex justify-center items-center border-t-[1px] border-[#BBBBBB]'>
            <p className='font-Roboto font-medium text-[16px] leading-[18.75px] text-[#0F7DFF] cursor-pointer' onClick={logout}>Sign out</p>
        </div>
    </div>
  )
}

export default ProfileModal