import React from 'react';

const TopCompaniesCard = (props) => {
    const { logo, companyName, country, openings, background } = props;

    return (
        <div style={{ backgroundColor: background }} className='w-[552px] h-[340px] rounded-3xl px-[22px] py-[53px] gap-[10px]'>
            <div className='flex flex-col w-full h-full items-center justify-between'>
                <div className='flex justify-between w-[501px] h-[154px]'>
                    <div className='flex flex-col h-full gap-y-4'>
                        <p className='font-LeagueSpartan font-bold text-[36px] leading-[40.32px] text-[#ffffff]'>{companyName}</p>
                        <p className='font-LeagueSpartan font-normal text-[24px] leading-[26.88px] text-[#ffffff]'>{country}</p>
                    </div>
                    <img src={logo} alt="logo" className='max-w-[242px] max-h-[154px]' />
                </div>

                <button className='px-[80px] py-[8px] rounded-lg bg-[#0F0A52] w-fit'>
                    <p className='font-Roboto font-medium text-[11px] leading-[12.89px] text-[#ffffff]'>{openings} Openings</p>
                </button>
            </div>

        </div>
    )
}

export default TopCompaniesCard;
