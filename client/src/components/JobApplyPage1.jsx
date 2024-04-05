import React from 'react';
import BusinessMan from '../assets/businessman.png';
import Freelance from '../assets/freelance.png'
import CompanyLocation from '../assets/company_location.png'
import Twitter from '../assets/twitter_blue.png'
import Youtube from '../assets/youtube_blue.png'
import Instagram from '../assets/instagram_blue.png'
import Facebook from '../assets/facebook_blue.png'
import './JobApplyPage1.css'
import Logo from '../assets/logo_2.svg'
import { jobApplyData } from '../data/jobApply'
import { Link } from 'react-router-dom';

const JobApplyPage1 = () => {
    return (
        <div className='flex flex-col w-full h-full justify-center items-center'>
            <div className='flex flex-col w-full h-full bg-darkBlue relative items-center'>
                <img src={BusinessMan} alt="employee" className='inset-0 object-cover w-full h-full ' />
                <div className='absolute inset-0 bg-[#525CEB] opacity-80 z-1 flex flex-col justify-between p-5 items-center' ></div>
                <div className='absolute inset-0 flex z-10 flex-col w-full h-full justify-center items-center'>
                    <div className='w-[1085px] h-[163px] bg-[#ffffff] bg-opacity-20 flex flex-col justify-center pl-6 mt-8'>
                        <div className='flex flex-col gap-y-3'>
                            <p className='font-Roboto font-black text-[58px] leading-[67.97px] text-[#ffffff]'>Senior Health and Food</p>
                            <div className='flex gap-x-3 px-[18px] py-[6px] w-fit bg-[#FFFFFF] rounded-lg'>
                                <img src={Freelance} alt="freelance" />
                                <p className='font-Roboto font-extrabold text-[17px] leading-[19.92px] text-[#6F78EA]'>Freelance</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex flex-col px-20 py-[100px] w-full '>
                <div className='flex gap-x-20'>
                    <div className='flex flex-col w-[803px] gap-y-10 border-[1.3px] border-[#DFDFDF] '>
                        <div className='flex flex-col gap-y-6 px-6 py-6
                        '>
                            <p className='font-SofiaSans font-bold text-[32px] leading-[38.4px] text-[#000000]'>Description</p>
                            <p className='font-medium font-LeagueSpartan text-[16px] leading-[17.92px] text-[#6C6C6C]'>
                                We are seeking a highly experienced and dedicated Senior Health and Food Specialist to join our team.
                                The Senior Health and Food Specialist will be responsible for overseeing health and nutrition programs, developing and implementing strategies to promote healthy eating habits, and ensuring compliance with relevant health and food safety regulations.
                                The ideal candidate will possess strong leadership skills, extensive knowledge of nutrition and public health, and a passion for improving community health outcomes through education and advocacy.
                            </p>
                        </div>

                        <div className='flex flex-col gap-y-6 px-6 py-6'>
                            <p className='font-SofiaSans font-bold text-[32px] leading-[38.4px] text-[#000000]'>Responsibilities</p>
                            <div className='flex flex-col '>
                                <ul className='list-disc px-5'>
                                    <li className='font-LeagueSpartan font-medium text-[16px] leading-[17.92px] text-[#6C6C6C]'>
                                        Develop and implement health and nutrition programs aimed at promoting healthy eating habits and preventing diet-related diseases.
                                    </li>
                                    <li className='font-LeagueSpartan font-medium text-[16px] leading-[17.92px] text-[#6C6C6C]'>
                                        Provide leadership and guidance to a team of health and nutrition professionals, including dietitians, nutritionists, and community health workers.
                                    </li>
                                    <li className='font-LeagueSpartan font-medium text-[16px] leading-[17.92px] text-[#6C6C6C]'>
                                        Provide training and education to staff and community members on topics related to nutrition, food safety, and healthy eating.
                                    </li>
                                    <li className='font-LeagueSpartan font-medium text-[16px] leading-[17.92px] text-[#6C6C6C]'>
                                        Ensure compliance with relevant health and food safety regulations, including those related to food labeling, sanitation, and foodborne illness prevention.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='flex flex-col gap-y-6 px-6 py-6'>
                            <p className='font-SofiaSans font-bold text-[32px] leading-[38.4px] text-[#000000]'>Minimum Qualifications</p>
                            <ul className='list-disc px-5'>
                                <li className='font-LeagueSpartan font-medium text-[16px] leading-[17.92px] text-[#6C6C6C]'>
                                    Master's degree or higher in public health, nutrition, dietetics, or a related field.
                                </li>
                                <li className='font-LeagueSpartan font-medium text-[16px] leading-[17.92px] text-[#6C6C6C]'>
                                    Registered Dietitian (RD) credential preferred.
                                </li>
                                <li className='font-LeagueSpartan font-medium text-[16px] leading-[17.92px] text-[#6C6C6C]'>
                                    Strong knowledge of nutrition science, dietary guidelines, and food safety regulations.
                                </li>
                                <li className='font-LeagueSpartan font-medium text-[16px] leading-[17.92px] text-[#6C6C6C]'>
                                    Proven ability to develop and implement health promotion programs and policies.
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-y-6 px-6 py-6'>
                            <p className='font-SofiaSans font-bold text-[32px] leading-[38.4px] text-[#000000]'>Location</p>
                            <img src={CompanyLocation} alt="companyLocation" className='w-[610px] h-[486px] mx-auto' />
                        </div>

                        <div className='w-full border-[1.3px] border-[#DFDFDF]'></div>

                        <div className='flex gap-x-4 px-[100px] '>
                            <img src={Twitter} alt="twitter" className='w-[43px] h-[43px] cursor-pointer' />
                            <img src={Youtube} alt="youtube" className='w-[43px] h-[43px] cursor-pointer' />
                            <img src={Instagram} alt="instagram" className='w-[43px] h-[43px] cursor-pointer' />
                            <img src={Facebook} alt="facebook" className='w-[43px] h-[43px] cursor-pointer' />
                        </div>

                        <div className='w-full min-h-[47px] bg-[#BFCFE7] flex  items-center gap-x-4'>
                            <div className='ml-5'>
                                <svg width="24" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.29461 1.60005L2.53561 6.32605C2.34861 6.5111 2.20016 6.7314 2.09884 6.97419C1.99753 7.21699 1.94536 7.47746 1.94536 7.74055C1.94536 8.00364 1.99753 8.26411 2.09884 8.50691C2.20016 8.7497 2.34861 8.97 2.53561 9.15505L5.84561 12.443C6.63161 13.223 7.90561 13.223 8.69262 12.443L13.3826 7.78505C13.7554 7.41399 13.967 6.91101 13.9716 6.38505L13.9956 3.01305C13.9964 2.7478 13.9446 2.48502 13.8432 2.23991C13.7419 1.9948 13.5929 1.77221 13.405 1.58503C13.217 1.39784 12.9939 1.24976 12.7484 1.14935C12.5028 1.04894 12.2399 0.998197 11.9746 1.00005L8.71061 1.01405C8.18011 1.01554 7.67148 1.22567 7.29461 1.59905M11.3526 4.65705C11.2077 4.8005 11.012 4.88096 10.8081 4.88096C10.6042 4.88096 10.4085 4.8005 10.2636 4.65705C10.1922 4.58621 10.1355 4.50194 10.0968 4.40908C10.0582 4.31623 10.0382 4.21664 10.0382 4.11605C10.0382 4.01546 10.0582 3.91587 10.0968 3.82301C10.1355 3.73016 10.1922 3.64589 10.2636 3.57505C10.4086 3.4313 10.6045 3.35064 10.8086 3.35064C11.0128 3.35064 11.2087 3.4313 11.3536 3.57505C11.6536 3.87505 11.6526 4.35905 11.3526 4.65705ZM1.99761 9.75005C1.86328 10.1096 1.83522 10.5001 1.91678 10.8752C1.99835 11.2502 2.18609 11.5938 2.45761 11.865L4.42161 13.829C4.79305 14.2005 5.23402 14.4952 5.71933 14.6962C6.20465 14.8972 6.72481 15.0007 7.25011 15.0007C7.77542 15.0007 8.29558 14.8972 8.7809 14.6962C9.26621 14.4952 9.70718 14.2005 10.0786 13.829L13.5606 10.347C13.842 10.066 14.0003 9.68474 14.0006 9.28705V8.50705L10.0786 12.429C10.011 12.4976 9.9406 12.5633 9.86761 12.626L9.37161 13.122C9.09303 13.4007 8.76229 13.6217 8.39828 13.7725C8.03427 13.9233 7.64412 14.0009 7.25011 14.0009C6.85611 14.0009 6.46596 13.9233 6.10195 13.7725C5.73794 13.6217 5.4072 13.4007 5.12861 13.122L4.63061 12.623C4.55905 12.5608 4.48967 12.4961 4.42261 12.429L2.45761 10.465C2.25464 10.2626 2.09774 10.0187 1.99761 9.75005Z" fill="#525CEB" />
                                </svg>
                            </div>

                            <p className='font-Roboto font-bold text-[16px] leading-[18.75px] text-[#414141]'>Tagged as:</p>
                            <p className='font-Roboto text-[#686868] text-[16px] leading-[18.75px] font-medium'>Media, Medical, Restaurants</p>
                        </div>

                    </div>

                    <div className='w-[384px] h-[919px] flex flex-col border-[1.3px] border-[#DFDFDF] jobByTypes'>
                        <div className='flex flex-col justify-center items-center py-3 gap-y-2'>
                            <img src={Logo} alt="companyLogo" className='w-[78px] h-[80px]' />
                            <p className='font-Roboto font-medium text-[20px] leading-[23.44px]'>Senior Health and Food</p>
                            <p className='text-[#525CEB] font-Roboto font-normal text-[14px] leading-[16.41px]'>GS Inc.</p>
                            <div className='flex gap-x-2'>
                                <div className='text-[#2E216B] w-[25px] h-[25px]  like bg-[#ffffff] flex items-center justify-center rounded-md'>
                                    <svg width="13.33px" height="12.23px" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.73333 10.3667L6.66667 10.4333L6.59333 10.3667C3.42667 7.49333 1.33333 5.59333 1.33333 3.66667C1.33333 2.33333 2.33333 1.33333 3.66667 1.33333C4.69333 1.33333 5.69333 2 6.04667 2.90667H7.28667C7.64 2 8.64 1.33333 9.66667 1.33333C11 1.33333 12 2.33333 12 3.66667C12 5.59333 9.90667 7.49333 6.73333 10.3667ZM9.66667 0C8.50667 0 7.39333 0.54 6.66667 1.38667C5.94 0.54 4.82667 0 3.66667 0C1.61333 0 0 1.60667 0 3.66667C0 6.18 2.26667 8.24 5.7 11.3533L6.66667 12.2333L7.63333 11.3533C11.0667 8.24 13.3333 6.18 13.3333 3.66667C13.3333 1.60667 11.72 0 9.66667 0Z" fill="#2E216B" />
                                    </svg>
                                </div>
                                <div className='px-[31px] py-[6px] w-fit bg-[#25C5D2] rounded-lg'>
                                    <p className='font-Roboto font-medium text-[13px] leading-[15.23px] uppercase text-[#ffffff]'>FREELANCE</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full border-[1.3px] border-[#DFDFDF] mt-6'></div>

                        <div className='flex flex-col px-4 py-9'>
                            {jobApplyData.map((item, index) => (
                                <div key={index} className='flex gap-x-4 px-4 py-5'>
                                    <div>
                                        <img src={item.icon} alt={item.label} />
                                    </div>
                                    <div className='flex flex-col gap-y-2'>
                                        <p className='font-Roboto font-medium text-[16px] leading-[18.75px]'>{item.label}</p>
                                        <p className='font-Roboto font-normal text-[13px] leading-[15.23px] text-[#666666]'>{item.value}</p>
                                    </div>
                                </div>
                            ))}

                        </div>

                        <div className='py-8 mx-auto'>
                            <button className='px-[41px] py-[14px] rounded-lg bg-darkBlue w-fit mx-auto'>
                                <p className='font-Roboto font-bold text-[15px] leading-[17.58px] text-[#ffffff] uppercase'>
                                    <Link to='/job-apply/page-2'>
                                        APPLY NOW !
                                    </Link>

                                </p>
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobApplyPage1;
