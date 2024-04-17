import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import { cardData } from '../data/card'
import JobCard from '../components/JobCard'
import Footer from '../components/Footer'
import {useNavigate} from 'react-router-dom'

const MyJobs = () => {
const [data,setdata] = useState([])
const userid = localStorage.getItem("jobportaluserId");
const nav = useNavigate();

    const fetchData = async () => {
        try {
          const response = await fetch(
            "http://localhost:8080/getsave",
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

            <div className='w-full h-[258px] bg-[#525CEB] px-[50px] py-[50px]'>
                <p className='font-Roboto font-black text-[#ffffff] text-[58px]'>My jobs</p>
                <p className='px-[18px] py-[6px] bg-[#FFFFFF] rounded-xl w-fit font-Roboto font-extrabold text-[17px] leading-[19.92px] text-[#6F78EA]'>
                    {
                        data.filter((e)=>(e.userid===userid)).length
                    }
                </p>
            </div>

            <div className='w-full  py-[100px]'>
                <div className='w-[795px] h-auto mx-auto rounded-[20px] border-[0.5px] border-[#666666] px-10 py-9 '>
                    <div className='flex flex-col w-[572px] mx-auto '>
                        {/* <p className='font-LeagueSpartan font-medium text-[16px] leading-[17.92px] text-[#7A7A7A]'>Saved Today</p> */}

                        <div className='flex flex-col gap-y-8 mx-auto'>
                        {
          data.filter((e)=>(e.userid===userid)).map(job =>(
                                    <JobCard
                                    jobid={job.jobid}
                                    companyName={job.companyName
                                    }
                                    firm={job.firm}
                                    salary={job.salary
                                        }
                                    location={job.location
                                    }
                                    posted={job.posted
                                    }
                                    jobType={job.jobType}
                                    />
                                ))
                            }
                        </div>
                    </div>


                </div>
            </div>


            <Footer />
        </div>
    )
}

export default MyJobs