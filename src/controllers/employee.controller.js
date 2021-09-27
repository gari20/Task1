//get employee list
//const Employee = require("../models/employee.model");
//const Employee = require("../models/employee.model");
//const Employee = require("../models/employee.model");
const EmployeeModel=require("../models/employee.model");
exports.getEmployeeList=(req,res)=>{
    //console.log("here is employee list");
    EmployeeModel.getAllEmployees((err,employees) => {
        console.log("We are here");
        //res.write("hello");
        if(err)
        {
            res.send(err);
        }
        else{
            console.log("employees",employees);
            res.send(employees);
        }
    })
}
//get by id
exports.getEmployeeById = (req, res)=>{
    //console.log('get emp by id');
    EmployeeModel.getEmployeeById=(req.params.id, (err, employee)=>{
        if(err)
        res.send(err);
        console.log('single employee data',employee);
        res.send(employee);
    })
}
//create new
exports.createNewEmployee=(req,res)=>{
    //console.log("req data",req.body);
    const employeeReqData=new EmployeeModel(req.body);
    console.log("req data",req.employeeReqData);
    if(req.body.constructor===Object&&Object(req.body).length===0)
    {
        res.send(400).send({success:false,message:"Please check once again"});
    }
    else{
        console.log("valid");
        EmployeeModel.createEmployee(employeeReqData,(err,employee)=>{
         if(err)
         {
             console.log("error is there",err);
             res.send(err);
             res.json({status:false,messgae:'something missing',data:employee});
         }
         else{
             console.log("employyee created");
             res.json({status:true,messgae:'Employee created',data:employee.insertId});
         }
        });
    }
}
//update employee
exports.updateEmployee=(req,res)=>{
    
    const employeeReqData=new EmployeeModel(req.body);
    console.log("employee update req data",employeeReqData);
    if(req.body.constructor===Object&&Object.keys(req.body).length===0)
    {
        res.send(400).send({success:false,message:"Please check once again"});
    }
    else{
        // console.log("valid");
        EmployeeModel.updateEmployee(req.params.id,employeeReqData,(err,employee)=>{
         if(err)
         {
             console.log("error is there",err);
             res.send(err);
             res.json({status:false,message:'something missing'});
         }
         else{
             console.log("employyee created");
             res.json({status:true,message:'updated'});
         }
        });
    }
}
//delete employee
exports.deleteEmployee=(req,res)=>{
    EmployeeModel.deleteEmployee(req.params.id,(err,employee)=>{
        if(err)
        {
            res.send(err);
        }
        else{
            res.json({success:true,message:'employee deleted'});
        }
    })
}