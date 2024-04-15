import express from 'express';

import { addtoEmployers,deleteEmployers,getEmployersfull ,updateEmployer} from '../controllers/Employer.js';

const app = express();  

export default (router) => {
  router.post('/addtoemployers', addtoEmployers);
  router.get('/getemployers', getEmployersfull);
  router.delete('/deleteemployers/:id', deleteEmployers);
  router.patch('/updateemployer/:id',updateEmployer);
};