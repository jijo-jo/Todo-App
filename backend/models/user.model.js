const Sequelize = require('sequelize');
const db = require('../configs/database')


const User = db.define("users", {
  Id: {
    type: Sequelize.BIGINT,
    field: "id",
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  Name: {
     type: Sequelize.STRING,
     field:"name",
     allowNull: false,
     validate: {
       isAlpha: true
     }
  },
  Email: {
    type: Sequelize.STRING,
    field:"email",
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  Password: {
    type: Sequelize.STRING,
    field:"password",
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    field:"created_at",
    defaultValue: Sequelize.fn('now'),
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    field:"updated_at",
    defaultValue: Sequelize.fn('now'),
    type: Sequelize.DATE
  }
});

module.exports = User;