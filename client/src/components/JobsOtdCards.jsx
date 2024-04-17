import React from 'react'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const JobsOtdCards = (props) => {
    const { companyLogo, companyName, firm, salary, location, posted, jobType,jobid} = props;
    const nav = useNavigate();
    const userid = localStorage.getItem("jobportaluserId");

    const handleSubmit = async() => {
        try {
            const response = await fetch( 
              "http://localhost:8080/addtosave", 
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({companyName,salary,location,posted,jobid,userid,jobType}), 
              }                                            
                                                              
            );
      
            if (response.ok) { 
              const data = await response.json();
              alert("saved")
            } else { 
                console.error("Server returned error:", response.data);
                alert("Already saved");
            }
          } catch (error) {
            console.error("Error during PostJob:", error);
          }
        };








    return (
        <div className='flex flex-col w-[375px] max-h-[277px] border-[0.7px] card'>
            <div className='w-full max-h-[calc(277-32px)] overflow-hidden flex   items-center p-4'>
                <div className='flex w-full'>
                    {/* <div className='flex w-full items-center justify-center'>
                        <img src={companyLogo}
                            alt="company_logo" />
                    </div> */}

                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-y-3 p-6 '>
                            <p className='font-Roboto font-medium text-[16px] leading-[18.75px] text-[#414141]'>{companyName}</p>
                            {/* <p className='font-Roboto font-normal text-[14px] leading-[16.41px] text-[#525CEB]'>{firm}</p> */}
                            <div className='flex gap-x-1 items-center ' >
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 5.25H12M3 1.5V16.5L4.5 15.75L6 16.5L7.5 15.75L9 16.5L10.5 15.75L12 16.5L13.5 15.75L15 16.5V1.5L13.5 2.25L12 1.5L10.5 2.25L9 1.5L7.5 2.25L6 1.5L4.5 2.25L3 1.5Z" stroke="#0F0A52" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 13.125L6 11.25H6.75C7.54565 11.25 8.30871 10.9339 8.87132 10.3713C9.43393 9.80871 9.75 9.04565 9.75 8.25C9.75 7.45435 9.43393 6.69129 8.87132 6.12868C8.30871 5.56607 7.54565 5.25 6.75 5.25M6 8.25H12" stroke="#0F0A52" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p className='font-Roboto font-medium text-[14px] leading-[16.41px] text-[#000000]'>{salary}</p>
                            </div>

                            <div className='flex gap-x-1 items-center w-[250px] h-[32px]'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.50001 1.0625C6.95071 1.06433 5.46539 1.68059 4.36987 2.77611C3.27435 3.87163 2.65808 5.35695 2.65626 6.90625C2.6544 8.17234 3.06796 9.40407 3.83351 10.4125C3.83351 10.4125 3.99288 10.6223 4.01891 10.6526L8.50001 15.9375L12.9832 10.65C13.0066 10.6218 13.1665 10.4125 13.1665 10.4125L13.167 10.4109C13.9322 9.40292 14.3456 8.17176 14.3438 6.90625C14.3419 5.35695 13.7257 3.87163 12.6301 2.77611C11.5346 1.68059 10.0493 1.06433 8.50001 1.0625ZM8.50001 9.03125C8.07972 9.03125 7.66888 8.90662 7.31942 8.67312C6.96997 8.43962 6.6976 8.10775 6.53676 7.71945C6.37593 7.33116 6.33384 6.90389 6.41584 6.49168C6.49783 6.07947 6.70022 5.70083 6.99741 5.40365C7.29459 5.10646 7.67323 4.90407 8.08544 4.82208C8.49765 4.74009 8.92492 4.78217 9.31321 4.94301C9.7015 5.10384 10.0334 5.37621 10.2669 5.72566C10.5004 6.07512 10.625 6.48596 10.625 6.90625C10.6243 7.46962 10.4002 8.00971 10.0018 8.40808C9.60347 8.80644 9.06338 9.03055 8.50001 9.03125Z" fill="#0F0A52" />
                                </svg>
                                <p className='font-Roboto font-normal text-[14px] leading-[16.41px] text-[#717171]'>{location}</p>

                            </div>


                        </div>
                    </div>
                </div>

            </div>
            <div className='flex gap-x-2 items-center pb-4 pl-5'>
                <button className={`p-[10px] rounded-lg ${jobType === 'INTERNSHIP' ? 'bg-[#199016]' :
                        jobType === 'FULL TIME' || jobType === 'FREELANCE' ? 'bg-[#25C5D2]' :
                            jobType === 'PART TIME' ? 'bg-[#FFA800]' : ''
                    } w-fit`}>
                    <p className='font-Roboto font-medium text-[13px] leading-[15.23px] text-[#FFFFFF] uppercase'></p>
                </button>

                <button className='px-[26px] py-[10px] rounded-lg bg-[#2E216B] w-fit'  onClick={
              (e) => {
                nav('/job-apply', { state: { id:jobid} });
              }
          }>
              <p className='font-Roboto font-medium text-[13px] leading-[15.23px] text-[#FFFFFF] uppercase'>Apply</p>
                </button>
                <div className='text-[#2E216B] w-[25px] h-[25px]  like bg-[#ffffff] flex items-center justify-center rounded-md cursor-pointer
                '
                onClick={()=>{
                    handleSubmit()
                }}
                >
                    <svg width="13.33px" height="12.23px" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.73333 10.3667L6.66667 10.4333L6.59333 10.3667C3.42667 7.49333 1.33333 5.59333 1.33333 3.66667C1.33333 2.33333 2.33333 1.33333 3.66667 1.33333C4.69333 1.33333 5.69333 2 6.04667 2.90667H7.28667C7.64 2 8.64 1.33333 9.66667 1.33333C11 1.33333 12 2.33333 12 3.66667C12 5.59333 9.90667 7.49333 6.73333 10.3667ZM9.66667 0C8.50667 0 7.39333 0.54 6.66667 1.38667C5.94 0.54 4.82667 0 3.66667 0C1.61333 0 0 1.60667 0 3.66667C0 6.18 2.26667 8.24 5.7 11.3533L6.66667 12.2333L7.63333 11.3533C11.0667 8.24 13.3333 6.18 13.3333 3.66667C13.3333 1.60667 11.72 0 9.66667 0Z" fill="#2E216B" />
                    </svg>
                </div>

            </div>

            <div className='w-full min-h-[32px] bg-[#F0F0F0] flex  items-center gap-x-4'>
                <div className='flex items-center ml-2'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.29461 1.60005L2.53561 6.32605C2.34861 6.5111 2.20016 6.7314 2.09884 6.97419C1.99753 7.21699 1.94536 7.47746 1.94536 7.74055C1.94536 8.00364 1.99753 8.26411 2.09884 8.50691C2.20016 8.7497 2.34861 8.97 2.53561 9.15505L5.84561 12.443C6.63161 13.223 7.90561 13.223 8.69262 12.443L13.3826 7.78505C13.7554 7.41399 13.967 6.91101 13.9716 6.38505L13.9956 3.01305C13.9964 2.7478 13.9446 2.48502 13.8432 2.23991C13.7419 1.9948 13.5929 1.77221 13.405 1.58503C13.217 1.39784 12.9939 1.24976 12.7484 1.14935C12.5028 1.04894 12.2399 0.998197 11.9746 1.00005L8.71061 1.01405C8.18011 1.01554 7.67148 1.22567 7.29461 1.59905M11.3526 4.65705C11.2077 4.8005 11.012 4.88096 10.8081 4.88096C10.6042 4.88096 10.4085 4.8005 10.2636 4.65705C10.1922 4.58621 10.1355 4.50194 10.0968 4.40908C10.0582 4.31623 10.0382 4.21664 10.0382 4.11605C10.0382 4.01546 10.0582 3.91587 10.0968 3.82301C10.1355 3.73016 10.1922 3.64589 10.2636 3.57505C10.4086 3.4313 10.6045 3.35064 10.8086 3.35064C11.0128 3.35064 11.2087 3.4313 11.3536 3.57505C11.6536 3.87505 11.6526 4.35905 11.3526 4.65705ZM1.99761 9.75005C1.86328 10.1096 1.83522 10.5001 1.91678 10.8752C1.99835 11.2502 2.18609 11.5938 2.45761 11.865L4.42161 13.829C4.79305 14.2005 5.23402 14.4952 5.71933 14.6962C6.20465 14.8972 6.72481 15.0007 7.25011 15.0007C7.77542 15.0007 8.29558 14.8972 8.7809 14.6962C9.26621 14.4952 9.70718 14.2005 10.0786 13.829L13.5606 10.347C13.842 10.066 14.0003 9.68474 14.0006 9.28705V8.50705L10.0786 12.429C10.011 12.4976 9.9406 12.5633 9.86761 12.626L9.37161 13.122C9.09303 13.4007 8.76229 13.6217 8.39828 13.7725C8.03427 13.9233 7.64412 14.0009 7.25011 14.0009C6.85611 14.0009 6.46596 13.9233 6.10195 13.7725C5.73794 13.6217 5.4072 13.4007 5.12861 13.122L4.63061 12.623C4.55905 12.5608 4.48967 12.4961 4.42261 12.429L2.45761 10.465C2.25464 10.2626 2.09774 10.0187 1.99761 9.75005Z" fill="#525CEB" />
                    </svg>
                    <p className='font-Roboto font- text-[13px] leading-[15.23px] text-[#414141]'>Tagged as:</p>
                </div>




                <p className='font-Roboto text-[#7F7F7F] text-[13px] leading-[15.23px] font-medium'>{jobType}</p>
                <div className='flex gap-x-1 items-center '>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="14" height="14" rx="7" fill="#525CEB" />
                        <path d="M6.99547 1.1665C3.77547 1.1665 1.16797 3.77984 1.16797 6.99984C1.16797 10.2198 3.77547 12.8332 6.99547 12.8332C10.2213 12.8332 12.8346 10.2198 12.8346 6.99984C12.8346 3.77984 10.2213 1.1665 6.99547 1.1665ZM7.0013 11.6665C4.42297 11.6665 2.33464 9.57817 2.33464 6.99984C2.33464 4.4215 4.42297 2.33317 7.0013 2.33317C9.57964 2.33317 11.668 4.4215 11.668 6.99984C11.668 9.57817 9.57964 11.6665 7.0013 11.6665Z" fill="white" />
                        <path d="M7.29297 4.0835H6.41797V7.5835L9.48047 9.421L9.91797 8.7035L7.29297 7.146V4.0835Z" fill="white" />
                    </svg>
                    <p className='font-Roboto font-medium text-[11px] leading-[12.89px] text-[#000000]'>{posted}</p>
                </div>

            </div>
        </div>
    )
}

export default JobsOtdCards