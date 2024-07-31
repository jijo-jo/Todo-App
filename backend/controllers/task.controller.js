const taskDao = require('../dao/task.dao');

function addDb(req, res) {
    let db = {
        Name: req.body.name,
        Description: req.body.description,
        Status: req.body.status,
        Datefinish: req.body.datefinish,
        Datestart: req.body.datestart,
        userId:req.body.userId,
        projectId:req.body.projectId
    };

    taskDao.create(db)
        .then((data) => {
            res.status(200).send({ message: "task created", data });
        })
        .catch((error) => {
            res.status(500).send({ message: "task create error", error })
        });
}

function findDbById(req, res) {

    taskDao.findById(req.params.id)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(401).send({ message: "task not found" })
        });
}

function deleteById(req, res) {

    taskDao.deleteById(req.params.id)
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
        Status: req.body.status,
        Datefinish: req.body.datefinish,
        Datestart: req.body.datestart
    };

    taskDao.updateDb(db, req.params.id)
        .then((data) => {
            res.status(200).send({
                message: "updated successfully"
            })
        })
        .catch((error) => {
            res.status(401).send({ message: "Unable to update the task!" })
        });
}

function findDb(req, res) {

    let userId = req.body.userId
    let projectId = req.body.projectId

    taskDao.findAll(userId,projectId)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(401).send({ message: "Tasks not found." })

        });
}

function findDbByDate(req, res) {
    console.log(req.body.datetask)
    let dategiven = new Date(req.body.datetask)
    console.log(dategiven);
    let userId = req.body.userId
    taskDao.findAllBydate(dategiven,userId)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            res.status(401).send({ message: "Tasks not found." })

        });
}

var taskController = {
    addDb: addDb,
    findDb: findDb,
    findDbById: findDbById,
    updateDb: updateDb,
    deleteById: deleteById,
    findDbByDate:findDbByDate
}

module.exports = taskController;