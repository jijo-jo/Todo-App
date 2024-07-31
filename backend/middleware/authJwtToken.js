const jwt = require("jsonwebtoken");
const config = require("../configs/authConfig.js");
const services = require("../services/user.service.js");

const db = require("../models/index.js");
const e = require("express");

const User = db.user;

const checkToken = (token) => jwt.verify(token, config.secret);
verifyToken = () => async (req, res, next) => {
  let token = req.headers["x-access-token"];
   try {
    if (!token) {
      return res.status(403).send({
        message: "No token provided!"
      });
    }
  
    const decoded = checkToken(token, config.secret);
    if (!decoded) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  
   }
   catch(error){
        return res.status(401).send({
          message:"Token expired"
        })
   }


};

const authJwtToken = {
  verifyToken: verifyToken,
};
module.exports = authJwtToken;