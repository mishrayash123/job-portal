import React from 'react'
import Navbar from './Navbar'
import Team from '../assets/team.png'
import './CreateAccount.css'
import Account from '../assets/account_circle.png'
import Bold from '../assets/bold.png'
import Italic from '../assets/italic.png'
import BulletNumber from '../assets/bullet-numbers.png'
import Bullet from '../assets/bullets.png'
import link from '../assets/link.png'
import AttachedLink from '../assets/attached_link.png'
import Undo from '../assets/undo.png'
import Redo from '../assets/redo.png'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const CreateAccount = () => {
    return (
        <div className='flex flex-col w-full'>
            <Navbar />
            <div className='flex flex-col w-full '>
                <div className='flex justify-between px-[100px] items-center bg-[#BFCFE7]'>
                    <p className='font-Roboto font-bold text-[58px] leading-[67.97px] text-[#3D3B40]'>Create an Employer Account</p>
                    <img src={Team} alt="team" />
                </div>

                <div className='flex justify-center py-[100px] items-center flex-col'>
                    <p className='font-Roboto font-bold text-[36px] leading-[42.19px] text-[#3D3B40] w-[895px] text-center'>
                        You haven't posted a job before, so you'll need to create an employer account.
                    </p>

                    <div className='w-[1118px] h-[2315px] rounded-[49px] border-[1px] border-[#CACACA] detailsCard'>
                        <div className='w-[893px] mx-auto flex flex-col gap-y-14'>
                            <div className='flex items-center justify-between py-9'>
                                <div className='flex items-center'>
                                    <img src={Account} alt="account" />
                                    <div className='flex flex-col'>
                                        <p className='font-Roboto font-medium text-[32px] leading-[37.5px] text-[#3f3f3f]'>Profile picture</p>
                                        <p className='font-Roboto font-medium text-[20px] leading-[23.44px] text-[#9e9e9e]'>PNG, JPG up to 5MB</p>
                                    </div>
                                </div>

                                <p className='font-LeagueSpartan font-semibold text-[20px] leading-[22.4px] text-darkBlue'>Upload</p>
                            </div>


                            <div className='flex flex-col gap-y-2'>
                                <p className='font-Roboto font-medium text-[24px] leading-[28.13px]'>
                                    Your company name
                                    <span className='text-[#FF0000]'>*</span>
                                </p>
                                <input
                                    className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3'
                                    type="text" />
                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <p className='font-Roboto font-medium text-[24px] leading-[28.13px]'>
                                    Your company's number of employees
                                </p>
                                <select name="employees" id="employees" className='border-[1.3px] border-[#989898] rounded-2xl outline-none px-4 py-3'>
                                    <option value="selection">Select an option</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <p className='font-Roboto font-medium text-[24px] leading-[28.13px]'>
                                    Your first and last name
                                    <span className='text-[#FF0000]'>*</span>
                                </p>
                                <input
                                    className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3'
                                    type="text" />
                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <p className='font-Roboto font-medium text-[24px] leading-[28.13px]'>
                                    Your phone number
                                    <span className='text-[#FF0000]'>*</span>
                                </p>
                                <p className='font-Roboto font-normal text-[15px] leading-[17.58px] text-[#6C6C6C]'>For account management communication. Not visible to jobseekers.</p>
                                <input
                                    className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3'
                                    type="text" />
                            </div>

                            <div className='flex flex-col gap-y-1 w-full'>
                                <p className='font-Roboto font-medium text-[24px] leading-[28.13px] text-[#3f3f3f]'>Description</p>

                                <div className='w-full flex flex-col h-[301px] border-[1.3px] border-[#989898] gap-2'>
                                    <div className='options bg-[#E6E6E6] h-[50px] flex items-center'>
                                        <div className='flex gap-x-3 px-3'>
                                            <img src={Bold} alt="bold" className='w-[20px] h-[20px]' />
                                            <img src={Italic} alt="italic" className='w-[20px] h-[20px]' />
                                        </div>

                                        <div className='border-[1.3px] border-[#989898] h-full'></div>

                                        <div className='flex gap-x-3 px-3'>
                                            <img src={BulletNumber} alt="bulletNumber" className='w-[24px] h-[24px]' />
                                            <img src={Bullet} alt="bullet" className='w-[22px] h-[22px]' />
                                        </div>

                                        <div className='border-[1.3px] border-[#989898] h-full'></div>

                                        <div className='flex gap-x-3 px-3'>
                                            <img src={link} alt="link" className='w-[20px] h-[20px]' />
                                            <img src={AttachedLink} alt="attachedLink" className='w-[20px] h-[20px]' />
                                        </div>

                                        <div className='border-[1.3px] border-[#989898] h-full'></div>

                                        <div className='flex gap-x-3 px-3'>
                                            <img src={Undo} alt="undo" className='w-[20px] h-[20px]' />
                                            <img src={Redo} alt="redo" className='w-[20px] h-[20px]' />
                                        </div>

                                    </div>
                                    <div className='w-full '>
                                        <textarea name="description" id="description" className='w-full h-[240px] border-b-[1.3px] border-[#989898] resize-none '></textarea>
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <p className='font-Roboto font-medium text-[24px] leading-[28.13px] flex items-center gap-x-2'>
                                    Website
                                    <span className='text-[#6C6C6C] font-Roboto font-normal text-[15px] leading-[17.58px]'>(Optional)</span>
                                </p>

                                <input
                                    className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3 font-Roboto font-normal text-[24px] leading-[28.13px] text-[#6C6C6C]'
                                    type="text"
                                    placeholder='http://' />
                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <p className='font-Roboto font-medium text-[24px] leading-[28.13px] flex items-center gap-x-2'>
                                    Twitter
                                    <span className='text-[#6C6C6C] font-Roboto font-normal text-[15px] leading-[17.58px]'>(Optional)</span>
                                </p>

                                <input
                                    className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3 font-Roboto font-normal text-[24px] leading-[28.13px] text-[#6C6C6C]'
                                    type="text"
                                    placeholder='@yourcompany' />
                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <p className='font-Roboto font-medium text-[24px] leading-[28.13px] flex items-center gap-x-2'>
                                    Facebook
                                    <span className='text-[#6C6C6C] font-Roboto font-normal text-[15px] leading-[17.58px]'>(Optional)</span>
                                </p>

                                <input
                                    className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3 font-Roboto font-normal text-[24px] leading-[28.13px] text-[#6C6C6C]'
                                    type="text"
                                    placeholder='@yourcompany' />
                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <p className='font-Roboto font-medium text-[24px] leading-[28.13px] flex items-center gap-x-2'>
                                    Instagram
                                    <span className='text-[#6C6C6C] font-Roboto font-normal text-[15px] leading-[17.58px]'>(Optional)</span>
                                </p>

                                <input
                                    className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3 font-Roboto font-normal text-[24px] leading-[28.13px] text-[#6C6C6C]'
                                    type="text"
                                    placeholder='@yourcompany' />
                            </div>

                            <div className='flex flex-col gap-y-2'>
                                <p className='font-Roboto font-medium text-[24px] leading-[28.13px] flex items-center gap-x-2'>
                                    Youtube
                                    <span className='text-[#6C6C6C] font-Roboto font-normal text-[15px] leading-[17.58px]'>(Optional)</span>
                                </p>

                                <input
                                    className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3 font-Roboto font-normal text-[24px] leading-[28.13px] text-[#6C6C6C]'
                                    type="text"
                                    placeholder='URL' />
                            </div>

                            <div className='flex justify-end w-full pt-20'>
                                <Link to='/job-post/'>
                                    <button className='px-[68px] py-[22px] w-fit rounded-lg bg-darkBlue flex items-center gap-x-2'>
                                        <p className='uppercase font-Roboto font-black text-[20px] leading-[23.44px] text-[#ffffff]'>CONTINUE</p>
                                        
                                    </button>
                                </Link>

                            </div>

                        </div>
                    </div>

                </div>


            </div>

            <Footer/>

        </div>
    )
}

export default CreateAccount