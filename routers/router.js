//************import required*************// 
const express = require('express');
const router = express.Router();
var registerloginController=require('../controllers/register-login');
var validator = require("../libs/middleware");
var token = require('../libs/verifytoken');

//************Api routes***********// 

router.post('/register',validator.validateAddUser,validator.checkValidationResult,registerloginController.register);
router.post('/login',validator.validateAuthUser,validator.checkValidationResult,registerloginController.login);
router.put('/profile/:id',registerloginController.addData);
router.get('/showAll',registerloginController.findall);
router.delete('/delete/:id', registerloginController.delete);
router.put('/update/:id',registerloginController.update);
module.exports = router;