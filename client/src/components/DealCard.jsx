import React from 'react';
import './DealCard.css';

const DealCard = (props) => {
    const { title, logo, description } = props;

    return (
        <div className='w-[321px] h-[192px] dealCard flex flex-col rounded-[18px] px-5 py-4 justify-between'>
            <div className='flex gap-x-3 items-center'>
                <img src={logo} alt="logo" className='w-[77px] h-[77px]' />
                <p className='font-SofiaSans font-bold text-[24px] leading-[28.8px] text-[#ffffff] w-[229px]'>{title}</p>
            </div>
            <p className='font-SofiaSans font-bold text-[13px] leading-[15.6px] text-[#ffffff]'>
                {description}
            </p>
        </div>
    );
}

export default DealCard;
