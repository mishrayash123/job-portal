import React, {useRef, useState , useEffect } from 'react';
import Navbar from '../components/Navbar'
import ProfileStartingImage from '../assets/Profile.jpg'
import UserName from '../assets/user_name.png'
import MailBlue from '../assets/mail-blue.png'
import PhoneBlue from '../assets/phone_blue.png'
import LocationBlue from '../assets/location_blue.png'
import { Link } from 'react-router-dom'
import {storage} from "../components/firebase.config";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
const Profile = () => {
  const [resume, setresume] = useState("");
  const fileInputRef = useRef(null);
  const userid = localStorage.getItem("jobportaluserId");
  const [profiledata, setprofiledata] = useState([]);

  const handleuploadimage = async(e) =>{
    const imageRef = ref(storage, userid+"resume");
    if (e) {
        uploadBytes(imageRef, e).then(() => {
            getDownloadURL(imageRef).then((url) => {
                setresume(url);
                handleFormSubmit()
            }).catch((error) => {
                console.log(error.message, "error geting the image url");
            })
        }).catch((error) => {
            console.log(error.message);
        })
    }
  }

   const openFilePicker = () => {
    fileInputRef.current.click();
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setprofiledata(data)
      } else {
        alert("Something went wrong please login again");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  }

  useEffect(() => {
    
    fetchData();
  }, []);

  const handleFormSubmit = async () => {
    const id = localStorage.getItem("jobportaluserId");
    try {
        const response = await fetch(`http://localhost:8080/updateusers/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({resume}),
        });
  
        if (response.ok) {
          alert("Resume Updated");
        }else {
          alert("something went wrong...please check credential");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
  }
  


  return (
    <div className='flex flex-col w-full '>
      <Navbar />

      <div className='relative w-full h-fit'>
        <img src={ProfileStartingImage} alt="profile" className='w-full h-[260px]' />
        <img src={UserName} alt="username"
          className='absolute left-[172px] top-[50%]'
        />
      </div>
      {
          profiledata.filter((e)=>(e._id===userid)).map(profiledata =>(
      <div className='w-[704px] mx-auto pb-[100px]'>
        <p className='font-Roboto font-extrabold text-[36px] leading-[42.19px] text-[#343434] pb-[100px]'>{profiledata.username}</p>
      
        <div className='flex flex-col gap-y-2 pb-[100px]'>
          <div className='flex gap-x-2 items-center'>
            <img src={MailBlue} alt="mail" />
            <p className='font-Roboto font-normal text-[13px] leading-[15.23px] text-[#262626]'>{profiledata.email}</p>
          </div>

          <div className='flex gap-x-2 items-center'>
            <img src={PhoneBlue} alt="phone" />
            <p className='font-Roboto font-normal text-[13px] leading-[15.23px] text-[#262626]'>{profiledata.phone}</p>
          </div>

          <div className='flex gap-x-2 justify-between items-center'>
            <div className='flex gap-x-2 items-center'>
              <img src={LocationBlue} alt="location" />
              <p className='font-Roboto font-normal text-[13px] leading-[15.23px] text-[#262626]'>{profiledata.saddress}</p>
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
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }}
          accept=".pdf,.doc,.docx" // Add acceptable file types here
          onChange={(e)=>{
            handleuploadimage(e.target.files[0])
          }}
        />
        <button
          className='w-full  py-[15px] border-[1px] border-[#BEBEBE] rounded-md text-[#0070D7] font-Roboto font-semibold text-[14px] leading-[16.41px]'
          type="button"
          onClick={openFilePicker}
        >
          <p >Upload Resume</p>
        </button>
        {/* {selectedFile && (
          <p>Selected file: 
            {selectedFile.name}</p>
        )} */}
              <p className='text-center font-bold'>or</p>
              <Link to='/edit-profile'>
         <button
          className='w-full  py-[15px] border-[1px] border-[#BEBEBE] rounded-md text-[#0070D7] font-Roboto font-semibold text-[14px] leading-[16.41px]'
          type="button"
        > <p  >Create Your Resume</p>
        </button>
        </Link>


        <p className='font-Roboto font-normal text-[13px] leading-[15.23px] text-[#636363] pt-3'>
          By continuing, you agree to receive job opportunities from Our Job Portal.
        </p>
      </div>
          ))}
    </div>
  )
}

export default Profile