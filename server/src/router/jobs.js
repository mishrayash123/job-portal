import { addtojobs,deletjobs,getjobsfull } from '../controllers/jobs.js';

export default (router) => {
  router.post('/addtojobs', addtojobs);
  router.get('/getjobs', getjobsfull);
  router.delete('/deletejobs/:id', deletjobs);
};