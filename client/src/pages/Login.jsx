import React from 'react'
import LoginImage from '../assets/Login Page SVG.svg'
import GoogleLogo from '../assets/google.svg'
import AppleLogo from '../assets/apple.svg'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex items-center w-full px-10 max-h-[720px] box-border overflow-hidden'>
            <div className='flex h-[791px] w-1/2 justify-center items-center'>
                <div className='flex flex-col w-[541px] h-[577px] rounded-3xl justify-center items-center loginCard gap-y-8'>
                    <div className='flex flex-col gap-y-1 justify-center items-center'>
                        <p className='font-Inter font-medium text-[32px] leading-[38.73px] text-[#000000]'>Welcome Back!</p>
                        <p className='font-Inter font-medium text-[15px] leading-[18.15px] text-[#000000]'>Please Enter Your Details</p>
                    </div>

                    <div className='flex flex-col gap-y-5' >
                        <input className='w-[369px] h-[54px] rounded-2xl border-[1px] border-[#989898] pl-5 font-Inter font-medium text-[16px] leading-[19.36px] outline-[#989898] text-[#5B5B5B]'
                            type='text'
                            placeholder='Enter your Email'
                        />
                        <button className='px-[153px] py-[14px] w-fit rounded-2xl bg-[#33B249] '>
                            <p className='font-Inter font-semibold text-[14px] leading-[16.94px] text-[#ffffff]'>
                                <Link to='/'>
                                    Continue
                                </Link>
                            </p>
                        </button>
                    </div>

                    <div className='w-[364px] border-[1px] border-[#989898]'></div>

                    <div className='flex flex-col gap-y-4'>
                        <button className='flex w-[369px] items-center h-[54px] rounded-2xl border-[1px] border-[#989898] gap-x-3'>
                            <img src={GoogleLogo} alt="google logo" className='pl-5' />
                            <p className='font-Inter font-medium text-[16px] leading-[19.36px] text-[#1A1A1A] '>Continue With Google</p>
                        </button>
                        <button className='flex w-[369px] items-center h-[54px] rounded-2xl border-[1px] border-[#989898] gap-x-3'>
                            <img src={AppleLogo} alt="google logo" className='pl-5' />
                            <p className='font-Inter font-medium text-[16px] leading-[19.36px] text-[#1A1A1A] '>Continue With Apple</p>
                        </button>
                    </div>

                    <div className='flex w-fit h-[16px] items-center gap-x-1'>
                        <p>Don’t have an account?</p>
                        <Link to='/signup' className='text-[#1E93FF] underline'>
                            Sign Up
                        </Link>
                    </div>
                </div>

            </div>
            <div className='flex w-1/2 '>
                <img src={LoginImage} alt="loginimage" className='w-[791px] object-cover' />
            </div>
        </div>

    )
}

export default Login