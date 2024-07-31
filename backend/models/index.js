const sequelize = require('../configs/database.js')
const db = {};


const Sequelize = require("sequelize");
db.Sequelize = Sequelize

db.sequelize = sequelize
db.user = require("../models/user.model.js");
db.project = require("../models/project.model.js");
db.task = require("../models/task.model.js");



module.exports = db;