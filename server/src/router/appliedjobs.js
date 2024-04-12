import { addtoAppliedjobs,deletAppliedjobs,getAppliedjobsfull } from '../controllers/jobsapplied.js';

export default (router) => {
  router.post('/addtoAppliedjobs', addtoAppliedjobs);
  router.get('/getAppliedjobs', getAppliedjobsfull);
  router.delete('/deleteAppliedjobs/:id', deletAppliedjobs);
};