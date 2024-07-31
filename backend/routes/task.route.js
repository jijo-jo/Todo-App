const express = require('express');
const taskRouter = express.Router();
const taskController = require('../controllers/task.controller');
const { authJwt } = require("../middleware");

taskRouter.post('/addtask',authJwt.verifyToken(),taskController.addDb);
taskRouter.post('/gettask',authJwt.verifyToken(),taskController.findDb);
taskRouter.post('/gettaskbydate',authJwt.verifyToken(),taskController.findDbByDate);
taskRouter.get('/gettask/:id',authJwt.verifyToken(),taskController.findDbById);
taskRouter.put('/updatetask/:id',authJwt.verifyToken(),taskController.updateDb);
taskRouter.delete('/deltask/:id',taskController.deleteById);


module.exports = taskRouter;