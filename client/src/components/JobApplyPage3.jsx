import React, { useState ,useEffect} from 'react'
import Freelance from '../assets/freelance.png'
import ArrowLeft from '../assets/arrow-left.png'
import CoverLetter from '../assets/cover-letter.png'
import Upload from '../assets/upload.png'
import { Link } from 'react-router-dom'
import ArrowDown from '../assets/down_arrow.png'
import { useLocation } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const JobApplyPage3 = () => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const nav = useNavigate();
    const [data,setdata] = useState([])
    const location = useLocation();

    const fetchData = async () => {
        try {
          const response = await fetch(
            "http://localhost:8080/getjobs",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.ok) {
            const data = await response.json();
                setdata(data)
          } else {
            alert("Something went wrong");
          }
        } catch (error) {
          console.error("Error :", error);
        }
      }
    
      useEffect(() => {
        fetchData();
      }, []);

    return (
        <>
        {
            data.filter((e) => (e._id == location.state.id)).map(job => (
        <div className='flex flex-col w-full  '>
            <div className='w-full h-[258px] bg-[#525CEB] px-[50px] my-auto'>
                <div className='w-[1085px] h-[163px] bg-[#ffffff] bg-opacity-20 flex flex-col justify-center pl-6 mt-8'>
                    <div className='flex flex-col gap-y-3'>
                        <p className='font-Roboto font-black text-[58px] leading-[67.97px] text-[#ffffff]'>{job.jobtitle}</p>
                        <div className='flex gap-x-3 px-[18px] py-[6px] w-fit bg-[#FFFFFF] rounded-lg'>
                            <img src={Freelance} alt="freelance" />
                            <p className='font-Roboto font-extrabold text-[17px] leading-[19.92px] text-[#6F78EA]'>Freelance</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full  flex '>
                <div className='w-[60%] bg-[#ffffff]  py-20'>
                    <div className='flex flex-col mx-auto w-[625px]'>
                        <div className='flex flex-col gap-y-5 w-full'>
                            <div className='flex justify-between items-baseline'>
                                <img src={ArrowLeft} alt="" />
                                <p className='font-LeagueSpartan font-semibold text-[20px] leading-[22.4px] text-darkBlue'>Exit</p>
                            </div>
                            <div className="progress-bar-container">
                                <div className="progress-bar" style={{ width: `${80}%` }}></div>
                            </div>
                        </div>
                        <p className='font-bold font-SofiaSans text-[32px] leading-[38.4px] py-7'>Want to include any supporting documents?</p>

                        <div className='flex gap-x-3 items-center'>
                            <p className='font-SofiaSans font-bold text-[24px] leading-[28.8px] text-[#000000]'>Cover Letter</p>
                            <p className='font-Roboto font-normal text-[16px] leading-[18.75px] text-[#666666]'>(Optional)</p>
                        </div>

                        <div className='flex flex-col gap-y-5 pb-[80%]'>
                            <div className='flex flex-col gap-y-4 border-[1px] border-[#DFDFDF] rounded-lg justify-center'>
                                <div className='flex gap-x-3 items-center px-3 py-4'>
                                    <img src={CoverLetter} alt="cover-letter" className='w-[56px] h-[48px]' />
                                    <div className='flex flex-col'>
                                        <p className='font-LeagueSpartan font-semibold text-[24px] leading-[26.88px] text-darkBlue'>Apply without cover letter</p>
                                        <p className='font-Roboto font-normal text-[16px] leading-[18.75px] text-[#666666]'>A cover letter is optional for this job.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-y-4 border-[1px] border-[#DFDFDF] rounded-lg justify-center'>
                                <div className='flex gap-x-3 items-center px-3 py-4'>
                                    <img src={Upload} alt="cover-letter" className='w-[56px] h-[48px]' />
                                    <div className='flex flex-col'>
                                        <p className='font-LeagueSpartan font-semibold text-[24px] leading-[26.88px] text-darkBlue'>Write a cover letter</p>
                                        <p className='font-Roboto font-normal text-[16px] leading-[18.75px] text-[#666666]'>Update your cover letter for this application.</p>
                                    </div>

                                    
                                </div>
                            </div>
                        </div>

                            <button className='px-[264px] py-[22px] rounded-lg bg-darkBlue w-full'  onClick={
                                    (e) => {
                                      nav('/job-apply/page-4', { state: { id:job._id} });
                                    }
                                }>
                                <p className='font-Roboto font-bold text-[15px] leading-[17.58px] text-[#ffffff] uppercase'>
                                        Continue
                                </p>
                            </button>

                    </div>
                </div>
                <div className='w-[40%] bg-[#F3F4F6] flex    py-20'>
                    <div className={`relative flex flex-col mx-auto bg-[#ffffff] rounded-2xl w-[491px] ${isCollapsed ? 'h-[347px]' : 'h-[477px]'} gap-y-2 px-5 py-6 overflow-hidden`}>
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-y-2 border-b-[1.3px] border-b-[#DFDFDF]  py-5'>
                                <p className='font-Roboto font-medium text-[20px] leading-[23.44px] text-[#414141]'>{job.jobtitle}</p>
                                <p className='font-Roboto font-normal text-[13px] leading-[15.23px] text-[#666666]'>
                                {job.location}
                                </p>
                            </div>

                            <div className='py-5 gap-y-4 flex flex-col'>
                                <p className='font-SofiaSans font-bold text-[20px] leading-6'>Description</p>
                                <p className='font-LeagueSpartan font-normal text-[13px] leading-[14.56px] text-[#6C6C6C]'>
                                {job.description}
                                </p>
                            </div>

                            {/* <div className='py-5 gap-y-4 flex flex-col'>
                                <p className='font-SofiaSans font-bold text-[20px] leading-6'>Responsibilities</p>
                                <ul className='list-disc pl-2'>
                                    <li className='font-LeagueSpartan font-normal text-[13px] leading-[14.56px] text-[#6C6C6C] py-2'>
                                        Provide leadership and guidance to a team of health and nutrition professionals, including dietitians, nutritionists, and community health workers.
                                    </li>
                                    <li className='font-LeagueSpartan font-normal text-[13px] leading-[14.56px] text-[#6C6C6C] py-2'>
                                        Provide training and education to staff and community members on topics related to nutrition, food safety, and healthy eating.
                                    </li>
                                </ul>
                            </div> */}
                        </div>

                        <div className="absolute bottom-0 left-0 w-full bg-[#ffffff]">
                            <div className="h-[63px] flex justify-center items-center">
                                <div className="flex gap-x-2 items-center" onClick={toggleCollapse}>
                                    <p className="font-semibold text-darkBlue font-LeagueSpartan text-[20px] leading-[22.4px]">{isCollapsed ? 'View Full Job Description' : 'View Less'}</p>
                                    <img src={ArrowDown} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
            ))}
            </>
    )
}

export default JobApplyPage3