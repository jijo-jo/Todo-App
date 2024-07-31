const config = require('../configs/authConfig');
const dotenv = require('dotenv');  
dotenv.config({ path: './env' });
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var tokenList = {}                //Object to store refreshToken

const userDao = require("../dao/user.dao");

const users = [];


dotenv.config();



function signUp(req, res) {
  let newUser = {
    Email: req.body.email,
    Password: bcrypt.hashSync(req.body.password, 8),
    Name: req.body.name,
  }
  userDao.userCreate(newUser)

    .then(user => {
       if(user){
         res.send({ message: "User registered successfully!" });
       }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}

function signIn(req, res) {

  userDao.userfind(req.body.email)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(req.body.password, user.Password);

      if (!passwordIsValid) {
        return res.status(401).send({
          // accessToken: null,
          message: "Invalid Password!"
        });
      }
      var accessToken = jwt.sign({ id: user.Id }, config.secret, {
        expiresIn: config.accessExpire       //1 Hour
      });

      var refreshToken = jwt.sign({ id: user.Id }, config.secret, {
        expiresIn: config.refreshExpire      //1 day
      });

      //To store the generated token in the tokenList as new object(value of object refresh token)
      const response = {
        "accessToken": accessToken,
        "refreshToken": refreshToken
      }
      tokenList[refreshToken] = response;

      res.status(200).send({
        id: user.Id,
        email: user.Email,
        accessToken: accessToken,
        refreshToken: refreshToken
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });


}

//relogin in with refreshToken
function reSignIn(req, res) {
  const refreshToken = req.body.refreshToken;

  if ((refreshToken) && (refreshToken in tokenList)) {

    //decode refreshToken to get user id
    jwt.verify(refreshToken, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!"
        });
      }
      var userId = decoded.id;
      var accessToken = jwt.sign({ id: userId }, config.secret, {
        
        expiresIn: config.accessExpire
      });
      const response = {
        "accessToken": accessToken,
      }
      // update the token in the list
      tokenList[refreshToken].accessToken = accessToken;
      res.status(200).json(response);
    });
  } else {
    res.status(404).send('Invalid request!')
  }
}



var userController = {
  signUp: signUp,
  signIn: signIn,
  reSignIn: reSignIn,
}

module.exports = userController;