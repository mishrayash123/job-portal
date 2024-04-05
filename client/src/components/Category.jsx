import React from 'react'
import { categoryData } from '../data/category'
import './Category.css'

const Category = () => {
    return (
        <div className='w-[1164px] flex flex-col mx-auto pt-12  pb-[160px]'>
            <div className='flex justify-center w-full py-20 '>
                <div className='flex flex-col jusfify-center items-center  '>
                    <p className='h-[38px] font-SofiaSans font-bold text-[32px] leading-[38.4px] uppercase'>POPULAR CATEGORIES</p>
                    <div className='w-[59px] flex justify-between'>
                        <div className='w-[39px] border-[3px] border-[#25C5D2]'></div>
                        <div className='w-[12px] border-[3px] border-[#25C5D2]'></div>
                        <div className='w-[4px] border-[3px] border-[#25C5D2]'></div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-[80px]'>
                {
                    categoryData.map((category) => (
                        <div className='flex flex-col justify-center items-center gap-x-4 gap-y-3 w-[269px] h-[159px] categoryCard' key={category.id}> 
                            <img src={category.logo} alt="category" className='w-[50px] h-[50px]' />
                            <p className='font-LeagueSpartan font-medium text-[14px] leading-[15.68px] text-[#000000]'>{category.title}</p>
                            <p className='font-LeagueSpartan font-light text-[12px] leading-[12.32px] text-[#000000]'>{category.jobs} Jobs</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category