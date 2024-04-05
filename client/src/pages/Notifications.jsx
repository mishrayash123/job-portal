import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NotificationsCard from '../components/NotificationsCard'
import { notificationData } from '../data/notifications'

const Notifications = () => {
    return (
        <div className='flex flex-col '>
            <Navbar />

            <div className='w-full h-[258px] bg-[#525CEB] px-[50px] py-[50px]'>
                <p className='font-Roboto font-black text-[#ffffff] text-[58px]'>Notifications</p>
            </div>

            <div className='mx-auto py-20 px-20 flex flex-col gap-y-6'>
                {
                    notificationData.map((item) => (
                        <NotificationsCard 
                        key={item.id}
                        time= {item.time}
                        position = {item.position}
                        location = {item.location}
                        />
                    ))
                }

            </div>




            <Footer />
        </div>
    )
}

export default Notifications