var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainControllers');
const validationUser = require('../validator/validatorUsers')

/* GET home page. */
router.post('/user', mainController.create);

module.exports = router;
