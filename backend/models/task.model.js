const Sequelize = require('sequelize');
const db = require('../configs/database')
const User = require('./user.model')
const Project = require('./project.model')

const Task = db.define("tasks", {
    Id: {
        type: Sequelize.BIGINT,
        field: "id",
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
    },
    Name: {
      allowNull: false,
      field:"name",
      type: Sequelize.STRING
    },
    Description:{
        type: Sequelize.STRING,
        allowNull: false,
        field:"description"
    },
    Status:{
        type: Sequelize.STRING,
        allowNull: false,
        field:"status"
    },
    Datefinish:{
        allowNull: false,
        field:"datefinish",
        type: Sequelize.DATEONLY
    },
    Datestart:{
        allowNull: false,
        field:"datestart",
        type: Sequelize.DATEONLY
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

Task.belongsTo(User, {
    foreignKey: {
      allowNull: false
    },
    onDelete: 'CASCADE'
  });
  
User.hasMany(Task);

Task.belongsTo(Project, {
    foreignKey: {
      allowNull: false
    },
    onDelete: 'CASCADE'
  });
Project.hasMany(Task);


module.exports = Task;