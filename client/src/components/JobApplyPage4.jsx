import React from 'react'
import Freelance from '../assets/freelance.png'
import ArrowLeft from '../assets/arrow-left.png'
import './JobApplyPage4.css'
import Upload from '../assets/upload_blue.png'
import { Link } from 'react-router-dom'


const JobApplyPage4 = () => {
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

            <div className='flex justify-center items-center px-5 py-10'>
                <div className='w-[795px] flex flex-col gap-y-20'>
                    <div className='flex flex-col border-[0.5px] border-[#666666] rounded-[20px] px-4 py-5 gap-y-1'>
                        <p className='font-SofiaSans font-bold text-[24px] leading-[28.8px] pl-12'>Senior Health and Food</p>
                        <p className='font-Roboto font-normal text-[13px] leading-[15.23px] text-[#666666] pl-12'>Grand Central Pkwy Hollis NY 11003 India</p>
                    </div>

                    <div className='w-full h-[1668px] border-[0.5px] border-[#666666] rounded-[20px] flex flex-col py-12'>
                        <div className='w-[625px] mx-auto flex flex-col'>
                            <div className='flex flex-col gap-y-5 w-full'>
                                <div className='flex justify-between items-baseline'>
                                    <img src={ArrowLeft} alt="" />
                                    <p className='font-LeagueSpartan font-semibold text-[20px] leading-[22.4px] text-darkBlue'>Exit</p>
                                </div>
                                <div className="progress-bar-container">
                                    <div className="progress-bar" style={{ width: `${100}%` }}></div>
                                </div>
                            </div>
                            <p className='font-SofiaSans font-bold text-[32px] leading-[38.4px] py-8'>Please review your application</p>

                            <div className='flex flex-col gap-y-5 w-full mt-10'>
                                <div className='flex justify-between items-baseline'>
                                    <p className='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#666666]'>Contact Information</p>
                                    <p className='font-LeagueSpartan font-semibold text-[20px] leading-[22.4px] text-darkBlue underline cursor-pointer'>Edit</p>
                                </div>
                            </div>

                            <div className='w-full h-[539px] contactCard rounded-[18px] mt-7 '>
                                <div className='flex flex-col gap-y-3 px-5 py-9 border-b-[1px] border-[#BEBEBE]'>
                                    <p className='font-Roboto font-normal text-[20px] leading-[23.44px] text-[#666666]'>Full Name</p>
                                    <p className='font-LeagueSpartan font-bold text-[24px] leading-[26.88px] pl-10'>Zeena Jalil</p>
                                </div>

                                <div className='flex flex-col gap-y-3 px-5 py-9 border-b-[1px] border-[#BEBEBE]'>
                                    <p className='font-Roboto font-normal text-[20px] leading-[23.44px] text-[#666666]'>Email address</p>
                                    <p className='font-LeagueSpartan font-bold text-[24px] leading-[26.88px] pl-10'>zeenajalil@gmail.com</p>
                                </div>

                                <div className='flex flex-col gap-y-3 px-5 py-9 border-b-[1px] border-[#BEBEBE]'>
                                    <p className='font-Roboto font-normal text-[20px] leading-[23.44px] text-[#666666]'>Location</p>
                                    <p className='font-LeagueSpartan font-bold text-[24px] leading-[26.88px] pl-10'>Madurai, Tamilnadu</p>
                                </div>

                                <div className='flex flex-col gap-y-3 px-5 py-9 '>
                                    <p className='font-Roboto font-normal text-[20px] leading-[23.44px] text-[#666666]'>Phone</p>
                                    <p className='font-LeagueSpartan font-bold text-[24px] leading-[26.88px] pl-10'>+91 92353 239490</p>
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-5 w-full py-8 mt-10'>
                                <div className='flex justify-between items-baseline'>
                                    <p className='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#666666]'>CV</p>
                                    <p className='font-LeagueSpartan font-semibold text-[20px] leading-[22.4px] text-darkBlue underline cursor-pointer'>Edit</p>
                                </div>
                            </div>

                            <div className='w-full rounded-[18px] flex items-center gap-x-4 px-5 py-7 uploadCard'>
                                <img src={Upload} alt="upload" />
                                <p className='font-LeagueSpartan font-bold text-[24px] leading-[26.88px] text-darkBlue'>Zeenajalil.pdf</p>
                            </div>

                            <div className='flex flex-col gap-y-5 w-full py-8 mt-10'>
                                <div className='flex justify-between items-baseline'>
                                    <p className='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#666666]'>Contact Information</p>
                                    <p className='font-LeagueSpartan font-semibold text-[20px] leading-[22.4px] text-darkBlue underline cursor-pointer'>Add</p>
                                </div>
                            </div>

                            <div className='w-full rounded-[18px] flex items-center justify-center gap-x-4 px-5 py-7 uploadCard'>
                                <p className='font-Roboto font-medium text-[20px] leading-[23.44px] text-[#666666]'>No cover letter or additional documents included (optional)</p>
                            </div>

                            <Link className='py-8 w-full mt-[200px]' to='/job-apply/page-5'>
                                <button className='px-[202px] py-[22px] rounded-lg bg-darkBlue w-full'>
                                    <p className='font-Roboto font-bold text-[15px] leading-[17.58px] text-[#ffffff] uppercase'>
                                        Submit Your Application
                                    </p>
                                </button>

                            </Link>

                        </div>



                    </div>



                </div>
            </div>
        </div>
    )
}

export default JobApplyPage4