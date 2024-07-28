const express = require('express');
const router = express.Router();
const { userRegister, userLogin,userLogout } = require("../controllers/auth.controllers");
const uploadMulter = require('../utils/multer.config');

const userImg = uploadMulter("users");
router.post('/register', userImg.single('profile_img'), userRegister);
router.post('/login',userLogin);
router.post('/logout',userLogout);



module.exports = router;
