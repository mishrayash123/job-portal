import React from 'react'
import Groups from '../assets/friends-group.jpg'
import { statsData } from '../data/stats'

const Stats = () => {
    return (
        <div className='relative h-[289px] w-full box-border overflow-hidden mx-auto'>
            <img src={Groups} alt="employee" className='absolute inset-0 object-cover w-full h-full' />
            <div className='absolute inset-0 bg-lightBlack opacity-80 z-1 flex flex-col justify-between p-5 items-center' >

            </div>
            <div className='absolute inset-0 flex justify-evenly items-center z-10  gap-y-[80px]'>
                {
                    statsData.map((stats,index) => (
                        <div className='flex flex-col justify-evenly items-center gap-y-1' key={index}>
                            <p className='font-Roboto font-bold text-[36px] leading-[42.19px] text-[#ffffff]'>{stats.number}+</p>
                            <div className='w-[59px] flex justify-between'>
                                <div className='w-[39px] border-[3px] border-[#FFFFFF]'></div>
                                <div className='w-[12px] border-[3px] border-[#FFFFFF]'></div>
                                <div className='w-[4px] border-[3px] border-[#FFFFFF]'></div>
                            </div>
                            <p className='font-SofiaSans font-bold text-[24px] leading-[28.8px] text-[#ffffff]'>{stats.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Stats