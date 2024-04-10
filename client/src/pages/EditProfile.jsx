import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ArrowBack from '../assets/arrow-back.png'
import { Link, useNavigate } from 'react-router-dom'
import Flag from '../assets/flag-india.png'
import ArrowRight from '../assets/arrow-right.png'
import EmailChangePopup from '../components/EmailChangePopup'

const EditProfile = () => {
//     const [popupVisible, setPopUpVisible] = useState(false);
//     const handlePopup = () => setPopUpVisible(true);
//      const navigate = useNavigate();

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [pincode, setPincode] = useState('');

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.put('http://localhost:8080/auth/Employer', {
//         firstName,
//         lastName,
//         phone,
//         address,
//         city,
//         pincode,
//       });

//       if (response.status === 200) {
//         // Handle successful update
//         console.log('Employer updated successfully');
//         navigate('/profile');
//       }
//     } catch (error) {
//       console.error('Error updating employer:', error);
//     }
//   }

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
        //                             value={firstName}
        //   onChange={(e) => setFirstName(e.target.value)}
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
        //                             value={lastName}
        //   onChange={(e) => setLastName(e.target.value)}
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
        //                                 value={phone}
        //   onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>


                            </div>

                            <div className='flex flex-col gap-y-2 pb-10'>
                                <p className='font-Roboto font-bold text-[16px] leading-[18.75px] text-[#000000]'>Email</p>
                                <div className='flex justify-between items-baseline'>
                                    <p className='font-Roboto font-light text-[16px] leading-[18.75px] text-[#000000]'>zeenajalil@gmail.com</p>
                                    <div className='flex items-baseline gap-x-2 w-fit' 
                                    // onClick={handlePopup}
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
                                <select name="country" id="country" className='w-full border-[1.5px] border-[#A6A6A6] outline-none px-3 py-3 rounded-lg'>
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
        //                             name='address'
        //                              value={address}
        //   onChange={(e) => setAddress(e.target.value)}

                                />

                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="state" className='font-Roboto font-medium text-[16px] leading-[18.75px]'>
                                    <p>City, State<sup className='text-[#FF0000] font-Roboto font-medium text-[16px] '>*</sup></p>
                                </label>

                                <input className='w-full rounded-lg px-3 py-3 border-[1.5px] border-[#A6A6A6] font-Roboto font-light text-[17px] leading-[19.92px] text-[#000000] outline-[#A6A6A6]'
                                    type="text"
                                    // name='state'
                                    // value={city}
                                    // onChange={(e) => setCity(e.target.value)}  
                                       />

                            </div>

                            <div className='flex flex-col'>
                                <label htmlFor="pincode" className='font-Roboto font-medium text-[16px] leading-[18.75px]'>
                                    <p>Pin Code<sup className='text-[#FF0000] font-Roboto font-medium text-[16px] '>*</sup></p>
                                </label>

                                <input className='w-full rounded-lg px-3 py-3 border-[1.5px] border-[#A6A6A6] font-Roboto font-light text-[17px] leading-[19.92px] text-[#000000] outline-[#A6A6A6]'
                                    type="text"
        //                             name='pincode'
        //                             value={pincode}
        //   onChange={(e) => setPincode(e.target.value)}
           />

                            </div>


                            <div className='flex gap-x-6 pt-5'>
                                <Link to='/profile' className='w-fit'>
                                    <button
                                    //  onSubmit={handleFormSubmit}
                                     type='submit' className='bg-[#525CEB] px-[34px] py-[14px] w-fit rounded-md'>
                                        <p className='font-Roboto font-bold text-[18px] leading-[21.09px] text-[#ffffff]'>Save</p>
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
{/* 
            {
                popupVisible && 
                <EmailChangePopup setPopUpVisible={setPopUpVisible}/>
            } */}
        </div>

    );
}

export default EditProfile;