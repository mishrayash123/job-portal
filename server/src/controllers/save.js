import express from 'express';

import { createsavejob ,getsavejob,deletesavejobById,getjobbyjobid} from '../db/saved.js';

export const addtosave = async (req, res) => {
    try {
      const { jobid, userid ,companyName, salary, location, posted,jobType} = req.body;
      if (!jobid || !userid) {
        return res.sendStatus(400);
      }

      const existingjob = await getjobbyjobid(jobid);
  
      if (existingjob) {
        return res.sendStatus(400);
      }

      const user  = await createsavejob({
        jobid,
        userid,
        companyName, salary, location, posted,jobType
      });
      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export  const getsave = async (req, res) => {
    try {
      const users  = await getsavejob();
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export  const deletesave = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await deletesavejobById(id);
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
