import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar'
import ProfileStartingImage from '../assets/Profile.jpg'
import UserName from '../assets/user_name.png'
import MailBlue from '../assets/mail-blue.png'
import PhoneBlue from '../assets/phone_blue.png'
import LocationBlue from '../assets/location_blue.png'
import { Link } from 'react-router-dom'
const Profile = () => {
  // const [selectedFile, setSelectedFile] = useState(null);
  // const fileInputRef = useRef(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  //   // You can perform any additional actions upon file selection here
  // };

  // const openFilePicker = () => {
  //   fileInputRef.current.click();
  // };

  // const handleUpdateProfile = async () => {
  //   // Prepare the updated user data
  //   const updatedUserData = {
  //     // Include the fields you want to update here
  //     // For example:
  //     // name: 'New Name',
  //     // email: 'new.email@example.com',
  //     // ...
  //   };

  //   try {
  //     // Send a PUT request to the backend API to update the user
  //     const response = await axios.put('http://localhost:8080/Employer', updatedUserData);

  //     if (response.status === 200) {
  //       // Handle successful update
  //       console.log('User updated successfully');
  //     }
  //   } catch (error) {
  //     console.error('Error updating user:', error);
  //   }
  // };
  
  return (
    <div className='flex flex-col w-full '>
      <Navbar />

      <div className='relative w-full h-fit'>
        <img src={ProfileStartingImage} alt="profile" className='w-full h-[260px]' />
        <img src={UserName} alt="username"
          className='absolute left-[172px] top-[50%]'
        />
      </div>
      <div className='w-[704px] mx-auto pb-[100px]'>
        <p className='font-Roboto font-extrabold text-[36px] leading-[42.19px] text-[#343434] pb-[100px]'>Zeena Jalil</p>

        <div className='flex flex-col gap-y-2 pb-[100px]'>
          <div className='flex gap-x-2 items-center'>
            <img src={MailBlue} alt="mail" />
            <p className='font-Roboto font-normal text-[13px] leading-[15.23px] text-[#262626]'>zeenajalil@gmail.com</p>
          </div>

          <div className='flex gap-x-2 items-center'>
            <img src={PhoneBlue} alt="phone" />
            <p className='font-Roboto font-normal text-[13px] leading-[15.23px] text-[#262626]'>91+12340 098767</p>
          </div>

          <div className='flex gap-x-2 justify-between items-center'>
            <div className='flex gap-x-2 items-center'>
              <img src={LocationBlue} alt="location" />
              <p className='font-Roboto font-normal text-[13px] leading-[15.23px] text-[#262626]'>zeenajalil@gmail.com</p>
            </div>


            <Link to='/edit-profile' className='font-Roboto font-semibold text-[14px] leading-[16.41px] text-[#0070D7]'>
              <button  
              // onClick={handleUpdateProfile}
               className='px-[34px] py-[9px] w-fit rounded-md border-[1px] border-[#0070D7]'>
                Edit
              </button>
            </Link>


          </div>
        </div>

        <p className='font-Roboto font-semibold text-[24px] leading-[28.13px] text-[#343434] pb-5'>Resume</p>

        <input
          // ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          // onChange={handleFileChange}
          accept=".pdf,.doc,.docx" // Add acceptable file types here
        />
        <button
          className='w-full  py-[15px] border-[1px] border-[#BEBEBE] rounded-md text-[#0070D7] font-Roboto font-semibold text-[14px] leading-[16.41px]'
          type="button"
          // onClick={openFilePicker}
        >
          <p >Upload Resume</p>
        </button>
        {/* {selectedFile && (
          <p>Selected file: 
            {selectedFile.name}</p>
        )} */}


        <p className='font-Roboto font-normal text-[13px] leading-[15.23px] text-[#636363] pt-3'>
          By continuing, you agree to receive job opportunities from Our Job Portal.
        </p>
      </div>
    </div>
  )
}

export default Profile