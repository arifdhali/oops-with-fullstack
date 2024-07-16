const express = require('express');
const router = express.Router();
const { userRegister } = require("../controllers/user.controllers");
const uploadMulter = require('../utils/multer.config');


const userImg = uploadMulter("users");
router.post("/register", userImg.single('profile_img'), userRegister);



module.exports = router;