const db = require('../models/index');
const User=db.user

const getUserDetails=async(id)=> User.findOne({where: {Id: id}})

var services = {
    getUserDetails : getUserDetails
}

module.exports = services;