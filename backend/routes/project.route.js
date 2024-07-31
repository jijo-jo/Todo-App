const express = require('express');
const projectRouter = express.Router();
const projectController = require('../controllers/project.controller');
const { authJwt } = require("../middleware");

projectRouter.post('/addproject',authJwt.verifyToken(),projectController.addDb);
projectRouter.post('/getprojects',authJwt.verifyToken(),projectController.findDb);
projectRouter.get('/getproject/:id',authJwt.verifyToken(), projectController.findDbById);
projectRouter.put('/updateproject/:id',authJwt.verifyToken(), projectController.updateDb);
projectRouter.delete('/delproject/:id',authJwt.verifyToken(), projectController.deleteById);


module.exports = projectRouter;