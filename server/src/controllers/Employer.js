import express from 'express';

import {createEmployer ,getEmployerByEmail,getEmployers,deleteEmployerById} from '../db/Employer.js';
import {UserModel} from "../db/Employer.js"

export const addtoEmployers = async (req, res) => {
  try {
    const { email, userid, profilepic, companyname, totalemploye, fullname, description, phone, website, twitter, fb, insta, youtube, role,} = req.body;
    if (!email || !userid) {
      return res.sendStatus(400);
    }

    const existingcart = await getEmployerByEmail(email);

    if (existingcart) {
      return res.sendStatus(400);
    }

    const user = await createEmployer({
      email,
      userid,
      profilepic,
      companyname,
      totalemploye,
      fullname,
      description,
      phone,
      website,
      twitter,
      fb,
      insta,
      youtube,
      role,
    });
    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const getEmployersfull = async (req, res) => {
  try {
    const users = await getEmployers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteEmployers = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteEmployerById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateEmployer = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedItem = await UserModel.findByIdAndUpdate(id.trim(), data, {
      new: true,
    });

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    return res.json(updatedItem);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
