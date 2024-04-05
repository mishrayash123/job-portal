import React from 'react'

const NotificationsCard = (props) => {

    const {time, position, location } = props;
    return (
        <div className='w-[795px] h-[228px] rounded-md border-[0.5px] border-[#666666]  '>
            <div className='w-[716px] mx-auto flex flex-col gap-y-7 h-full  justify-center  '>
                <div className='w-full flex flex-col gap-y-1'>
                    <p className='font-semibold font-LeagueSpartan text-[16px] leading-[17.92px] text-[#7A7A7A]'>{time}</p>
                    <div className='w-full border-[1px] border-[#A8A8A8] h-[1px]'></div>
                </div>


                <div className='flex flex-col gap-y-4 w-full'>
                    <div className='w-full flex justify-between items-center'>
                        <p className='font-Roboto font-normal text-[16px] leading-[18.75px] text-[#414141]'>
                            1 new <span></span>
                            <span className='font-Roboto font-medium text-[16px] leading-[18.75px] text-[#414141]'>
                                {position}
                            </span>
                            in {location}
                        </p>

                        <button className='px-[26px] py-[10px] w-fit rounded-lg bg-[#2E216B]'>
                            <p className='font-Roboto font-normal text-[13px] leading-[15.23px] text-[#ffffff]'>View Job</p>
                        </button>
                    </div>
                    <div className='w-full border-[1px] border-[#A8A8A8] h-[1px]'></div>
                </div>

                <div className='flex items-center gap-x-2'>
                    <p className='font-semibold font-LeagueSpartan text-[13px] leading-[14.56px] text-[#7A7A7A]'>Is this notification useful?</p>

                    <div className='flex gap-x-2'>
                        <button className='px-[9px] py-[6px] border-[0.5px] rounded-lg w-fit border-[#2E216B]'>
                            <p className='font-Roboto font-light text-[10px] leading-[11.72px]'>
                                Yes
                            </p>
                        </button>
                        <button className='px-[9px] py-[6px] border-[0.5px] rounded-lg w-fit border-[#2E216B]'>
                            <p className='font-Roboto font-light text-[10px] leading-[11.72px]'>
                                No
                            </p>
                        </button>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default NotificationsCard