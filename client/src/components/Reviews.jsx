import React from 'react'
import Woman from '../assets/womans.png'
import WomanWithLaptop from '../assets/woman-laptop.png'
import RoundWithoutBg from '../assets/round-without-bg.png'
import RoundWithBg from '../assets/round-with-bg.png'
import Star from '../assets/star.png'
import ReviewGirl from '../assets/review-girl.png'
import ReviewBoy from '../assets/review-boy.png'

const Reviews = () => {
    return (
        <div className='flex w-full h-[493px]  mb-[180px]'>
            <div className='flex w-full h-full  '>
                <div className='relative h-full w-[50%] box-border overflow-hidden '>
                    <img src={WomanWithLaptop} alt="employee" className='absolute inset-0 object-cover w-full h-full' />
                    <div className='absolute inset-0 bg-lightBlack opacity-80 z-1 flex flex-col justify-between p-5 items-center' ></div>
                    <div className='absolute inset-0 flex justify-evenly items-center z-10 flex-col  '>
                        <p className='uppercase font-SofiaSans font-black text-[32px] leading-[38.4px] text-[#FFFFFF]'>What Candidate Says?</p>
                        
                        <div className='w-[385px] h-[160px] rounded flex flex-col bg-[#FFFFFF] justify-center items-center gap-y-2 relative'>
                        <img src={ReviewGirl} alt="user" className='w-[112px] h-[112px] rounded-[56px] border-[4px] border-[#FFFFFF] object-cover absolute -top-[50px] left-3' />
                            <p className='font-medium font-LeagueSpartan text-[12px] leading-[13.44px] text-center'>Akshaya Sharma</p>
                            <p className='font-medium font-LeagueSpartan text-[12px] leading-[13.44px] text-center text-[#0575DD]'>(Devops)</p>
                            <p className='font-medium font-LeagueSpartan text-[12px] leading-[13.44px] text-center text-[#000000] w-fit'>Lorem ipsum dolor sit amet consectetur. Ipsum etiam cras pulvinar blanditamet</p>
                            <div className='flex justify-center gap-x-1 '>
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />

                            </div>
                        </div>
                        <div className='flex justify-evenly gap-x-3 items-center'>
                            <img src={RoundWithoutBg} alt="round" />
                            <img src={RoundWithBg} alt="round" />
                            <img src={RoundWithBg} alt="round" />
                        </div>
                    </div>
                </div>
                <div className='relative h-full w-[50%] box-border overflow-hidden mx-auto'>
                    <img src={Woman} alt="employee" className='absolute inset-0 object-cover w-full h-full' />
                    <div className='absolute inset-0 bg-[#525CEB] opacity-80 z-1 flex flex-col justify-between p-5 items-center' ></div>
                    <div className='absolute inset-0 flex justify-evenly items-center z-10 flex-col '>
                        <p className='uppercase font-SofiaSans font-black text-[32px] leading-[38.4px] text-[#FFFFFF]'>What Employer Says?</p>
                        <div className='w-[385px] h-[160px] rounded flex flex-col bg-[#FFFFFF] justify-center items-center gap-y-2 relative'>
                        <img src={ReviewBoy} alt="user" className='w-[112px] h-[112px] rounded-[56px] border-[4px] border-[#FFFFFF] object-cover absolute -top-[50px] left-3' />
                            <p className='font-medium font-LeagueSpartan text-[12px] leading-[13.44px] text-center'>Akshaya Sharma</p>
                            <p className='font-medium font-LeagueSpartan text-[12px] leading-[13.44px] text-center text-[#0575DD]'>(Devops)</p>
                            <p className='font-medium font-LeagueSpartan text-[12px] leading-[13.44px] text-center text-[#000000] w-fit'>Lorem ipsum dolor sit amet consectetur. Ipsum etiam cras pulvinar blanditamet</p>
                            <div className='flex justify-center gap-x-1 '>
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />
                                <img src={Star} alt="star" />

                            </div>
                        </div>
                        <div className='flex justify-evenly gap-x-3 items-center'>
                            <img src={RoundWithoutBg} alt="round" />
                            <img src={RoundWithBg} alt="round" />
                            <img src={RoundWithBg} alt="round" />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Reviews