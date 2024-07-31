const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dotenv = require('dotenv');  
dotenv.config({ path: './env' });
require('dotenv').config();


var corsOptions = {
  origin: 'https://todo-app-seven-chi-10.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204

  };
  app.use(cors(corsOptions));

  app.options('*', cors())

if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL environment variable is not set');
    process.exit(1);
  }

const db = require('./configs/database');
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Unable to connect to the database:', err));

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