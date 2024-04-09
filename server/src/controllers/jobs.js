import express from 'express';

import {createjobs ,getjobsById,getjobs,deletejobsById} from '../db/job.js';

export const addtojobs = async (req, res) => {
    try {
      const {email,jobtitle,location,jobtags,userid,applicationemail,salary,description} = req.body;

      const user  = await createjobs({
        email,
  jobtitle,
  location,
  jobtags,
  userid,
  applicationemail,
  salary,
  description
      });
      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export  const getjobsfull = async (req, res) => {
    try {
      const users  = await getjobs();
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export  const deletjobs = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await deletejobsById(id);
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
