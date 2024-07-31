const db = require("../models/index");

const User = db.user;

checkDuplicateEmail = (req, res, next) => {

    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
};



const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateEmail,
};

module.exports = verifySignUp;