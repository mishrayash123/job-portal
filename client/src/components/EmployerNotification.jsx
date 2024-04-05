import React from 'react'
import Navbar from './Navbar'
import ArrowLeftWhite from '../assets/arrow-left-white.png'
import { Link } from 'react-router-dom'
import NotificationPhone from '../assets/notification-phone.png'
import Footer from './Footer'
import Zj from '../assets/zj.jpg'

const EmployerNotification = () => {
    return (
        <div className='flex flex-col w-full'>
            <Navbar />
            <div className='w-full h-[258px] bg-darkBlue flex justify-between'>
                <div className='flex flex-col px-[100px] py-[50px]'>
                    <Link to='/employer/account'>
                        <img src={ArrowLeftWhite} alt="" />

                    </Link>
                    <p className='font-Roboto font-black text-[58px] leading-[67.97px] text-[#ffffff]'>Notifications</p>
                </div>

                <div className='-mt-[2%] '>
                    <img src={NotificationPhone} alt="notification" className='object-contain' />
                </div>

            </div>

            <div className='pt-[100px] pb-[300px] w-full flex justify-center flex-col items-center'>
                <div className='w-[795px] h-[421px] flex flex-col border-[0.5px] border-[#666666] rounded-md'>
                    <div className='flex flex-col w-[729.5px] mx-auto'>
                        <div className='flex justify-between py-4 items-center'>
                            <p className='font-Roboto font-medium text-[20px] leading-[23.44px] text-[#414141]'>Senior Health and Food</p>
                            <button className='px-[26px] py-[10px] rounded-lg w-fit bg-[#2E216B]'>
                                <p className='font-Roboto font-medium text-[13px] leading-[15.23px] text-[#ffffff]'>13 New Application</p>
                            </button>
                        </div>

                        <div className='border-[1px] border-[#858585]'></div>

                        <div className='w-full flex justify-between items-center  pt-5 '>
                            <div className='flex gap-x-2 items-center py-4'>
                                <img src={Zj} alt="zj" className='w-[26px] h-[26px]' />
                                <p className='font-Roboto font-normal text-[20px] leading-[23.44px] text-[#414141]'>Zeena Jalil </p>
                            </div>
                            <div className='flex gap-x-2 items-center py-4'>
                                <p className='font-Roboto font-normal text-[15px] leading-[17.58px] text-[#414141]'>Senior Health and Food</p>
                                <p className='font-Roboto font-normal text-[7px] leading-[8.2px] text-[#414141]'>1 Day Ago</p>
                            </div>
                            <div>
                                <Link to='/candidate-detail'>
                                    <p className='font-Roboto font-medium text-[13px] leading-[15.23px] text-[#525CEB] underline cursor-pointer' >View Candidate Detail</p>

                                </Link>
                            </div>
                        </div>
                        <div className='w-full border-[1px] border-[#E1E1E1]'></div>

                    </div>
                </div>
            </div>

            <Footer />


        </div>
    )
}

export default EmployerNotification