import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import NotificationsCard from '../components/NotificationsCard'
import { notificationData } from '../data/notifications'

const Notifications = () => {
    const [job, setjob] = useState([]);
    const fetchData = async () => {
        try {
          const response = await fetch(
            "http://localhost:8080/getjobs",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.ok) {
            const data = await response.json();
           
            setjob(data)
          } else {
            alert("Something went wrong please login again");
          }
        } catch (error) {
          console.error("Error during login:", error);
        }
      }
    
      useEffect(() => {
        fetchData();
      }, []);
    return (
        <div className='flex flex-col '>
            <Navbar />

            <div className='w-full h-[258px] bg-[#525CEB] px-[50px] py-[50px]'>
                <p className='font-Roboto font-black text-[#ffffff] text-[58px]'>Notifications</p>
            </div>

            <div className='mx-auto py-20 px-20 flex flex-col gap-y-6'>
            {
          job.sort(function (x, y) {
            return Date.parse(y.createdAt) - Date.parse(x.createdAt);
          }).map(job =>(
                        <NotificationsCard 
                        key={job._id}
                        jobid={job._id}
                        time= {job.createdAt.slice(0,10)}
                        position = {job.jobtitle}
                        location = {job.location}
                        />
                    ))
                }

            </div>




            <Footer />
        </div>
    )
}

export default Notifications