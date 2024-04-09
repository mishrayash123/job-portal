import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const PostJob = () => {
    return (
        <div className='flex flex-col w-full'>
            <Navbar />
            <div className='flex flex-col w-full'>
                <Outlet/>
            </div>
            
            <Footer/>
        </div>
    )
}

export default PostJob