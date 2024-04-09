import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LoginImage from '../assets/Login Page SVG.svg'
import GoogleLogo from '../assets/google.svg'
import AppleLogo from '../assets/apple.svg'
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showClearIcon, setShowClearIcon] = useState(false);
  const history = useNavigate();

  const handleInputChange = (e) => {
    if (e.target.value) {
      setShowClearIcon(true);
    } else {
      setShowClearIcon(false);
    }

    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const user = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
  
    try {
      const response = await axios.post('/auth/login', user);
  
      if (response.data.user) {
        history('/');
      } else {
        alert('Wrong user name');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-[#F3F4F6]'>
      <div className='w-[50%] flex justify-center items-center gap-x-16'>
        <div className='bg-white rounded-[20px] w-[500px] p-[30px] shadow-md'>
          <h1 className='font-bold text-[24px] leading-[30px]'>Welcome Back</h1>
          <p className='font-medium text-[16px] leading-[20px]'>Please sign in to continue</p>

          <form onSubmit={handleSubmit}>
            <input
              className='border-[1px] border-[#B5B5B5] p-[15px] rounded-[20px] w-full mt-[30px]'
              type="email" name="email" onChange={handleInputChange} placeholder="Email" value={email} required />
            
            {showClearIcon && (
            <input
              className='border-[1px] border-[#B5B5B5] p-[15px] rounded-[20px] w-full mt-[20px]'
              type="password" name="password" onChange={handleInputChange} placeholder="Password" value={password} required />
            
            )}  
                
    
            <button className='px-[153px] py-[14px] w-fit rounded-2xl bg-[#33B249] mt-[30px]' type="submit">
              <p className='font-Inter font-semibold text-[14px] leading-[16.94px] text-[#ffffff]'>
                Continue
              </p>
            </button>
            
          </form>

          <div className='w-[364px] border-[1px] border-[#989898]'></div>

          <div className='flex flex-col gap-y-4'>
            <button className='flex w-[369px] items-center h-[54px] rounded-2xl border-[1px] border-[#989898] gap-x-3'>
              <img src={GoogleLogo} alt="google logo" className='pl-5' />
              <p className='font-Inter font-medium text-[16px] leading-[19.36px] text-[#1A1A1A] '>Continue With Google</p>
            </button>
            <button className='flex w-[369px] items-center h-[54px] rounded-2xl border-[1px] border-[#989898] gap-x-3'>
              <img src={AppleLogo} alt="apple logo" className='pl-5' />
              <p className='font-Inter font-medium text-[16px] leading-[19.36px] text-[#1A1A1A] '>Continue With Apple</p>
            </button>
          </div>

          <p className='mt-[40px] font-medium text-[16px] leading-[20px]'>By signing in, you agree to the <span className='text-[#33B249]'>Terms of Service</span> and <span className='text-[#33B249]'>Privacy Policy</span></p>

          <p className='mt-[40px] font-medium text-[16px] leading-[20px]'>New to Project Flare? <Link to="/signup" className='text-[#33B249]'>Create an account</Link></p>
        </div>
        <img src={LoginImage} alt="login" className='h-[450px] rounded-[20px] object-cover object-center' />
      </div>
    </div>
  );
};

export default Login;