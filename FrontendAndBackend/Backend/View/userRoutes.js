const express = require("express");

const Router = express.Router();

const {signup,signin} = require("../Controllers/userCont")


Router.post("/user/signup",signup);

Router.post("/user/signin",signin)

module.exports = Router;