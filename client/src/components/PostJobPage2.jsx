import React from 'react'
import PostJob from '../assets/post_job.png'
import JobCard from './JobCard'
import Logo from '../assets/logo_2.svg'
import ArrowRightWhite from '../assets/arrow-right-white.png'
import { Link } from 'react-router-dom'


const PostJobPage2 = () => {
    return (
        <div className='flex flex-col w-full'>

            <div className='flex justify-between items-center h-[409px] w-full bg-[#F8EDFF] px-[200px]'>
                <p className='font-Roboto font-bold text-[58px] leading-[67.97px] text-[#3D3B40]'>Post Review</p>
                <img src={PostJob} alt="" />
            </div>
            <div className='flex justify-center mx-auto pt-[100px] pb-[300px] flex-col'>
                <JobCard
                    companyLogo={Logo}
                    companyName={"Senior Health and Food"}
                    firm={"KARP Ltd"}
                    salary={"₹30k - ₹40k"}
                    location={"Grand Central Pkwy Hollis NY 11003 USA"}
                    posted={"1 Day ago"}
                />


                <div className='flex justify-center w-full pt-20'>
                    <Link to='/'>
                        <button className='px-[68px] py-[22px] w-fit rounded-lg bg-darkBlue flex items-center gap-x-2'>
                            <p className='uppercase font-Roboto font-black text-[20px] leading-[23.44px] text-[#ffffff]'>Post</p>
                            <img src={ArrowRightWhite} alt="arrow-right" />
                        </button>
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default PostJobPage2