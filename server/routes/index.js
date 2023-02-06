var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainControllers');
const validationUser = require('../validator/validatorUsers')

/* GET home page. */
router.post('/user', mainController.create);
router.get('/users', mainController.allUsers);
router.delete('/user/:id', mainController.delete);

module.exports = router;
