import React, { useState } from 'react'
import SignUpLogo from '../assets/SignUpPage SVG.svg'
import './Login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';
const SignUp = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        Conditions: '',
        Type: '',
      });
    
      const history = useNavigate();
    
      const { fullname, username, email, password, Conditions, Type } = formData;
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { data } = await fetch('http://localhost:3000/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }).then((res) => res.json());
    
        if (data.sessionToken) {
          localStorage.setItem('sessionToken', data.sessionToken);
          history('/dashboard');
        }
      };
    
  

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
            <form onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center items-center w-1/2 gap-y-4'>
                <div className='w-[541px] h-[691px] rounded-3xl loginCard flex flex-col justify-center items-center gap-6'>
                    <p className='font-Inter font-medium text-[32px] leading-[38.73px] text-[#000000] pb-5'>Fill in your details</p>

                    <div className='flex flex-col gap-x-3 gap-y-3 pb-4'>
                    <input
                            className='w-[360px] h-[54px] font-Inter font-medium text-[16px] leading-[19.36px] text-[#7D7D7D] outline-none border-b-[1px] border-[#989898] pt-6'
                            type="text"
              name="fullname"
              id="fullname"
              value={fullname}
              onChange={handleChange}
              placeholder='Full Name'
              required

                          
                        />
                        <input
                            className='w-full h-[54px] font-Inter font-medium text-[16px] leading-[19.36px] text-[#7D7D7D] outline-none border-b-[1px] border-[#989898] pt-6'
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={handleChange}
                            required
                            placeholder='User Name'
                        />
                        <input
                            className='w-full h-[54px] font-Inter font-medium text-[16px] leading-[19.36px] text-[#7D7D7D] outline-none border-b-[1px] border-[#989898] pt-6'
                            type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleChange}
              required
              placeholder='Email'
                        />
                        <input
                            className='w-full h-[54px] font-Inter font-medium text-[16px] leading-[19.36px] text-[#7D7D7D] outline-none border-b-[1px] border-[#989898] pt-6'
                            type="password"
              name="password"
              id="password"
              value={password}
              onChange={handleChange}
              required
              placeholder='Password'
                        />
                    </div>

                    <div className='flex gap-x-6 items-center w-[360px] pb-2'>
                        <div className='flex gap-x-1'>
                            <input
                            type="radio"
              name="accountType"
              id="accountType"
              value={Conditions}
              onChange={handleChange}
              required

                                />
                            <label htmlFor="accountType">Candidate</label>
                        </div>
                        <div className='flex gap-x-1'>
                            <input
                                type="radio"
              name="Type"
              id="Type"
              value={Type}
              onChange={handleChange}
              required />
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
                            <button className='text-[#ffffff] font-Inter text-[14px] leading-[16.94px] font-semibold'>Register Now</button>
                        </div>
                        <p className='text-[#1E93FF] font-Inter font-semibold text-[13px] leading-[15.73px] underline'>
                            <Link to='/login'>
                                I am already a member
                            </Link>

                        </p>
                    </div>

                        
                </div>
                
            </div>
             </form>
        </div>
    )
}

export default SignUp