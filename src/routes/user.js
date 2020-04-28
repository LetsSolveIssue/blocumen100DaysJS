const express = require("express");



const userController = require('../controllers/user');
const router = express.Router();

router.post("/userInfo",userController.saveUserInfo);
router.get("/checkGetRequest/:name",userController.getUserRequest);

module.exports = router;
