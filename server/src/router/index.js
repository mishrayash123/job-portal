import express from 'express';

import authentication from './authentication.js';
import users from './users.js';
import cart  from './cart.js';
import Employer from './Employer.js'
import products from './products.js';

const router = express.Router();

export default () => {
  authentication(router);
  users(router);
  cart(router);
  Employer(router);
  products(router)
  return router;
};