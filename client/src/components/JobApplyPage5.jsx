import React from 'react'
import Freelance from '../assets/freelance.png'
import MailSent from '../assets/mail-sent.png'
import RightTick from '../assets/right_tick.png'
import { Link } from 'react-router-dom'


const JobApplyPage5 = () => {
    return (
        <div className='flex flex-col w-full  '>
            <div className='w-full h-[258px] bg-[#525CEB] px-[50px] my-auto'>
                <div className='w-[1085px] h-[163px] bg-[#ffffff] bg-opacity-20 flex flex-col justify-center pl-6 mt-8'>
                    <div className='flex flex-col gap-y-3'>
                        <p className='font-Roboto font-black text-[58px] leading-[67.97px] text-[#ffffff]'>Senior Health and Food</p>
                        <div className='flex gap-x-3 px-[18px] py-[6px] w-fit bg-[#FFFFFF] rounded-lg'>
                            <img src={Freelance} alt="freelance" />
                            <p className='font-Roboto font-extrabold text-[17px] leading-[19.92px] text-[#6F78EA]'>Freelance</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-20 py-20 flex justify-center items-center'>
                <div className='w-[649px] h-[675px] rounded-[20px] border-[0.5px] border-[#666666] gap-y-2 flex flex-col items-center justify-center'>
                    <img src={MailSent} alt="mailsent" />
                    <p className='font-Roboto font-bold text-[36px] leading-[42.19px] text-[#393939]'>Your application has been submitted!</p>
                    <div className='flex gap-x-2 items-center'>
                        <img src={RightTick} alt="right tick" />
                        <p className='font-Roboto font-normal text-[15px] leading-[17.58px]'>You will get an email confirmation at zeenajalail@gmail.com</p>
                    </div>

                    <Link className='py-8 w-full flex justify-center' to='/'>
                            <button className='px-[148px] py-[22px] rounded-lg border-[1px] border-darkBlue '>
                                <p className='font-Roboto font-bold text-[15px] leading-[17.58px]  text-darkBlue'>
                                        Return to job search
                                </p>
                            </button>

                        </Link>
                </div>
            </div>
        </div>
    )
}

export default JobApplyPage5