const express = require("express");
const userAuth = require("../middleWares/UserAuth");

const profileRouter = express.Router();

profileRouter.get("/profile",userAuth, async(req, res)=>{
    res.json({user : req.user})
})

module.exports = profileRouter;
