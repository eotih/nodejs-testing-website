const router = require('express').Router();
const { testLogin } = require('../controllers/bruteforce.controllers');


router.post('/', testLogin);

module.exports = router