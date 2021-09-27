var dbConn=require("../../config/db.config");
 var Company=function(company){
         this.Name=company.Name;
         this.branch_id=company.branch_id;
         this.phone_no=company.phone_no;
         this.address=company.address;
         this.email=company.email;
         this.number_of_emp=company.number_of_emp;
        
 }
 //get all companies
 Company.getAllCompany=(result)=>{
     dbConn.query("SELECT * FROM company where is_deleted=0",(err,res)=>{
         if(err){
             console.log("Error while fetching companies",err);
             result(null,err);
         }
         else{
             console.log("companies/-fetched");
             result(null,res);
         }
     })
 }
 Company.createCompany=(companyReqData,result)=>{
    dbConn.query("INSERT INTO company SET ?",companyReqData,(err,res)=>{
        if(err)
        {
            console.log("error",err);
            result(null,err);
        }
        else{
           console.log("company inserted");
           result(null,res);
          // result(null,{status:true,message:"employee inserted",insertId:res.id})
        }
    });
}
Company.updateCompany = (id, companyReqData, result)=>{
    dbConn.query("UPDATE company SET Name=?,phone_no=?,address=?,email=?,number_of_emp=?  WHERE branch_id = ?", [companyReqData.Name,companyReqData.phone_no,companyReqData.address,companyReqData.email,companyReqData.number_of_emp,id], (err, res)=>{
        if(err){
            console.log('Error while updating the company');
            result(null, err);
        }else{
            console.log("Company updated successfully");
            result(null, res);
        }
    });
}
Company.deleteCompany=(id,result)=>{
       dbConn.query("UPDATE company SET is_deleted=? WHERE branch_id=?",[1,id],(err,res)=>{
        if(err){
            console.log("error while deleting");
            result(null,err);
        }
        else{
            console.log("Company deleted successfully");
            result(null,res);
        }
    })
}
 module.exports=Company;