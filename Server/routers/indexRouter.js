//core imports
const express = require('express');
const iR = express.Router();

//middleware imports
const iMW = require('../middlewares/indexMW');

//general middlewares
iR.use(iMW.test('localhost:3002'));

//routes
iR.post('/welcome',iMW.welcome);

module.exports = iR;