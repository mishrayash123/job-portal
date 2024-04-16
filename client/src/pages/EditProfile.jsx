import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ArrowBack from '../assets/arrow-back.png'
import { Link,} from 'react-router-dom'
import Flag from '../assets/flag-india.png'
import ArrowRight from '../assets/arrow-right.png'
import EmailChangePopup from '../components/EmailChangePopup'
import { useNavigate } from 'react-router-dom'
import Bold from '../assets/bold.png'
import Italic from '../assets/italic.png'
import BulletNumber from '../assets/bullet-numbers.png'
import Bullet from '../assets/bullets.png'
import link from '../assets/link.png'
import AttachedLink from '../assets/attached_link.png'
import Undo from '../assets/undo.png'
import Redo from '../assets/redo.png'
import './EditProfile.css'

const EditProfile = () => {
    const email = localStorage.getItem("email");
    const [popupVisible, setPopUpVisible] = useState(false);
    const handlePopup = () => setPopUpVisible(true);
    const navigate = useNavigate();

  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setcountry] = useState('');
  const [saddress, setsaddress] = useState('');
  const [city, setcity] = useState('');
  const [state, setstate] = useState('');
  const [pin, setPincode] = useState('');

  const handleFormSubmit = async (e) => {
    const id = localStorage.getItem("jobportaluserId");
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:8080/updateusers/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({fname,lname,phone,country,saddress,city,state,pin}),
        });
  
        if (response.ok) {
          alert("Updated");
          navigate("/profile");
        }else {
          alert("something went wrong...please check credential");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
  }
 
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddSkill = () => {
    if (inputValue.trim()) {
      setSkills([...skills, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };




      
    return (
             <div>
            <div className='flex w-full flex-col'>
                <Navbar />


                <div className='flex flex-col py-20 w-full'>
                    <div className='w-[704px] flex flex-col mx-auto'>
                        <Link to='/profile' className='w-fit'>
                            <img src={ArrowBack} alt="arrow-back" className='w-fit h-fit' />
                        </Link>

                        <p className='font-Roboto font-medium text-[36px] leading-[42.19px] text-[#343434] pb-5'>Contact Information</p>

                        <div className='flex flex-col gap-y-6'>
                            <div className='flex flex-col'>
                                <label htmlFor="firstName" className='font-Roboto font-medium text-[16px] leading-[18.75px]'>
                                    <p>First Name<sup className='text-[#FF0000] font-Roboto font-medium text-[16px] '>*</sup></p>
                                </label>

                                <input className='w-full rounded-lg px-3 py-3 border-[1.5px] border-[#A6A6A6] font-Roboto font-light text-[17px] leading-[19.92px] text-[#000000] outline-[#A6A6A6]'
                                    type="text"
                                    name='firstName'
                                    placeholder='Zeena'
                                    value={fname}
          onChange={(e) => setfname(e.target.value)}
                                />

                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="lastName" className='font-Roboto font-medium text-[16px] leading-[18.75px]'>
                                    <p>Last Name<sup className='text-[#FF0000] font-Roboto font-medium text-[16px] '>*</sup></p>
                                </label>

                                <input className='w-full rounded-lg px-3 py-3 border-[1.5px] border-[#A6A6A6] font-Roboto font-light text-[17px] leading-[19.92px] text-[#000000] outline-[#A6A6A6]'
                                    type="text"
                                    name='lastName'
                                    placeholder='Jalil'
                                    value={lname}
          onChange={(e) => setlname(e.target.value)}
                                />

                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="phone" className='font-Roboto font-medium text-[16px] leading-[18.75px]'>
                                    <p>Phone<sup className='text-[#FF0000] font-Roboto font-medium text-[16px] '>*</sup></p>
                                </label>

                                <div className='flex items-center w-full rounded-lg   border-[1.5px] border-[#A6A6A6] font-Roboto font-light text-[17px] leading-[19.92px] text-[#000000] outline-[#A6A6A6]'>
                                    <div className='flex gap-x-2 items-center rounded-l-[8px] border-[#A6A6A6] border-[1.5px] px-2 py-1'>
                                        <img src={Flag} alt="" />
                                        <p className='font-Roboto font-semibold text-[17px] leading-[19.92px] text-[#000000]'>
                                            +91
                                        </p>
                                    </div>



                                    <input className='h-full outline-none pl-4'
                                        type="text"
                                        name='phone'
                                        placeholder='1297498349'
                                        value={phone}
          onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>


                            </div>

                            <div className='flex flex-col gap-y-2 pb-10'>
                                <p className='font-Roboto font-bold text-[16px] leading-[18.75px] text-[#000000]'>Email</p>
                                <div className='flex justify-between items-baseline'>
                                    <p className='font-Roboto font-light text-[16px] leading-[18.75px] text-[#000000]'>{email}</p>
                                    <div className='flex items-baseline gap-x-2 w-fit cursor-pointer' 
                                    onClick={handlePopup}
                                    >
                                        <p className='uppercase font-Roboto font-medium text-[18px] leading-[21.09px] text-[#3941FF]'>EDIT</p>
                                        <img src={ArrowRight} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className='w-full border-[1px] border-[#C5C5C5]'></div>

                            <div className='flex flex-col gap-y-3'>
                                <p className='font-Roboto font-bold text-[20px] leading-[23.44px]'>Location </p>
                                <p className='font-Roboto font-normal text-[14px] leading-[16.41px] text-[#707070]'>This helps match you with nearby job.</p>
                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="country" className='font-Roboto font-medium text-[16px] leading-[18.75px]'>
                                    <p>Country<sup className='text-[#FF0000] font-Roboto font-medium text-[16px] '>*</sup></p>
                                </label>
                                <select name="country" id="country" className='w-full border-[1.5px] border-[#A6A6A6] outline-none px-3 py-3 rounded-lg'
                                 onChange={(e) => setcountry(e.target.value)}
                                >
                                    <option value="India">India</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <label htmlFor="address" className='font-Roboto font-medium text-[16px] leading-[18.75px] flex flex-col gap-y-2'>
                                    <p>Street Address</p>
                                    <p className='font-Roboto font-light text-[14px] leading-[16.41px]'>Visible only to you</p>
                                </label>

                                <input className='w-full rounded-lg px-3 py-3 border-[1.5px] border-[#A6A6A6] font-Roboto font-light text-[17px] leading-[19.92px] text-[#000000] outline-[#A6A6A6]'
                                    type="text"
                                    name='address'
                                     value={saddress}
          onChange={(e) => setsaddress(e.target.value)}

                                />

                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="state" className='font-Roboto font-medium text-[16px] leading-[18.75px]'>
                                    <p>State<sup className='text-[#FF0000] font-Roboto font-medium text-[16px] '>*</sup></p>
                                </label>

                                <input className='w-full rounded-lg px-3 py-3 border-[1.5px] border-[#A6A6A6] font-Roboto font-light text-[17px] leading-[19.92px] text-[#000000] outline-[#A6A6A6]'
                                    type="text"
                                    name='state'
                                    value={state}
                                    onChange={(e) => setstate(e.target.value)}  
                                       />

                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="state" className='font-Roboto font-medium text-[16px] leading-[18.75px]'>
                                    <p>City<sup className='text-[#FF0000] font-Roboto font-medium text-[16px] '>*</sup></p>
                                </label>

                                <input className='w-full rounded-lg px-3 py-3 border-[1.5px] border-[#A6A6A6] font-Roboto font-light text-[17px] leading-[19.92px] text-[#000000] outline-[#A6A6A6]'
                                    type="text"
                                    name='state'
                                    value={city}
                                    onChange={(e) => setcity(e.target.value)}  
                                       />

                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="pincode" className='font-Roboto font-medium text-[16px] leading-[18.75px]'>
                                    <p>Pin Code<sup className='text-[#FF0000] font-Roboto font-medium text-[16px] '>*</sup></p>
                                </label>

                                <input className='w-full rounded-lg px-3 py-3 border-[1.5px] border-[#A6A6A6] font-Roboto font-light text-[17px] leading-[19.92px] text-[#000000] outline-[#A6A6A6]'
                                    type="text"
                                    name='pincode'
                                    value={pin}
          onChange={(e) => setPincode(e.target.value)}
           />

                            </div>


                            <div className='flex gap-x-6 pt-5'>
                                <Link to='/profile' className='w-fit'>
                                    <button
                                    //  onSubmit={handleFormSubmit}
                                     type='submit' className='bg-[#525CEB] px-[34px] py-[14px] w-fit rounded-md'>
                                        <p className='font-Roboto font-bold text-[18px] leading-[21.09px] text-[#ffffff] cursor-pointer' 
                                        onClick={ (e) =>(handleFormSubmit(e))}
                                        >Save</p>
                                    </button>
                                </Link>
                                <Link to='/profile' className='w-fit'>
                                    <button  className='bg-[#CACDFF] px-[34px] py-[14px] w-fit rounded-md'>
                                        <p className='font-Roboto font-bold text-[18px] leading-[21.09px] text-[#525CEB]'>Cancel</p>
                                    </button>
                                </Link>
                            </div>

                        </div>



                    </div>
                </div>

            </div>
               
            <div class="bg-white p-8 rounded-lg shadow-md container mx-auto border">
    <div class="flex flex-col  justify-center space-y-4">
        <h2 class="text-2xl font-bold text-gray-800">Resume Details</h2>
        <div class="flex items-center space-x-2">
            <div class="text-gray-600">About Yourself
            </div>
        </div>
        <div className='w-full py-6'>
         <textarea name="aboutYourself" id="aboutYourself" 
         className='w-full h-[200px] p-2 border rounded-md border-[#777777] resize-none'></textarea>
        </div>
       
       
        <div class="flex items-center space-x-2">
            <div className='flex flex-col gap-y-1 w-full'>
                    <p className='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#3f3f3f]'>Skills Content</p>

                    <div className='w-full flex flex-col h-[301px] border-[1.3px] border-[#989898] '>
                        <div className='options bg-[#E6E6E6] h-[50px] flex items-center'>
                            <div className='flex gap-x-3 px-3'>
                                <img src={Bold} alt="bold" className='w-[20px] h-[20px]' />
                                <img src={Italic} alt="italic" className='w-[20px] h-[20px]' />
                            </div>

                            <div className='border-[1.3px] border-[#989898] h-full'></div>

                            <div className='flex gap-x-3 px-3'>
                                <img src={BulletNumber} alt="bulletNumber" className='w-[24px] h-[24px]' />
                                <img src={Bullet} alt="bullet" className='w-[22px] h-[22px]' />
                            </div>

                            <div className='border-[1.3px] border-[#989898] h-full'></div>

                            <div className='flex gap-x-3 px-3'>
                                <img src={link} alt="link" className='w-[20px] h-[20px]' />
                                <img src={AttachedLink} alt="attachedLink" className='w-[20px] h-[20px]' />
                            </div>

                            <div className='border-[1.3px] border-[#989898] h-full'></div>

                            <div className='flex gap-x-3 px-3'>
                                <img src={Undo} alt="undo" className='w-[20px] h-[20px]' />
                                <img src={Redo} alt="redo" className='w-[20px] h-[20px]' />
                            </div>

                        </div>
                        <div className='w-full py-6'>
                            <textarea name="description" id="description" 
                        className='w-full h-[200px] border-b-[1.3px] border-[#989898] resize-none'></textarea>
                        </div>
                    </div>

                </div>
                </div>

                <div>
                <p className='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#3f3f3f]'>Skills</p>
      <textarea  className='rounded-xl bg-[#f0eef1]'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a skill..."
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddSkill}
      >
        Add Skill
      </button>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            <button
              className="shadow-md pt-4 w-[300px] h-[50px] rounded-xl bg-[#faf3ff]  text-center font-bold relative"
            >
            <div className='absolute right-4'>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 14.4375C11.9117 14.4375 12.786 14.0753 13.4307 13.4307C14.0753 12.786 14.4375 11.9117 14.4375 11C14.4375 10.0883 14.0753 9.21398 13.4307 8.56932C12.786 7.92466 11.9117 7.5625 11 7.5625C10.0883 7.5625 9.21398 7.92466 8.56932 8.56932C7.92466 9.21398 7.5625 10.0883 7.5625 11C7.5625 11.9117 7.92466 12.786 8.56932 13.4307C9.21398 14.0753 10.0883 14.4375 11 14.4375ZM12.0312 2.40625C12.0312 2.13275 11.9226 1.87044 11.7292 1.67705C11.5358 1.48365 11.2735 1.375 11 1.375C10.7265 1.375 10.4642 1.48365 10.2708 1.67705C10.0774 1.87044 9.96875 2.13275 9.96875 2.40625V4.202C8.51828 4.42279 7.17635 5.10145 6.1389 6.1389C5.10145 7.17635 4.42279 8.51828 4.202 9.96875H2.40625C2.13275 9.96875 1.87044 10.0774 1.67705 10.2708C1.48365 10.4642 1.375 10.7265 1.375 11C1.375 11.2735 1.48365 11.5358 1.67705 11.7292C1.87044 11.9226 2.13275 12.0312 2.40625 12.0312H4.202C4.42258 13.4818 5.10117 14.8238 6.13867 15.8613C7.17616 16.8988 8.51819 17.5774 9.96875 17.798V19.5938C9.96875 19.8673 10.0774 20.1296 10.2708 20.323C10.4642 20.5163 10.7265 20.625 11 20.625C11.2735 20.625 11.5358 20.5163 11.7292 20.323C11.9226 20.1296 12.0312 19.8673 12.0312 19.5938V17.798C13.4818 17.5774 14.8238 16.8988 15.8613 15.8613C16.8988 14.8238 17.5774 13.4818 17.798 12.0312H19.5938C19.8673 12.0312 20.1296 11.9226 20.323 11.7292C20.5163 11.5358 20.625 11.2735 20.625 11C20.625 10.7265 20.5163 10.4642 20.323 10.2708C20.1296 10.0774 19.8673 9.96875 19.5938 9.96875H17.798C17.5774 8.51819 16.8988 7.17616 15.8613 6.13867C14.8238 5.10117 13.4818 4.42258 12.0312 4.202V2.40625ZM11 15.8125C9.72365 15.8125 8.49957 15.3055 7.59705 14.403C6.69453 13.5004 6.1875 12.2764 6.1875 11C6.1875 9.72365 6.69453 8.49957 7.59705 7.59705C8.49957 6.69453 9.72365 6.1875 11 6.1875C12.2764 6.1875 13.5004 6.69453 14.403 7.59705C15.3055 8.49957 15.8125 9.72365 15.8125 11C15.8125 12.2764 15.3055 13.5004 14.403 14.403C13.5004 15.3055 12.2764 15.8125 11 15.8125Z" fill="#525CEB" />
                        </svg>
                    </div>
              {skill}
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
              onClick={() => handleDeleteSkill(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
    <div id="educationContainer" class="flex flex-col space-y-4">
    <div class="space-x-2">
        <p class='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#3f3f3f]'>Education</p>
    </div>
     <textarea  className='rounded-xl bg-[#f0eef1]'
        placeholder="Enter a Education..."
      />
    <button id="addEducationButton" class="shadow-md pt-4 w-[300px] h-[60px] rounded-xl bg-[#faf3ff]  text-center font-bold relative">
        <div class='absolute'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 14.4375C11.9117 14.4375 12.786 14.0753 13.4307 13.4307C14.0753 12.786 14.4375 11.9117 14.4375 11C14.4375 10.0883 14.0753 9.21398 13.4307 8.56932C12.786 7.92466 11.9117 7.5625 11 7.5625C10.0883 7.5625 9.21398 7.92466 8.56932 8.56932C7.92466 9.21398 7.5625 10.0883 7.5625 11C7.5625 11.9117 7.92466 12.786 8.56932 13.4307C9.21398 14.0753 10.0883 14.4375 11 14.4375ZM12.0312 2.40625C12.0312 2.13275 11.9226 1.87044 11.7292 1.67705C11.5358 1.48365 11.2735 1.375 11 1.375C10.7265 1.375 10.4642 1.48365 10.2708 1.67705C10.0774 1.87044 9.96875 2.13275 9.96875 2.40625V4.202C8.51828 4.42279 7.17635 5.10145 6.1389 6.1389C5.10145 7.17635 4.42279 8.51828 4.202 9.96875H2.40625C2.13275 9.96875 1.87044 10.0774 1.67705 10.2708C1.48365 10.4642 1.375 10.7265 1.375 11C1.375 11.2735 1.48365 11.5358 1.67705 11.7292C1.87044 11.9226 2.13275 12.0312 2.40625 12.0312H4.202C4.42258 13.4818 5.10117 14.8238 6.13867 15.8613C7.17616 16.8988 8.51819 17.5774 9.96875 17.798V19.5938C9.96875 19.8673 10.0774 20.1296 10.2708 20.323C10.4642 20.5163 10.7265 20.625 11 20.625C11.2735 20.625 11.5358 20.5163 11.7292 20.323C11.9226 20.1296 12.0312 19.8673 12.0312 19.5938V17.798C13.4818 17.5774 14.8238 16.8988 15.8613 15.8613C16.8988 14.8238 17.5774 13.4818 17.798 12.0312H19.5938C19.8673 12.0312 20.1296 11.9226 20.323 11.7292C20.5163 11.5358 20.625 11.2735 20.625 11C20.625 10.7265 20.5163 10.4642 20.323 10.2708C20.1296 10.0774 19.8673 9.96875 19.5938 9.96875H17.798C17.5774 8.51819 16.8988 7.17616 15.8613 6.13867C14.8238 5.10117 13.4818 4.42258 12.0312 4.202V2.40625ZM11 15.8125C9.72365 15.8125 8.49957 15.3055 7.59705 14.403C6.69453 13.5004 6.1875 12.2764 6.1875 11C6.1875 9.72365 6.69453 8.49957 7.59705 7.59705C8.49957 6.69453 9.72365 6.1875 11 6.1875C12.2764 6.1875 13.5004 6.69453 14.403 7.59705C15.3055 8.49957 15.8125 9.72365 15.8125 11C15.8125 12.2764 15.3055 13.5004 14.403 14.403C13.5004 15.3055 12.2764 15.8125 11 15.8125Z" fill="#525CEB" />
            </svg>
        </div>
        ADD Education
    </button>
</div>
<div id="educationInfoContainer"></div>

<div id="experienceContainer" class="flex flex-col space-y-4">
    <div class="space-x-2">
        <p class='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#3f3f3f]'>Experience</p>
    </div>
     <textarea  className='rounded-xl bg-[#f0eef1]'
        placeholder="Enter a Experience..."
      />
    <button id="addexperienceButton" class="shadow-md pt-4 w-[300px] h-[60px] rounded-xl bg-[#faf3ff]  text-center font-bold relative">
        <div class='absolute'>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 14.4375C11.9117 14.4375 12.786 14.0753 13.4307 13.4307C14.0753 12.786 14.4375 11.9117 14.4375 11C14.4375 10.0883 14.0753 9.21398 13.4307 8.56932C12.786 7.92466 11.9117 7.5625 11 7.5625C10.0883 7.5625 9.21398 7.92466 8.56932 8.56932C7.92466 9.21398 7.5625 10.0883 7.5625 11C7.5625 11.9117 7.92466 12.786 8.56932 13.4307C9.21398 14.0753 10.0883 14.4375 11 14.4375ZM12.0312 2.40625C12.0312 2.13275 11.9226 1.87044 11.7292 1.67705C11.5358 1.48365 11.2735 1.375 11 1.375C10.7265 1.375 10.4642 1.48365 10.2708 1.67705C10.0774 1.87044 9.96875 2.13275 9.96875 2.40625V4.202C8.51828 4.42279 7.17635 5.10145 6.1389 6.1389C5.10145 7.17635 4.42279 8.51828 4.202 9.96875H2.40625C2.13275 9.96875 1.87044 10.0774 1.67705 10.2708C1.48365 10.4642 1.375 10.7265 1.375 11C1.375 11.2735 1.48365 11.5358 1.67705 11.7292C1.87044 11.9226 2.13275 12.0312 2.40625 12.0312H4.202C4.42258 13.4818 5.10117 14.8238 6.13867 15.8613C7.17616 16.8988 8.51819 17.5774 9.96875 17.798V19.5938C9.96875 19.8673 10.0774 20.1296 10.2708 20.323C10.4642 20.5163 10.7265 20.625 11 20.625C11.2735 20.625 11.5358 20.5163 11.7292 20.323C11.9226 20.1296 12.0312 19.8673 12.0312 19.5938V17.798C13.4818 17.5774 14.8238 16.8988 15.8613 15.8613C16.8988 14.8238 17.5774 13.4818 17.798 12.0312H19.5938C19.8673 12.0312 20.1296 11.9226 20.323 11.7292C20.5163 11.5358 20.625 11.2735 20.625 11C20.625 10.7265 20.5163 10.4642 20.323 10.2708C20.1296 10.0774 19.8673 9.96875 19.5938 9.96875H17.798C17.5774 8.51819 16.8988 7.17616 15.8613 6.13867C14.8238 5.10117 13.4818 4.42258 12.0312 4.202V2.40625ZM11 15.8125C9.72365 15.8125 8.49957 15.3055 7.59705 14.403C6.69453 13.5004 6.1875 12.2764 6.1875 11C6.1875 9.72365 6.69453 8.49957 7.59705 7.59705C8.49957 6.69453 9.72365 6.1875 11 6.1875C12.2764 6.1875 13.5004 6.69453 14.403 7.59705C15.3055 8.49957 15.8125 9.72365 15.8125 11C15.8125 12.2764 15.3055 13.5004 14.403 14.403C13.5004 15.3055 12.2764 15.8125 11 15.8125Z" fill="#525CEB" />
            </svg>
        </div>
        ADD Experience
    </button>
</div>
<div id="experienceInfoContainer"></div>

    </div>
    <div className='flex justify-end w-full pt-20'>
                    <Link to='/profile'>
                        <button  className='px-[68px] py-[22px] w-fit rounded-lg bg-darkBlue flex items-center gap-x-2'>
                            <p className='uppercase font-Roboto font-black text-[20px] leading-[23.44px] text-[#ffffff]'>SAVE</p>
                        </button>
                    </Link>

                </div>
</div>
              
            {
                popupVisible && 
                <EmailChangePopup setPopUpVisible={setPopUpVisible}/>
            }
        </div>

    );
}

export default EditProfile;