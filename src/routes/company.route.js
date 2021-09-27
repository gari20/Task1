const express=require("express");
const router=express.Router();
const companyController=require("../controllers/company.controller");
const Company = require("../models/company.model");
//get all
router.get("/",companyController.getCompanyList);
router.post("/",companyController.createNewCompany);
router.put("/:id",companyController.updateCompany);
router.delete("/:id",companyController.deleteCompany);
module.exports=router;