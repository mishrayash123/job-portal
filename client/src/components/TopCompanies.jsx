import React from 'react'
import TopCompaniesCard from './TopCompaniesCard'
import { topCompaniesData } from '../data/topcompanies'

const TopCompanies = () => {
    return (
        <div className='w-[1164px] flex flex-col mx-auto pt-12  pb-32'>
            <div className='flex justify-between w-full py-20 '>
                <div className='flex flex-col justify-evenly  '>
                    <p className='h-[38px] font-SofiaSans font-bold text-[32px] leading-[38.4px] uppercase'>TOP HIRING COMPANIES</p>
                    <div className='w-[59px] flex justify-between'>
                        <div className='w-[39px] border-[3px] border-[#25C5D2]'></div>
                        <div className='w-[12px] border-[3px] border-[#25C5D2]'></div>
                        <div className='w-[4px] border-[3px] border-[#25C5D2]'></div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-y-10 lg:grid-cols-2 md:grid-cols-1'>
                {
                    topCompaniesData.map((company) => (
                        <TopCompaniesCard
                        key={company.id}
                        logo={company.logo}
                        companyName= {company.companyName}
                        country={company.companyName}
                        openings={company.openings}
                        background={company.background}
                        />
                    ))
                }

            </div>


        </div>
    )
}

export default TopCompanies