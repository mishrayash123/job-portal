import React, { useState} from 'react';
import Navbar from './Navbar';
import Team from '../assets/team.png';
import './CreateAccount.css';
import Account from '../assets/account_circle.png';
import Bold from '../assets/bold.png';
import Italic from '../assets/italic.png';
import BulletNumber from '../assets/bullet-numbers.png';
import Bullet from '../assets/bullets.png';
import link from '../assets/link.png';
import AttachedLink from '../assets/attached_link.png';
import Undo from '../assets/undo.png';
import Redo from '../assets/redo.png';
import { Link } from 'react-router-dom';
import {storage} from "./firebase.config";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import Footer from './Footer';
// import { useNavigate } from 'react-router-dom';
const CreateAccount = () => {
    const email = localStorage.getItem("email");
    const userid = localStorage.getItem("jobportaluserId");
   const [profilepic, setprofilepic] = useState("xyz");
    const [companyname, setcompanyname] = useState("");
    const [totalemploye, settotalemploye] = useState("");
    const [fullname, setfullname] = useState("");
    const [description, setdescription] = useState("");
    const [phone, setphone] = useState(0);
    const [website, setwebsite] = useState("");
    const [twitter, settwitter] = useState("");
    const [fb, setfb] = useState("");
    const [insta, setinsta] = useState("");
    const [youtube, setyoutube] = useState("");
    const [role, setrole] = useState("");
    // const [employedata, setEmployedata] = useState([]);

    const handleuploadimage = async(e) =>{
        const imageRef = ref(storage, userid);
        if (e) {
            uploadBytes(imageRef, e).then(() => {
                getDownloadURL(imageRef).then((url) => {
                    setprofilepic(url);
                    alert("Image Uploaded")
                }).catch((error) => {
                    console.log(error.message, "error geting the image url");
                })
            }).catch((error) => {
                console.log(error.message);
            })
        }
      }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await fetch( 
              "http://localhost:8080/addtoemployers", 
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({email,userid,companyname,profilepic,totalemploye,fullname,description,phone,website,twitter,fb,insta,youtube,role}), 
              }                                            
                                                              
            );
      
            if (response.ok) { 
              const data = await response.json();
              alert("successfully created");
            } else { 
                console.error("Server returned error:", response.data);
                alert("something went wrong...please check credential");
            }
          } catch (error) {
            console.error("Error during PostJob:", error);
          }
    }

   

return (
<div className='flex flex-col w-full'>
<Navbar />
<div className='flex flex-col w-full '>
  <div className='flex justify-between px-[100px] items-center bg-[#BFCFE7]'>
      <p className='font-Roboto font-bold text-[58px] leading-[67.97px] text-[#3D3B40]'>Create an Employer Account</p>
    <img src={Team} alt="team"/>
  </div>



  <div className='flex justify-center py-[100px] items-center flex-col'>
      <p className='font-Roboto font-bold text-[36px] leading-[42.19px] text-[#3D3B40] w-[895px] text-center'>
          You haven't posted a job before, so you'll need to create an employer account.
      </p>
      <div className='w-[1118px] h-[2315px] rounded-[49px] border-[1px] border-[#CACACA] detailsCard'>
          <div className='w-[893px] mx-auto flex flex-col gap-y-14'>
              <div className='flex items-center justify-between py-9'>
                  <div className='flex items-center'>
                            <img src={Account} alt="account"/> 
                      <div className='flex flex-col'>
                          <p className='font-Roboto font-medium text-[32px] leading-[37.5px] text-[#3f3f3f]'>Profile picture</p>
                          <p className='font-Roboto font-medium text-[20px] leading-[23.44px] text-[#9e9e9e]'>PNG, JPG up to 5MB</p>
                      </div>
                  </div>
                  <input  type="file"
                 accept="image/jpeg, image/png, image/gif,image/jpg." // Add acceptable file types here
                 onChange={(e)=>{
                    handleuploadimage(e.target.files[0])
                  }}
                 />
        {/* <button
          className='font-LeagueSpartan font-semibold text-[20px] leading-[22.4px] text-darkBlue'
          type="button"
        >
          <p >Upload</p>
        </button> */}
       

              </div>


                 <div className='flex flex-col gap-y-2'>
                  <p className='font-Roboto font-medium text-[24px] leading-[28.13px] flex items-center gap-x-2'>
                      <span className='text-[#6C6C6C] font-Roboto font-normal text-[15px] leading-[17.58px]'></span>
                      {email}
                  </p>      
              </div>

                 
              <div className='flex flex-col gap-y-2'>
                  <p className='font-Roboto font-medium text-[24px] leading-[28.13px]'>
                      Your company name
                      <span className='text-[#FF0000]'>*</span>
                  </p>
                  <input
                      className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3'
                      type="text"
                      name="companyname" // Set the name attribute to match the state key
                      value={companyname}
                      onChange={(e) => setcompanyname(e.target.value)}
                    />
              </div>

              <div className='flex flex-col gap-y-2'>
                  <p className='font-Roboto font-medium text-[24px] leading-[28.13px]'>
                      Your company's number of employees
                  </p>
                  <select name="employees" id="employees" className='border-[1.3px] border-[#989898] rounded-2xl outline-none px-4 py-3' onChange={(e) => settotalemploye(e.target.value)}>
                      <option value="selection">Select an option</option>
                      <option value="1-50">1-50</option>
                      <option value="50-100">50-100</option>
                      <option value="More than 500">More than 500</option>
                  </select>
              </div>

              <div className='flex flex-col gap-y-2'>
                  <p className='font-Roboto font-medium text-[24px] leading-[28.13px]'>
                      Your first and last name
                      <span className='text-[#FF0000]'>*</span>
                  </p>
                  <input
                      className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3'
                      type="text" // Corrected type attribute
                      name="fullname" // Make sure name attribute matches state key
                      value={fullname} 
                      onChange={(e) => setfullname(e.target.value)}   />
              </div>
              <div className='flex flex-col gap-y-2'>
                  <p className='font-Roboto font-medium text-[24px] leading-[28.13px]'>
                      Your phone number
                      <span className='text-[#FF0000]'>*</span>
                  </p>
                  <p className='font-Roboto font-normal text-[15px] leading-[17.58px] text-[#6C6C6C]'>For account management communication. Not visible to jobseekers.</p>
                  <input
                      className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3'
                      type="Number" // Corrected type attribute for phone number
                      name="phone" // Make sure name attribute matches state key
                      value={phone} 
                      onChange={(e) => setphone(e.target.value)}
                       />
              </div>
              <div className='flex flex-col gap-y-2'>
                  <p className='font-Roboto font-medium text-[24px] leading-[28.13px]'>
                      Your Role
                      <span className='text-[#FF0000]'>*</span>
                  </p>
                  <p className='font-Roboto font-normal text-[15px] leading-[17.58px] text-[#6C6C6C]'>For account management communication. Not visible to jobseekers.</p>
                  <input
                      className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3'
                      type="text" 
                      name="role" 
                      value={role} 
                      onChange={(e) => setrole(e.target.value)}
                       />
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
                          <textarea name="description" id="description" className='w-full h-[240px] border-b-[1.3px] border-[#989898] resize-none '
                            value={description} onChange={(e) => setdescription(e.target.value)} ></textarea>
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
                      name="website"
                      value={website} onChange={(e) => setwebsite(e.target.value)}
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
                      name="twitter" 
                      value={twitter} 
                      onChange={(e) => settwitter(e.target.value)}
                      placeholder='@yourcompany' 
                   />
              </div>

              <div className='flex flex-col gap-y-2'>
                  <p className='font-Roboto font-medium text-[24px] leading-[28.13px] flex items-center gap-x-2'>
                      Facebook
                      <span className='text-[#6C6C6C] font-Roboto font-normal text-[15px] leading-[17.58px]'>(Optional)</span>
                  </p>

                  <input
                      className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3 font-Roboto font-normal text-[24px] leading-[28.13px] text-[#6C6C6C]'
                      type="text"
                      name="fb" 
                      value={fb} 
                      onChange={(e) => setfb(e.target.value)}
                      placeholder='@yourcompany'/>
              </div>

              <div className='flex flex-col gap-y-2'>
                  <p className='font-Roboto font-medium text-[24px] leading-[28.13px] flex items-center gap-x-2'>
                      Instagram
                      <span className='text-[#6C6C6C] font-Roboto font-normal text-[15px] leading-[17.58px]'>(Optional)</span>
                  </p>

                  <input
                      className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3 font-Roboto font-normal text-[24px] leading-[28.13px] text-[#6C6C6C]'
                      type="text" 
                      name="insta" 
                      value={insta} 
                      onChange={(e) => setinsta(e.target.value)}
                      placeholder='@yourcompany'  />
              </div>

              <div className='flex flex-col gap-y-2'>
                  <p className='font-Roboto font-medium text-[24px] leading-[28.13px] flex items-center gap-x-2'>
                      Youtube
                      <span className='text-[#6C6C6C] font-Roboto font-normal text-[15px] leading-[17.58px]'>(Optional)</span>
                  </p>

                  <input
                      className='outline-none w-full border-[1.3px] border-[#989898] rounded-2xl px-4 py-3 font-Roboto font-normal text-[24px] leading-[28.13px] text-[#6C6C6C]'
                      type="text" 
                      name="youtube" 
                      value={youtube} 
                      onChange={(e) => setyoutube(e.target.value)}
                      placeholder='URL' />
              </div>

              <div className='flex justify-end w-full pt-20'>
                  <Link to='/job-post'>
                      <button onClick={handleSubmit} className='px-[68px] py-[22px] w-fit rounded-lg bg-darkBlue flex items-center gap-x-2'>
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
);
}

export default CreateAccount;
