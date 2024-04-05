import React from 'react'
import PostJob from '../assets/post_job.png'

const PostJobComp = () => {
  return (
    <div className='flex justify-between items-center h-[409px] w-full bg-[#F8EDFF] px-[200px]'>
        <p className='font-Roboto font-bold text-[58px] leading-[67.97px] text-[#3D3B40]'>Post A Job</p>
        <img src={PostJob} alt="" />
    </div>
  )
}

export default PostJobComp