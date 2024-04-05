import React from 'react'
import BusinessMan from '../assets/businessman.png'

const BrowseJobs = () => {
    return (
        <div className='flex flex-col w-full h-full bg-darkBlue relative'>
            <img src={BusinessMan} alt="employee" className='inset-0 object-cover w-full h-full ' />
            <div className='absolute inset-0 bg-[#525CEB] opacity-80 z-1 flex flex-col justify-between p-5 items-center' ></div>
            <div className='absolute inset-0 flex z-10 flex-col '>
                <div className='flex flex-col px-5 py-5 gap-y-4'>
                    <p className='font-Roboto font-black text-[58px] leading-[67.97px] text-[#FFFFFF]'>3,000+ Browse Jobs</p>
                    <p className='font-Roboto font-normal text-[17px] leading-[19.92px] text-[#FFFFFF]'>Find Jobs, Employment & Career Opportunities</p>
                </div>

                <div className='w-[1085px] h-[140px] bg-[#ffffff] bg-opacity-20 mx-auto flex flex-col justify-center pl-6 mt-8'>
                    <div className='flex  items-center gap-x-4 pb-5 '>
                        <input className='w-[470px] h-[50px] rounded-lg bg-[#FFFFFF] text-[15px] leading-[17.58px] text-[#939393] border-none outline-none pl-5'
                            type="text"
                            placeholder='Keywords e.g. (Job Tittle, Description, Tags)' />

                        <select className='w-[246px] h-[50px] rounded-lg bg-[#FFFFFF] text-[15px] leading-[17.58px] text-[#939393] border-none outline-none pl-5 pr-5'>
                            <option value="Allregion">All Region</option>
                        </select>

                        <select className='w-[246px] h-[50px] rounded-lg bg-[#FFFFFF] text-[15px] leading-[17.58px] text-[#939393] border-none outline-none pl-5 pr-5'>
                            <option value="category">Choose A category</option>
                        </select>


                    </div>

                    <div className='flex gap-x-2 items-center'>
                        <div className='flex gap-x-1 items-center'>
                            <input type="checkbox" name="freelance" id="freelance" value='freelance' />
                            <label htmlFor="freelance" className='font-Roboto font-medium text-[13px] leading-[15.23px] text-[#FFFFFF]'>Freelance</label>
                        </div>

                        <div className='flex gap-x-1 items-center'>
                            <input type="checkbox" name="fullTime" id="fullTime" value='fullTime' />
                            <label htmlFor="fullTime" className='font-Roboto font-medium text-[13px] leading-[15.23px] text-[#FFFFFF]'>Full Time</label>
                        </div>

                        <div className='flex gap-x-1 items-center'>
                            <input type="checkbox" name="internship" id="internship" value='internship' />
                            <label htmlFor="internship" className='font-Roboto font-medium text-[13px] leading-[15.23px] text-[#FFFFFF]'>Internship</label>
                        </div>

                        <div className='flex gap-x-1 items-center'>
                            <input type="checkbox" name="partTime" id="partTime" value='partTime' />
                            <label htmlFor="partTime" className='font-Roboto font-medium text-[13px] leading-[15.23px] text-[#FFFFFF]'>Part Time</label>
                        </div>

                    </div>

                </div>

                <div className='max-w-[1085px] mx-auto flex mt-10'>
                    <div className='w-[1085px] flex text-left'> {/* Added w-[1085px] */}
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66309 1.90006L3.01177 7.51218C2.78971 7.73193 2.61342 7.99353 2.49311 8.28185C2.3728 8.57017 2.31085 8.87949 2.31085 9.1919C2.31085 9.50432 2.3728 9.81363 2.49311 10.1019C2.61342 10.3903 2.78971 10.6519 3.01177 10.8716L6.9424 14.7761C7.87577 15.7024 9.38865 15.7024 10.3232 14.7761L15.8926 9.24475C16.3353 8.80411 16.5866 8.20683 16.592 7.58225L16.6205 3.578C16.6215 3.26301 16.56 2.95096 16.4396 2.65989C16.3192 2.36882 16.1423 2.1045 15.9191 1.88222C15.696 1.65993 15.4309 1.48409 15.1394 1.36485C14.8479 1.24562 14.5356 1.18536 14.2206 1.18756L10.3446 1.20418C9.71461 1.20596 9.11062 1.45549 8.66309 1.89887M13.482 5.53025C13.3099 5.70059 13.0775 5.79614 12.8354 5.79614C12.5932 5.79614 12.3609 5.70059 12.1888 5.53025C12.104 5.44613 12.0367 5.34605 11.9907 5.23579C11.9448 5.12552 11.9211 5.00726 11.9211 4.88781C11.9211 4.76836 11.9448 4.65009 11.9907 4.53983C12.0367 4.42957 12.104 4.32949 12.1888 4.24537C12.3609 4.07467 12.5935 3.97889 12.836 3.97889C13.0784 3.97889 13.311 4.07467 13.4831 4.24537C13.8394 4.60162 13.8382 5.17637 13.482 5.53025ZM2.3729 11.5782C2.21338 12.0051 2.18005 12.4689 2.27691 12.9142C2.37377 13.3596 2.59672 13.7676 2.91915 14.0897L5.2514 16.422C5.69248 16.8631 6.21613 17.213 6.79244 17.4517C7.36875 17.6905 7.98644 17.8133 8.61024 17.8133C9.23404 17.8133 9.85173 17.6905 10.428 17.4517C11.0044 17.213 11.528 16.8631 11.9691 16.422L16.104 12.2871C16.4381 11.9534 16.626 11.5006 16.6265 11.0284V10.1021L11.9691 14.7595C11.8888 14.8408 11.8052 14.9189 11.7185 14.9934L11.1295 15.5824C10.7987 15.9133 10.406 16.1758 9.97369 16.3548C9.54143 16.5339 9.07813 16.6261 8.61024 16.6261C8.14236 16.6261 7.67905 16.5339 7.24679 16.3548C6.81453 16.1758 6.42178 15.9133 6.09096 15.5824L5.49959 14.9899C5.4146 14.916 5.33222 14.8391 5.25259 14.7595L2.91915 12.4272C2.67812 12.1868 2.49179 11.8972 2.3729 11.5782Z" fill="#0F0A52" />
                        </svg>

                        <p className='w-[492px] font-Roboto font-bold text-[13px] leading-[15.23px] text-[#FFFFFF] flex gap-x-2'>
                            Trending Keywords:
                            <span>
                                Developer,
                            </span>
                            <span>
                                Design,
                            </span>
                            <span>
                                IT Company,
                            </span>
                            <span>
                                Media,
                            </span>
                            <span>
                                News,
                            </span>
                            <span>
                                Medical
                            </span>
                        </p>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default BrowseJobs