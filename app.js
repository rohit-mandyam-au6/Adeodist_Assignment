const express = require('express');
const app = express();
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);

const db = require("./models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "basic"
  });
 
  Role.create({
    id: 2,
    name: "admin"
  });
 
  Role.create({
    id: 3,
    name: "super-admin"
  });
}

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to User application." });
});

// Start the server
const port = 9999;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});