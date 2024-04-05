import React, { useState } from 'react'
import JobCard from './JobCard';
// import JobCardWithShadow from './JobCardWithShadow';
import { cardData } from '../data/card';

const RecentJobs = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <div className='w-[1164px] flex flex-col mx-auto pt-12  pb-32'>
            <div className='flex justify-between w-full py-20 '>
                <div className='flex flex-col justify-evenly w-[187px] '>
                    <p className='h-[38px] font-SofiaSans font-bold text-[32px] leading-[38.4px] uppercase'>Recent Jobs</p>
                    <div className='w-[59px] flex justify-between'>
                        <div className='w-[39px] border-[3px] border-[#25C5D2]'></div>
                        <div className='w-[12px] border-[3px] border-[#25C5D2]'></div>
                        <div className='w-[4px] border-[3px] border-[#25C5D2]'></div>

                    </div>

                </div>
                <div className='w-fit h-[41px] rounded-[11px] border-[0.5px] border-[#878787] font-Roboto text-[14px] leading-[14.06px] flex items-center uppercase'>
                    <div
                        className={`h-full w-fit flex justify-center items-center px-[22px] py-[13.5px] border-r-[0.5px] cursor-pointer
                ${activeTab === 0 ? 'bg-[#2E216B] text-[#ffffff] rounded-l-[11px]' : 'text-[#000000]'}`}
                        onClick={() => handleTabClick(0)}
                    >
                        Featured
                    </div>
                    <div
                        className={`h-full flex justify-center items-center px-[22px] py-[13.5px] border-r-[0.5px] border-[#878787]  cursor-pointer
                ${activeTab === 1 ? 'bg-[#2E216B] text-[#ffffff]' : 'text-[#000000]'}`}
                        onClick={() => handleTabClick(1)}
                    >
                        Recent jobs
                    </div>
                    <div
                        className={`h-full flex justify-center items-center px-[22px] py-[13.5px] border-r-[0.5px] border-[#878787] cursor-pointer
                ${activeTab === 2 ? 'bg-[#2E216B] text-[#ffffff]' : 'text-[#000000]'}`}
                        onClick={() => handleTabClick(2)}
                    >
                        Full time
                    </div>
                    <div
                        className={`h-full flex justify-center items-center px-[22px] py-[13.5px] cursor-pointer
                ${activeTab === 3 ? 'bg-[#2E216B] text-[#ffffff] rounded-r-[11px]' : 'text-[#000000]'}`}
                        onClick={() => handleTabClick(3)}
                    >
                        Part time
                    </div>
                </div>
            </div>

            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-x-3 gap-y-[64px] '>
                {
                    cardData.map(job => (
                        <JobCard
                        key={job.id}
                        companyLogo= {job.companyLogo}
                        companyName= {job.companyName}
                        firm= {job.firm}
                        salary= {job.salary}
                        location= {job.location}
                        posted= {job.posted}
                        />
                    ))
                }

                {/* <JobCardWithShadow /> */}
            </div>
        </div>
    )
}

export default RecentJobs