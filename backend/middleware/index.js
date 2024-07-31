const authJwt = require("./authJwtToken");
const verifySignUp = require("./verifySignUp");


var authentication = {
    authJwt : authJwt,
    verifySignUp : verifySignUp
}

module.exports = authentication;