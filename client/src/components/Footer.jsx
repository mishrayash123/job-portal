import React from 'react'
import Errow from '../assets/errow.png'
import Location from '../assets/location.png'
import Mail from '../assets/mail.png'
import Phone from '../assets/phone.png'
import Twitter from '../assets/twitter.png'
import Youtube from '../assets/youtube.png'
import Instagram from '../assets/instagram.png'
import Facebook from '../assets/facebook.png'

const Footer = () => {
    return (
        <div className='w-full bg-lightBlack h-[405px] flex flex-col justify-center items-center'>
            <div className='grid grid-cols-4 py-16  w-[1218px]'>
                <div className='flex flex-col gap-y-10'>
                    <div className='flex gap-x-10 items-center'>
                        <div className='bg-[#D9D9D9] w-[100px] h-[100px] rounded-full'></div>
                        <p className='font-black font-SofiaSans text-[40px] leading-[48px] text-center text-[#FFFFFF]'>LOGO</p>
                    </div>
                    <p className='font-SofiaSans font-semibold text-[12px] leading-[14.4px] w-[249px] text-[#FFFFFF]'>Lorem ipsum dolor sit amet consectetur. Pellent
                        esque turpis risus id donec id ultricies fringilla
                        incidunt.Faucibus nibh leo interdum</p>
                    <div className='w-[250px] border-[1px] border-[#D8D8D8]'></div>
                </div>
                <div className='flex flex-col gap-y-10 mt-8'>
                    <div className='flex flex-col'>
                        <p className='h-[38px] font-SofiaSans font-bold text-[32px] leading-[38.4px] uppercase text-[#ffffff]'>For Employers</p>
                        <div className='w-[59px] flex justify-between'>
                            <div className='w-[39px] border-[3px] border-[#FF8A8A]'></div>
                            <div className='w-[12px] border-[3px] border-[#FF8A8A]'></div>
                            <div className='w-[4px] border-[3px] border-[#FF8A8A]'></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4 '>
                        <div className='flex gap-x-4 items-center'>
                            <img src={Errow} alt="errow" className='w-[9px] h-[12px]' />
                            <p className='font-Roboto font-normal text-[12px] leading-[14.06px] text-[#ffffff]'>Browse Candidates</p>
                        </div>
                        <div className='flex gap-x-4 items-center'>
                            <img src={Errow} alt="errow" className='w-[9px] h-[12px]' />
                            <p className='font-Roboto font-normal text-[12px] leading-[14.06px] text-[#ffffff]'>Post a Job</p>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-y-10 mt-8'>
                    <div className='flex flex-col'>
                        <p className='h-[38px] font-SofiaSans font-bold text-[32px] leading-[38.4px] uppercase text-[#ffffff]'>For Candidates</p>
                        <div className='w-[59px] flex justify-between'>
                            <div className='w-[39px] border-[3px] border-[#FF8A8A]'></div>
                            <div className='w-[12px] border-[3px] border-[#FF8A8A]'></div>
                            <div className='w-[4px] border-[3px] border-[#FF8A8A]'></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-4 items-center'>
                            <img src={Errow} alt="errow" className='w-[9px] h-[12px]' />
                            <p className='font-Roboto font-normal text-[12px] leading-[14.06px] text-[#ffffff]'>Browse Jobs</p>
                        </div>
                        <div className='flex gap-x-4 items-center'>
                            <img src={Errow} alt="errow" className='w-[9px] h-[12px]' />
                            <p className='font-Roboto font-normal text-[12px] leading-[14.06px] text-[#ffffff]'>Upload CV</p>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col gap-y-10 mt-8'>
                    <div className='flex flex-col'>
                        <p className='h-[38px] font-SofiaSans font-bold text-[32px] leading-[38.4px] uppercase text-[#ffffff]'>Contact Us</p>
                        <div className='w-[59px] flex justify-between'>
                            <div className='w-[39px] border-[3px] border-[#FF8A8A]'></div>
                            <div className='w-[12px] border-[3px] border-[#FF8A8A]'></div>
                            <div className='w-[4px] border-[3px] border-[#FF8A8A]'></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex gap-x-4 items-center '>
                            <img src={Location} alt="location" className='w-[24px] h-[24px]' />
                            <p className='font-Roboto font-normal text-[12px] leading-[14.06px] text-[#ffffff] w-[143px]'>
                                7007 Riverside Dr Redding,
                                CA 96001 USA</p>
                        </div>
                        <div className='flex gap-x-4 items-center'>
                            <img src={Mail} alt="mail" className='w-[24px] h-[24px]' />
                            <p className='font-Roboto font-normal text-[12px] leading-[14.06px] text-[#ffffff]'>Call us +49 1234 5678 9</p>
                        </div>
                        <div className='flex gap-x-4 items-center'>
                            <img src={Phone} alt="mail" className='w-[24px] h-[24px]' />
                            <p className='font-Roboto font-normal text-[12px] leading-[14.06px] text-[#ffffff]'>logo@gmail.com</p>
                        </div>
                    </div>

                </div>

            </div>
            <div className='border-[1px] border-[#D8D8D8] w-[1218px]'></div>

            <div className='flex justify-between items-center w-[1218px] py-3'>
                <div className='flex justify-around gap-x-4'>
                    <img src={Twitter} alt="twitter" />
                    <img src={Youtube} alt="youtube" />
                    <img src={Instagram} alt="instagram" />
                    <img src={Facebook} alt="facebook" />
                </div>
                <div className='flex justify-evenly font-Roboto font-normal text-[12px] text-[#ffffff] leading-[14.06px] gap-x-2'>
                    <p>Terms of use</p>
                    <div className='border-[1px] border-[#D8D8D8]'></div>
                    <p>Privacy Policy</p>
                    <div className='border-[1px] border-[#D8D8D8]'></div>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    )
}

export default Footer