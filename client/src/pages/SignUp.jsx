import React from 'react'
import SignUpLogo from '../assets/SignUpPage SVG.svg'
import './Login.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className='flex justify-center items-center overflow-y-hidden gap-x-10 max-h-[720px]'>
            <div className='flex flex-col w-1/2 gap-3 justify-center items-center pt-20'>
                <div className='flex flex-col place-content-start gap-6'>
                    <p className='font-Inter font-medium text-[32px] leading-[38.73px] text-[#4B4B4B] w-[410px] text-left'>Are you ready to start your career NOW !</p>
                    <p className='font-Inter font-medium text-[14px] leading-[16.94px] text-[#4B4B4B] w-[467px]'>
                        Lorem ipsum dolor sit amet consectetur. Morbi dui bibendum integer
                        eget dolor fringilla faucibus. Amet pretium.
                    </p>
                </div>

                <img src={SignUpLogo} alt="signupLogo" className='w-fit' />
            </div>
            <div className='flex flex-col justify-center items-center w-1/2 gap-y-4'>
                <div className='w-[541px] h-[691px] rounded-3xl loginCard flex flex-col justify-center items-center gap-6'>
                    <p className='font-Inter font-medium text-[32px] leading-[38.73px] text-[#000000] pb-5'>Fill in your details</p>

                    <div className='flex flex-col gap-x-3 gap-y-3 pb-4'>
                        <input
                            className='w-[360px] h-[54px] font-Inter font-medium text-[16px] leading-[19.36px] text-[#7D7D7D] outline-none border-b-[1px] border-[#989898] pt-6'
                            type="text"
                            placeholder='Full Name'
                        />
                        <input
                            className='w-[360px] h-[54px] font-Inter font-medium text-[16px] leading-[19.36px] text-[#7D7D7D] outline-none border-b-[1px] border-[#989898] pt-6'
                            type="text"
                            placeholder='User Name'
                        />
                        <input
                            className='w-[360px] h-[54px] font-Inter font-medium text-[16px] leading-[19.36px] text-[#7D7D7D] outline-none border-b-[1px] border-[#989898] pt-6'
                            type="email"
                            placeholder='Email'
                        />
                        <input
                            className='w-[360px] h-[54px] font-Inter font-medium text-[16px] leading-[19.36px] text-[#7D7D7D] outline-none border-b-[1px] border-[#989898] pt-6'
                            type="password"
                            placeholder='Password'
                        />
                    </div>

                    <div className='flex gap-x-6 items-center w-[360px] pb-2'>
                        <div className='flex gap-x-1'>
                            <input
                                type="radio"
                                name="accountType"
                                value='Candidate'
                                id="accountType" />
                            <label htmlFor="accountType">Candidate</label>
                        </div>
                        <div className='flex gap-x-1'>
                            <input
                                type="radio"
                                name="accountType"
                                value='Recruiter'
                                id="accountType" />
                            <label htmlFor="accountType">Recruiter</label>
                        </div>

                    </div>

                    <div className='flex items-center w-[360px] gap-x-1'>
                        <input type="checkbox" name="terms" id="terms" />
                        <div className='flex items-center w-full gap-x-1'>
                            <p className='font-Inter font-medium text-[12px] leading-[14.52px]'>I agree to all statements including in </p>
                            <span className='font-Inter font-medium text-[12px] leading-[14.52px] text-[#1E93FF] underline'>Terms of Service.</span>
                        </div>

                    </div>

                    <div className='flex justify-between w-[360px] items-center'>
                        <div className='px-[44px] py-[14px] bg-[#33B249]'>
                            <p className='text-[#ffffff] font-Inter text-[14px] leading-[16.94px] font-semibold'>Register Now</p>
                        </div>
                        <p className='text-[#1E93FF] font-Inter font-semibold text-[13px] leading-[15.73px] underline'>
                            <Link to='/login'>
                                I am already a member
                            </Link>

                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SignUp