import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'

import BrowseJobs from '../components/BrowseJobs'
import './Jobs.css'
import { jobOftheDayData } from '../data/jobOfTheDay'
import JobsOtdCards from '../components/JobsOtdCards'
import Footer from '../components/Footer'

const Jobs = () => {
    const [job, setjob] = useState([]);
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
            console.log(data)
            setjob(data)
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
        <div className='flex flex-col '>
            <Navbar />
            <BrowseJobs />

            <div className='flex flex-col w-full pb-[180px] pt-[120px]'>
                <div className='flex flex-col justify-center items-center gap-y-2 pb-[100px]'>
                    <p className='text-center font-Roboto font-bold text-[58px] leading-[67.97px] text-[#0F0A52]'>Job of the Day</p>
                    <p className='text-center font-Roboto font-normal text-[20px] leading-[23.44px] text-[#625F83]'>Search and connect with the right candidates faster</p>
                </div>
                <div className='w-full px-[100px] flex gap-x-[80px]'>
                    <div className='flex flex-col border-[1px] border-[#DADADA] w-[281px] h-[302px] rounded-[10px] searchCard '>
                        <div className='w-full h-[57px] bg-[#17D5FF] flex justify-center items-center rounded-t-[10px]'>
                            <p className='font-Roboto font-medium text-[20px] leading-[23.44px] text-[#ffffff] '>Jobs By Types</p>
                        </div>
                        <div className='flex flex-col gap-y-1 px-4 py-6'>
                            <div className='flex items-center gap-x-3'>
                                <input
                                    className='border-[1.5px] border-[#FF2C2C]'
                                    type="checkbox"
                                    name="fullTime"
                                    id="fullTime"
                                    value='fullTime' />
                                <div className='flex items-center gap-x-1'>
                                    <label htmlFor="fullTime" className='font-Inter font-normal text-[15px] leading-[18.15px]'>Full Time</label>
                                    <p className='font-Inter font-normal text-[15px] leading-[18.15px] text-[#0085FF]'>(1)</p>
                                </div>

                            </div>

                            <div className='flex items-center gap-x-3'>
                                <input
                                    className='border-[1.5px] border-[#FF2C2C]'
                                    type="checkbox"
                                    name="partTime"
                                    id="partTime"
                                    value='partTime' />
                                <div className='flex items-center gap-x-1'>
                                    <label htmlFor="partTime" className='font-Inter font-normal text-[15px] leading-[18.15px]'>Part  Time</label>
                                    <p className='font-Inter font-normal text-[15px] leading-[18.15px] text-[#0085FF]'>(5)</p>
                                </div>

                            </div>

                            <div className='flex items-center gap-x-3'>
                                <input
                                    className='border-[1.5px] border-[#FF2C2C]'
                                    type="checkbox"
                                    name="internship"
                                    id="internship"
                                    value='internship' />
                                <div className='flex items-center gap-x-1'>
                                    <label htmlFor="internship" className='font-Inter font-normal text-[15px] leading-[18.15px]'>Internship</label>
                                    <p className='font-Inter font-normal text-[15px] leading-[18.15px] text-[#0085FF]'>(0)</p>
                                </div>

                            </div>

                            <div className='flex items-center gap-x-3'>
                                <input
                                    className='border-[1.5px] border-[#FF2C2C]'
                                    type="checkbox"
                                    name="freelance"
                                    id="freelance"
                                    value='freelance' />
                                <div className='flex items-center gap-x-1'>
                                    <label htmlFor="freelance" className='font-Inter font-normal text-[15px] leading-[18.15px]'>Freelance</label>
                                    <p className='font-Inter font-normal text-[15px] leading-[18.15px] text-[#0085FF]'>(7)</p>
                                </div>

                            </div>

                            <div className='flex items-center gap-x-3'>
                                <input
                                    className='border-[1.5px] border-[#FF2C2C]'
                                    type="checkbox"
                                    name="temporary"
                                    id="temporary"
                                    value='temporary' />
                                <div className='flex items-center gap-x-1'>
                                    <label htmlFor="temporary" className='font-Inter font-normal text-[15px] leading-[18.15px]'>Temporary</label>
                                    <p className='font-Inter font-normal text-[15px] leading-[18.15px] text-[#0085FF]'>(5)</p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-x-[60px] gap-y-[40px]'>
                    {
          job.map(job =>(
                                <JobsOtdCards
                                    key={job._id}
                                    jobid={job._id}
                                    // companyLogo={job.companyLogo}
                                    companyName={job.jobtitle
                                    }
                                    firm={job.firm}
                                    salary={job.salary
                                        }
                                    location={job.location
                                    }
                                    posted={job.createdAt.slice(0,10)
                                    }
                                    jobType= {job.jobtags
                                    }
                                />
                            ))
                        }
                    </div>
                </div>

                


            </div>


            <Footer/>
        </div>
    )
}

export default Jobs