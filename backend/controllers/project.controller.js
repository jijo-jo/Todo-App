const projectDao = require('../dao/project.dao');

function addDb(req, res) {
    let db = {
        Name: req.body.name,
        Description: req.body.description,
        Datefinish: req.body.datefinish,
        Datestart: req.body.datestart,
        userId: req.body.userId
    };

    projectDao.create(db)
        .then((data) => {
            res.status(200).send({ message: "project created", data });
        })
        .catch((error) => {
            res.status(500).send({ message: "project create error", error })
        });
}

function findDbById(req, res) {

    projectDao.findById(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(401).send({ message: "project not found" })
        });
}

function deleteById(req, res) {

    projectDao.deleteById(req.params.id)
        .then((data) => {
            res.status(200).json({
                message: "successfully deleted",
            })
        })
        .catch((error) => {
            res.status(401).send({ message: "Unable to delete" })
        });
}

function updateDb(req, res) {
    let db = {
        Name: req.body.name,
        Description: req.body.description,
        Datefinish: req.body.datefinish,
        Datestart: req.body.datestart,
        userId: req.body.userId
    };

    projectDao.updateDb(db, req.params.id)
        .then((data) => {
            res.status(200).send({
                message: "updated successfully"
            })
        })
        .catch((error) => {
            res.status(401).send({ message: "Unable to update the project!" })
        });
}

function findDb(req, res) {

    projectDao.findAll(req.body.userId)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(401).send({ message: "Projects not found." })

        });
}


var projectController = {
    addDb: addDb,
    findDb: findDb,
    findDbById: findDbById,
    updateDb: updateDb,
    deleteById: deleteById,
}

module.exports = projectController;