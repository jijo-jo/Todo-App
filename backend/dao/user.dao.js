const db = require('../models/index');
const User = db.user;
const Operation = db.Sequelize.Op;

function userCreate(user) {
  var newUser = new User(user);
  return newUser.save();
}

function userfind(email) {
  return User.findOne({
    where: {
      Email: email
    }
  })
}

function findAll() {
  return User.findAll()
}

function finduser(id) {
  return User.findByPk(id)
}


var userDao = {
  userCreate: userCreate,
  userfind: userfind,
  findAll: findAll,
  finduser: finduser
}
module.exports = userDao