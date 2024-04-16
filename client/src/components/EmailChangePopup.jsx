import React,{useState} from 'react'
import Eye from '../assets/eye.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const EmailChangePopup = ({ setPopUpVisible }) => {
    const email1 = localStorage.getItem("email");
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        const id = localStorage.getItem("jobportaluserId");
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8080/updateusers/${id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({email}),
            });
      
            if (response.ok) {
              alert("Updated");
              setPopUpVisible(false)
              navigate("/profile");
            }else {
              alert("something went wrong...please check credential");
            }
          } catch (error) {
            console.error("Error during registration:", error);
          }
    
       
      }

    return (
        <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
            <div className='bg-[#ffffff] flex flex-col w-[518px] mx-auto gap-y-5 rounded-xl px-5 py-8 shadow-xl border-[1px] border-[#737373]'>
                <p className='w-[413px] font-Roboto font-medium text-[36px] leading-[42.19px]'>
                    Change email address for
                </p>
                <span className='w-[413px] font-Roboto font-medium text-[32px] leading-[37.5px] text-[#737373]'>
                   {email1}
                </span>

                <div className='flex flex-col'>
                    <label htmlFor="firstName" className='font-Roboto font-bold text-[16px] leading-[18.75px]'>
                        <p>New email address</p>
                    </label>

                    <input className=' rounded-lg px-3 py-3 border-[1.5px] border-[#A6A6A6] font-Roboto font-light text-[17px] leading-[19.92px] text-[#000000] outline-[#A6A6A6]'
                        type="text"
                        name='firstName'
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />

                </div>

                <div className='flex flex-col'>
                    <label htmlFor="password" className='font-Roboto font-bold text-[16px] leading-[18.75px]'>
                        <p>Current Password</p>
                    </label>

                    <div className='relative flex items-center'>
                        <input className='w-full rounded-lg px-3 py-3 border-[1.5px] border-[#A6A6A6] font-Roboto font-light text-[17px] leading-[19.92px] text-[#000000] outline-[#A6A6A6]'
                            type="text"
                            name='password'
                            value={pass}
                            onChange={(e) => setpass(e.target.value)}
                        />
                        <img src={Eye} alt="eye" className='absolute right-4 ' />
                    </div>


                </div>


                <div className='flex gap-x-6 pt-5'>
                    <Link to='/edit-profile' className='w-fit'>
                        <button className='bg-[#525CEB] px-[34px] py-[14px] w-fit rounded-md' onClick={(e) => {

                            handleFormSubmit(e)
                            }}>
                            <p className='font-Roboto font-bold text-[18px] leading-[21.09px] text-[#ffffff]'>Save Email</p>
                        </button>
                    </Link>
                    <Link to='/edit-profile' className='w-fit'>
                        <button className='bg-[#CACDFF] px-[34px] py-[14px] w-fit rounded-md' onClick={() => setPopUpVisible(false)}>
                            <p className='font-Roboto font-bold text-[18px] leading-[21.09px] text-[#525CEB]'>Cancel Changes</p>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default EmailChangePopup