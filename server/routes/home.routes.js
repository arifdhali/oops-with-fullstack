const express = require('express');
const authenticatedUser = require('../auth/authUser');
const router = express.Router();
const homeController = require('../controllers/home.controller');;

router.get("/", authenticatedUser, homeController);

module.exports = router;