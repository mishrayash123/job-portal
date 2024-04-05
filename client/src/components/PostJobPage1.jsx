import React from 'react'
import PostJobComp from './PostJobComp'
import NewJob from './NewJob'

const PostJobPage1 = () => {
  return (
    <div className='flex flex-col'>
        <PostJobComp />
            <div className='flex justify-center mx-auto pt-[100px] pb-[300px]'>
                <NewJob />

            </div>
    </div>
  )
}

export default PostJobPage1