const { Op } = require('sequelize');
const db = require('../models/task.model');



function findAll(userId,projectId){
    return db.findAll({where:{userId : userId,projectId:projectId}});
}

function findById(id){
    return db.findByPk({where:{id : id}});
}

function deleteById(id){
    return db.destroy({where:{id : id}});
}

function create(task){
    var newDb = new db(task);
    return newDb.save();
}

function updateDb(task, id){

    return db.update(task, {where: {Id : id}});
}

function findAllBydate(datetask,userId){
   return db.findAll({ where: {
    Datestart: { [Op.lte]: datetask },
    Datefinish: { [Op.gte]: datetask },
    userId:userId
  }})
}


var taskDao = {
    findAll : findAll,
    create : create,
    findById : findById,
    deleteById : deleteById,
    updateDb : updateDb,
    findAllBydate:findAllBydate
}

module.exports = taskDao;