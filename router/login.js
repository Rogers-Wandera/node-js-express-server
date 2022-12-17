const express = require("express");
const Login = require("../utils/login/login");

const loginRouter = express.Router();

loginRouter.post("/", Login)

module.exports = loginRouter;