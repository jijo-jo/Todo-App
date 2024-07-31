const express = require('express');
const router = express.Router();


const userRoutes = require('./user.route');
const taskRoutes = require('./task.route');
const projectRoutes = require("./project.route");


router.use('/users', userRoutes);
router.use('/project', projectRoutes);
router.use("/task",taskRoutes);

module.exports = router;