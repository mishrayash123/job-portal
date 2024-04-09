import express from 'express';

import { addtosave,getsave,deletesave } from '../controllers/save.js';

export default (router) => {
  router.post('/addtosave', addtosave);
  router.get('/getsave', getsave);
  router.delete('/deletesave/:id', deletesave);
};