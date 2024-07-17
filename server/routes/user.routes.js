const express = require('express');
const router = express.Router();
const { userRegister, userLogin } = require("../controllers/user.controllers");
const uploadMulter = require('../utils/multer.config');


const userImg = uploadMulter("users");
router.post("/register", userImg.single('profile_img'), userRegister);
router.post('/login',userLogin);



module.exports = router;