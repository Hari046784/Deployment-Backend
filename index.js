//Importing the dotenv module
require("dotenv").config();

//Importing the express module
const express = require("express");

//Importing the DB
const db = require("./db/connect");

//Initializing the express
const app = express();

// Calling the express.json() method for parsing
app.use(express.json());

// To connect DB
db();

// Importing the routes
const employeesRoutes = require("./routes/employees.routes");

//Adding the custom middleware
app.use("/api", employeesRoutes);

//Testing
app.use("/", (req, res) => {
    res.send("Company Employees Details")
});

//Initializing the port number
const PORT = process.env.PORT || 8080;

// Listening to the port
app.listen(PORT, () => {
    console.log(`Application is running on PORT ${PORT}`);
});