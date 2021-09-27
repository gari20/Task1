const express=require("express");
const router=express.Router();
const EmployeeController=require("../controllers/employee.controller");
const Employee = require("../models/employee.model");
//get all
router.get("/",EmployeeController.getEmployeeList);
//get by id
router.get("/:id",EmployeeController.getEmployeeById);
router.post("/",EmployeeController.createNewEmployee);
router.put("/:id",EmployeeController.updateEmployee);
router.delete("/:id",EmployeeController.deleteEmployee);
module.exports=router;