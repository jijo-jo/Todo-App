const Sequelize = require('sequelize');
const db = require('../configs/database')
const User = require('./user.model');

const Project = db.define("projects", {
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

Project.belongsTo(User, {
    foreignKey: {
      allowNull: false
    },
    onDelete: 'CASCADE'
  });
  
User.hasMany(Project);

module.exports = Project;