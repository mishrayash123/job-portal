import express from 'express';

import { getAllUsers, deleteUser, updateUser } from '../controllers/users.js';
import { isAuthenticated, isOwner } from '../middlewares/index.js';

export default (router) => {
  router.post('/users', isAuthenticated, getAllUsers);
  router.delete('/deleteuser/:id', deleteUser);
  router.patch('/updateusers/:id',   updateUser);
};
