import React , { useState , useEffect } from 'react'
import Employer from '../assets/employer.png'
import Navbar from './Navbar'
import Footer from './Footer'
import './AccountInfo.css'
import NotificationBell from '../assets/notification_bell.png'
import { Link } from 'react-router-dom'


export const AccountInfo = () => {
    const [username, setUsername]  = useState(''); 
    const userid = localStorage.getItem("jobportaluserId");
    const [profiledata, setprofiledata]  = useState([]); 
    useEffect(() =>
     { const storeUsername = localStorage.getItem("username");
     setUsername(storeUsername);
     const storeEmail = localStorage.getItem("email");
     setemail(storeEmail);
    },[]);
 
    const [email, setemail] = useState('enter@example.com');
    const [isEditingEmail, setIsEditingEmail] = useState(false);
  
    const handleEditEmail = () => {
      setIsEditingEmail(true);
    };
  
    const handleSaveEmail = async(id) => {
      try {
        const response = await fetch(`http://localhost:8080/updateemployer/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email}),
        });
  
        if (response.ok) {
          alert("Updated");
          fetchData()
        }else {
          alert("something went wrong...please check credential");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
      setIsEditingEmail(false);
    };
  
    
      const [phone, setphone] = useState('91+12340 098767');
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);

  const handleEditPhoneNumber = () => {
    setIsEditingPhoneNumber(true);
  };

  const handleSavePhoneNumber = async(id) => {
    try {
      const response = await fetch(`http://localhost:8080/updateemployer/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({phone}),
      });

      if (response.ok) {
        alert("Updated");
        fetchData()
      }else {
        alert("something went wrong...please check credential");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
    setIsEditingPhoneNumber(false);
  };



  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/getemployers",
        {
          method: "GET",
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
   

    
    return (
        <div className='flex flex-col w-full'>
            <Navbar />
            <div className='flex flex-col w-full '>
                <div className='flex justify-between px-[100px] items-center bg-[#BFCFE7]'>
                    <p className='font-Roboto w-[500px] font-bold text-[58px] leading-[67.97px] text-[#3D3B40]'>Your Employer Account</p>
                    <img src={Employer} alt="emplouyer" />
                </div>
            </div>

            <div className='w-full px-10 py-20'>
                <div className='w-[1164px] mx-auto personalCard border-[1px] border-[#CACACA] flex justify-between px-5 py-4 rounded-[32px]'>
                    <p className='font-Roboto font-bold text-[40px] leading-[46.88px] text-[#3D3B40] pl-5'>Personal Info</p>

                    <div className='flex items-center gap-x-2 '>
                        <div className='border-[1px] border-darkBlue flex items-center px-[20px] py-[10px] rounded-lg gap-x-3'>
                            <img src={NotificationBell} alt="notification" />
                            <Link to='/employer/notification'>
                            <p className='text-darkBlue'>Notification</p>
                            </Link>
                        </div>

                        <div className='flex gap-x-2'>
                            <Link to='/profile'>
                            <p className='font-Roboto font-light text-[15px] leading-[17.58px] text-darkBlue'>Job Seeker</p></Link>
                            <p className='font-Roboto font-light text-[16px] leading-[17.58px] text-darkBlue'>/</p>
                            <Link to='/employer/account'>
                            <p className='font-Roboto font-bold text-[15px] leading-[17.58px] text-darkBlue'>Employer</p></Link>
                        </div>
                    </div>

                </div>
                {
          profiledata.filter((e)=>(e.userid===userid)).map(profiledata =>(
                <div className='flex flex-col pt-10 pb-20'>
                    <div className='w-[1164px] mx-auto personalCard border-[1px] border-[#CACACA] flex flex-col justify-center items-center  px-5 py-4 rounded-[32px]'>
                        <div className='grid grid-cols-3  w-full px-5 py-5'>
                            <div className='flex flex-col justify-between gap-y-5'>
                                <p className='font-Roboto font-normal text-[24px] leading-[28.13px]'>Name</p>
                                <div className='border-[1px] border-[#C2C2C2]'></div>
                                <p className='font-Roboto font-normal text-[24px] leading-[28.13px]'>Email</p>
                                <div className='border-[1px] border-[#C2C2C2]'></div>
                                <p className='font-Roboto font-normal text-[24px] leading-[28.13px]'>Phone</p>
                                <div className='border-[1px] border-[#C2C2C2]'></div>
                                <p className='font-Roboto font-normal text-[24px] leading-[28.13px]'>Role</p>
                                <div className='border-[1px] border-[#C2C2C2]'></div>
                            </div>
                           
                            <div className='flex flex-col justify-between gap-y-5'>
                                <p className='font-light text-[24px] leading-[28.13px] '>{profiledata.fullname}</p>
                                <div className='border-[1px] border-[#C2C2C2]'></div>
                                <p  className=' font-thin text-[24px] leading-[28.13px]'>{profiledata.email}</p>
                                <div className='border-[1px] border-[#C2C2C2]'></div>
                                <p  className=' font-thin text-[24px] leading-[28.13px]'>{profiledata.phone}</p>
                                <div className='border-[1px] border-[#C2C2C2]'></div>
                                <p className=' font-light text-[24px] leading-[28.13px]'>{profiledata.role}</p>
                                <div className='border-[1px] border-[#C2C2C2]'></div>
                            </div>
                            <div className='flex flex-col justify-between gap-y-5'>
                                <div className='flex justify-end'>
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="36" height="36" rx="8" fill="#CBD8EC" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.8527 16.3128L27.0598 14.1057C27.7296 13.436 28.065 13.1005 28.2445 12.7392C28.4125 12.4 28.5 12.0265 28.5 11.648C28.5 11.2694 28.4125 10.8959 28.2445 10.5567C28.065 10.1954 27.7296 9.85993 27.0598 9.19019C26.3901 8.52044 26.0546 8.18496 25.6933 8.00554C25.3541 7.83745 24.9806 7.75 24.602 7.75C24.2235 7.75 23.85 7.83745 23.5108 8.00554C23.1495 8.18496 22.814 8.52044 22.1443 9.19019L19.9089 11.4255C21.0981 13.4613 22.8034 15.1472 24.8527 16.3128ZM18.1221 13.2123L9.67972 21.6547C9.15622 22.1783 8.89569 22.4388 8.72365 22.7607C8.5516 23.0803 8.4791 23.4428 8.33532 24.1678L7.57833 27.9491C7.49722 28.3571 7.45544 28.5611 7.57218 28.6778C7.68893 28.7946 7.89169 28.7528 8.30091 28.6717L12.0822 27.9147C12.8072 27.7709 13.1697 27.6984 13.4905 27.5264C13.81 27.3543 14.0717 27.0938 14.594 26.5715L23.061 18.1045C21.0728 16.8597 19.3855 15.1893 18.1209 13.2135" fill="black" />
                                    </svg>
                                </div>
                                <div className='border-[1px] border-[#C2C2C2] -mt-[4px]'></div>
                                <div className="flex justify-end">
                                {isEditingEmail ? (
                                     <div>
                              <input  type="email" value={email} onChange={(e) => setemail(e.target.value)} 
        placeholder="Enter new email"
      />
      <button onClick={(e)=>{
        handleSaveEmail(profiledata._id);
      }} className='px-[20px] py-[10px] w-fit rounded-lg border-[1px] border-darkBlue'>
        <p className='font-Roboto font-bold text-[15px] leading-[17.58px] text-darkBlue'>
          Save
        </p>
      </button>
    </div>
  ) : (
    <button onClick={handleEditEmail} className='px-[20px] py-[10px] w-fit rounded-lg border-[1px] border-darkBlue'>
      <p className='font-Roboto font-bold text-[15px] leading-[17.58px] text-darkBlue'>
        Change Email
      </p>
    </button>
  )}
  
                                </div>
                                <div className='border-[1px] border-[#C2C2C2] -mt-[3px]'></div>
                                <div className="flex justify-end">
                                               {isEditingPhoneNumber ? (
                                     <div>
                              <input  type="phonenumber" value={phone} onChange={(e) => setphone(e.target.value)} 
        placeholder="Enter new phoneNumber"
      />
                                    <button onClick={()=>{
                                      handleSavePhoneNumber(profiledata._id)
                                    }}  className='px-[20px] py-[10px] w-fit rounded-lg border-[1px] border-darkBlue'>
                                        <p className='font-Roboto font-bold text-[15px] leading-[17.58px] text-darkBlue'>
                                            Save
                                        </p>
                                    </button>
                                </div>
                                 ) : (
                                     <button onClick={handleEditPhoneNumber} className='px-[20px] py-[10px] w-fit rounded-lg border-[1px] border-darkBlue'>
      <p className='font-Roboto font-bold text-[15px] leading-[17.58px] text-darkBlue'>
        Change Phone
      </p>
    </button>
  )}
  
                                </div>
                                <div className='border-[1px] border-[#C2C2C2] -mt-[3px]'></div>
                                <div>
                                    <div className='flex justify-end'>
                                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="36" height="36" rx="8" fill="#CBD8EC" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.8527 16.3128L27.0598 14.1057C27.7296 13.436 28.065 13.1005 28.2445 12.7392C28.4125 12.4 28.5 12.0265 28.5 11.648C28.5 11.2694 28.4125 10.8959 28.2445 10.5567C28.065 10.1954 27.7296 9.85993 27.0598 9.19019C26.3901 8.52044 26.0546 8.18496 25.6933 8.00554C25.3541 7.83745 24.9806 7.75 24.602 7.75C24.2235 7.75 23.85 7.83745 23.5108 8.00554C23.1495 8.18496 22.814 8.52044 22.1443 9.19019L19.9089 11.4255C21.0981 13.4613 22.8034 15.1472 24.8527 16.3128ZM18.1221 13.2123L9.67972 21.6547C9.15622 22.1783 8.89569 22.4388 8.72365 22.7607C8.5516 23.0803 8.4791 23.4428 8.33532 24.1678L7.57833 27.9491C7.49722 28.3571 7.45544 28.5611 7.57218 28.6778C7.68893 28.7946 7.89169 28.7528 8.30091 28.6717L12.0822 27.9147C12.8072 27.7709 13.1697 27.6984 13.4905 27.5264C13.81 27.3543 14.0717 27.0938 14.594 26.5715L23.061 18.1045C21.0728 16.8597 19.3855 15.1893 18.1209 13.2135" fill="black" />
                                        </svg>
                                    </div>

                                </div>
                                <div className='border-[1px] border-[#C2C2C2]'></div>
                            </div>

                        </div>
                        
                    </div>
                </div>

))}
            </div>

            <Footer />

        </div>
    )
}
