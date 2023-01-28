const express = require('express');
const Employees = require("../model/employees.model");
const router = express.Router();

// To Create Employees
router.post("/employees/create", (req, res) => {
    try{
        let employee = new Employees(req.body);
        employee.save((err, data) => {
            if(err){
                return res.status(400).send({
                    message: "Error while adding a new employee data"
                })
            }
            res.status(201).send({
                id: data._id,
                message: "Employee details has been added successfully"
            });
        });
    } catch (error) {
        res.status(500).send({
            message: "internal Server Error"
        });
    };
});

// To get all the Employees details
router.get("/employees", (req, res) => {
    try{
        Employees.find((err, data) => {
            if(err){
                return res.status(400).send({
                    message: "Error while retrieving employees data"
                })
            }
            res.status(200).send(data);
        });
    } catch (error) {
        res.status(500).send({
            message: "internal Server Error"
        });
    };
});

// To get the Employees details using Id
router.get("/employees/:id", (req, res) => {
    try{
        Employees.findOne({_id: req.params.id}, (err, data) => {
            if(err){
                return res.status(400).send({
                    message: "Error while retrieving the particular employee data"
                })
            }
            res.status(200).send(data);
        });
    } catch (error) {
        res.status(500).send({
            message: "internal Server Error"
        });
    };
});

// To edit the Employees details
router.put("/employees/edit/:id", (req, res) => {
    try{
        Employees.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, (err, data) => {
            if(err){
                return res.status(400).send({
                    message: "Error while updating an existing employee data"
                })
            }
            res.status(201).send({
                employeeId: req.params.id,
                message: "Employee details has been updated successfully"
            });
        });
    } catch (error) {
        res.status(500).send({
            message: "internal Server Error"
        });
    };
});

// To delete the Employee details
router.delete("/employees/delete/:id", (req, res) => {
    try{
        Employees.deleteOne({_id: req.params.id}, (err, data) => {
            if(err){
                return res.status(400).send({
                    message: "Error while deleting an existing employee data"
                })
            }
            res.status(200).send({
                message: "Employee details has been deleted successfully"
            });
        });
    } catch (error) {
        res.status(500).send({
            message: "internal Server Error"
        });
    };
});

module.exports = router;