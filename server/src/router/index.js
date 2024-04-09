import express from 'express';

import authentication from './authentication.js';
import users from './users.js';
import save  from './save.js';
import Employer from './Employer.js'
import jobs from './jobs.js';

const router = express.Router();

export default () => {
  authentication(router);
  users(router);
  save(router);
  Employer(router);
  jobs(router)
  return router;
};