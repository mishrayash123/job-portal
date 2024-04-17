import express from 'express';

import {createAppliedjobs,getAppliedjobs,deleteAppliedjobsById} from '../db/Jobapply.js';

export const addtoAppliedjobs = async (req, res) => {
    try {
      const {userid,employerid,jobid,cv,coverletter,username,position} = req.body;
      const user  = await createAppliedjobs({
        userid,employerid,jobid,cv,coverletter,username,position
      });
      return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }

  export  const getAppliedjobsfull = async (req, res) => {
    try {
      const users  = await getAppliedjobs();
  
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  };

  export  const deletAppliedjobs = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedUser = await deleteAppliedjobsById(id);
  
      return res.json(deletedUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }