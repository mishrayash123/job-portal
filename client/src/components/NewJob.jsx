import React,  { useState  } from 'react'
import './NewJobCard.css'
import Bold from '../assets/bold.png'
import Italic from '../assets/italic.png'
import BulletNumber from '../assets/bullet-numbers.png'
import Bullet from '../assets/bullets.png'
import link from '../assets/link.png'
import AttachedLink from '../assets/attached_link.png'
import Undo from '../assets/undo.png'
import Redo from '../assets/redo.png'
import { Link,  } from 'react-router-dom'
import ArrowRightWhite from '../assets/arrow-right-white.png'
import { useNavigate } from "react-router-dom"; 

const NewJob = () => {
    const  employerId = localStorage.getItem("employerId");
    const userid = localStorage.getItem("jobportaluserId");
    const [email, setEmail] = useState("");
    const [jobtitle, setJobtitle] = useState("");
    const [location, setLocation] = useState("");
    const [jobtags, setJobtags] = useState("");
    const [description, setDescription] = useState("");
    const [applicationemail, setApplicationemail] = useState("");
    const [salary, setSalary] = useState(0);
    const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await fetch( 
          "http://localhost:8080/addtojobs", 
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email,userid,employerId,jobtitle,location,jobtags,applicationemail,salary,description}), 
          }                                            
                                                          
        );
  
        if (response.ok) { 
          const data = await response.json();
          localStorage.setItem("newjobid", data._id);
          alert("Job Post successfully and now you can PREVIEW");
          navigate("/job-post/page-2");
        } else { 
            console.error("Server returned error:", response.data);
            alert("something went wrong...please check credential");
        }
      } catch (error) {
        console.error("Error during PostJob:", error);
      }
    };

return (
        <div className='w-[1131px] h-[1558px] border-[1px] border-[#DCDCDC] newJobCard'>
            <div className='w-[893px] flex flex-col py-[90px] mx-auto gap-y-9'>
                <div className='flex flex-col gap-y-1 w-full'>
                    <p className='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#3f3f3f]'>Your Email</p>
                    <input
                        className='w-full border-[1.3px] border-[#989898] py-4 pl-5 font-Roboto font-normal text-[#6C6C6C] rounded-2xl text-[24px] leading-[28.13px] outline-none'
                        placeholder='youremail@gmail.com'
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required />
                </div>

                <div className='flex flex-col gap-y-1 w-full'>
                    <p className='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#3f3f3f]'>Job Title </p>
                    <input
                        className='w-full border-[1.3px] border-[#989898] py-4 pl-5 font-Roboto font-normal rounded-2xl text-[#6C6C6C] text-[24px] leading-[28.13px]  outline-none'
                        type="jobtite"
                        name="jobtite"
                        onChange={(e) => setJobtitle(e.target.value)}
                        value={jobtitle}
                        required />
                </div>

                <div className='flex flex-col gap-y-1 w-full'>
                    <p className='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#3f3f3f]'>Location </p>
                    <input
                        className='w-full border-[1.3px] border-[#989898] py-4 pl-5 font-Roboto font-normal rounded-2xl text-[24px] text-[#6C6C6C] leading-[28.13px] outline-none '
                        placeholder='full time'
                        type="location"
                        name="location"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                        required />
                </div>

                <div className='flex flex-col gap-y-1 w-full'>
                    <p className='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#3f3f3f]'>Job Tags </p>
                    <input
                        className='w-full border-[1.3px] border-[#989898] py-4 pl-5 font-Roboto font-normal rounded-2xl text-[24px] leading-[28.13px] text-[#6C6C6C] outline-none '
                        placeholder='eg : PHP, Social media, Management'
                        type="jobtags"
                        name="jobtags"
                        onChange={(e) => setJobtags(e.target.value)}
                        value={jobtags}
                        required />
                    <p className='text-[#6C6C6C] font-Roboto text-[15px] leading-[17.58px]'>Comma separate tags, such as required skills or technologies, for this job.</p>
                </div>

                <div className='flex flex-col gap-y-1 w-full'>
                    <p className='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#3f3f3f]'>Description</p>

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
                            <textarea name="description" id="description" onChange={(e) => setDescription(e.target.value)}
                        value={description} required  className='w-full h-[200px] border-b-[1.3px] border-[#989898] resize-none'></textarea>
                        </div>
                    </div>

                </div>

                <div className='flex flex-col gap-y-1 w-full'>
                    <p className='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#3f3f3f]'>Application Email/URL </p>
                    <input
                        className='w-full border-[1.3px] border-[#989898] py-4 pl-5 font-Roboto font-normal rounded-2xl text-[24px] text-[#6C6C6C] leading-[28.13px] outline-none '
                        placeholder='Enter an email address or website URL'
                        type="applicationemail"
                        name="applicationemail"
                        onChange={(e) => setApplicationemail(e.target.value)}
                        value={applicationemail}
                        required />
                </div>

                <div className='flex flex-col gap-y-1 w-full'>
                    <p className='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#3f3f3f]'>Salary </p>
                    <input
                        className='w-full border-[1.3px] border-[#989898] py-4 pl-5 font-Roboto font-normal rounded-2xl text-[24px] text-[#6C6C6C] leading-[28.13px] outline-none '
                        placeholder='eg : ₹20,000/-'
                        type="Number"
                        name="salary"
                        onChange={(e) => setSalary(e.target.value)}
                        value={salary}
                        required />
                </div>

                <div className='flex justify-end w-full pt-20'>
                    <Link to='/job-post/page-2'>
                        <button onClick={handleSubmit} className='px-[68px] py-[22px] w-fit rounded-lg bg-darkBlue flex items-center gap-x-2'>
                            <p className='uppercase font-Roboto font-black text-[20px] leading-[23.44px] text-[#ffffff]'>PREVIEW</p>
                            <img src={ArrowRightWhite} alt="arrow-right" />
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default NewJob