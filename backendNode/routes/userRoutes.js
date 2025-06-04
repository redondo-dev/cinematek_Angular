const express = require ("express");
const router= express.Router();
const authController=require("./../controllers/authController")
const isAdmin =require("./../middelware/isAdmin");


router.get('/',isAdmin, authController.getUsers)

module.exports=router;
