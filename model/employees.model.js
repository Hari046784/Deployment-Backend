const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    firstName: {
        require: true,
        type: String,
    },
    lastName: {
        require: true,
        type: String,
    },
    email: {
        require: true,
        type: String,
        unique: true,
    },
    contactNumber: {
        require: true,
        type: String,
        unique: true,
    },
    designation: {
        require: true,
        type: String,
    },
    salary: {
        require: true,
        type: Number,
    },
});

module.exports = mongoose.model("Employees", employeeSchema);