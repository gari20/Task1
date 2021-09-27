var dbConn=require("../../config/db.config");
 var Employee=function(employee){
         this.first_name=employee.first_name;
         this.last_name=employee.last_name;
         this.email=employee.email;
         this.phone=employee.phone;
         this.organization=employee.organization;
         this.designation=employee.designation;
         this.salary=employee.salary;
         this.status=employee.status ? employee.status:1;
         this.branch_id=employee.branch_id;
 }
 //get all employees
 Employee.getAllEmployees=(result)=>{
     dbConn.query("SELECT employees.first_name ,employees.last_name,employees.designation, company.Name AS company,company.email,company.address FROM employees JOIN company ON employees.branch_id = company.branch_id",(err,res)=>{
         if(err){
             console.log("Error while fetching employees",err);
             result(null,err);
         }
         else{
             console.log("employees/-fetched");
             result(null,res);
         }
     })
 }
 //get employee by id from db
 Employee.getEmployeeById=(id,result)=>{
     dbConn.query("SELECT * FROM employees WHERE id =?",[id],(err,res)=>{
         if(err)
         {
             console.log("error",err);
             result(null,err);
         }
         else{
            // console.log("fetched");
             result(null,res);
         }
     });


 }
 //create new employee
 Employee.createEmployee=(employeeReqData,result)=>{
     dbConn.query("INSERT INTO employees SET ?",employeeReqData,(err,res)=>{
         if(err)
         {
             console.log("error",err);
             result(null,err);
         }
         else{
            console.log("employee inserted");
            result(null,res);
           // result(null,{status:true,message:"employee inserted",insertId:res.id})
         }
     });
 }
 //update
 Employee.updateEmployee = (id, employeeReqData, result)=>{
    dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=?,status=?,branch_id=?  WHERE id = ?", [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,employeeReqData.organization,employeeReqData.designation,employeeReqData.salary,employeeReqData.status,employeeReqData.branch_id, id], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("Employee updated successfully");
            result(null, res);
        }
    });
}
//delete
Employee.deleteEmployee=(id,result)=>{
    // dbConn.query("DELETE FROM employees WHERE id=?",[id],(err,res)=>{
    //     if(err)
    //     {
    //         console.log("error",err);
    //         result(null,err);
    //     }
    //     else{
    //         result(null,res);

    //     }

    //})
    dbConn.query("UPDATE employees SET is_deleted=? WHERE id=?",[1,id],(err,res)=>{
        if(err){
            console.log("error while deleting");
            result(null,err);
        }
        else{
            console.log("Employee updated successfully");
            result(null,res);
        }
    })
}
 module.exports=Employee;
