import React from 'react'
import EmployeeImage from '../assets/employees.jpg'
import './Deals.css'
import DealCard from './DealCard'
import { dealsData } from '../data/deals'



const Deals = () => {
  return (
    <div className='relative h-[508px] w-full box-border overflow-hidden'>
    <img src={EmployeeImage} alt="employee" className='absolute inset-0 object-cover w-full h-full' />
    <div className='absolute inset-0 bg-lightBlack opacity-80 z-1 flex flex-col justify-between p-5 items-center' >
    </div>
    <div className='absolute inset-0 flex justify-center items-center z-10 flex-col gap-y-[80px]'>
        <p className='font-SofiaSans font-bold text-[#ffffff] text-[32px] leading-[38.4px] z-2 text-shadow-sm'>OFFERING THE BEST DEALS</p>
        <div className='flex gap-x-6 '> 
        {
            dealsData.map((deals) => (
              <DealCard 
              key={deals.id}
              title={deals.title}
              logo= {deals.logo}
              description= {deals.description}
              />
            ))
        }
        </div>
        
        
    </div>
</div>


  )
}

export default Deals