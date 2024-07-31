const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dotenv = require('dotenv');  
dotenv.config({ path: './env' });
require('dotenv').config();


var corsOptions = {
  origin: "*",
  methods: "GET,PUT,POST,DELETE",
  };
  app.use(cors(corsOptions));

  
const db = require('./configs/database');
db.authenticate().then(() => {
  console.log('Database connected...');
}).catch(err => {
  console.log('Error: ' + err);
})

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Task Manage App" });
});


app.use('/', require('./routes/index'));


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const dbCreate = require("./models/index");
dbCreate.sequelize.sync();