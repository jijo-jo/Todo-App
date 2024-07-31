const db = require('../models/project.model');


function findAll(userId){
    return db.findAll({where:{userId :userId }});
}

function findById(id){
    return db.findByPk({where:{id : id}});
}

function deleteById(id){
    return db.destroy({where:{id : id}});
}

function create(project){
    var newDb = new db(project);
    return newDb.save();
}

function updateDb(project, id){

    return db.update(project, {where: {Id : id}});
}


var projectDao = {
    findAll : findAll,
    create : create,
    findById : findById,
    deleteById : deleteById,
    updateDb : updateDb,

}

module.exports = projectDao;