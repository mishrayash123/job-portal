import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import JobSearch from '../components/JobSearch'
import RecentJobs from '../components/RecentJobs'
import Deals from '../components/Deals'
import TopCompanies from '../components/TopCompanies'
import Stats from '../components/Stats'
import Category from '../components/Category'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <div className='w-full box-border'>
            <div className='flex flex-col h-[970px] relative'>
                <Navbar />
                <HeroSection />
            </div>
            <div className='flex flex-col'>
                <JobSearch />
                <RecentJobs />
            </div>
            
            
                <Deals/>
                <TopCompanies/>
                <Stats/>
                <Category/>
                <Reviews/>
                <Footer/>
            

        </div>
    )
}

export default HomePage