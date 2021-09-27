const companyModel=require("../models/company.model");
exports.getCompanyList=(req,res)=>{
    //console.log("here is employee list");
    companyModel.getAllCompany((err,company) => {
        console.log("We are here");
        //res.write("hello");
        if(err)
        {
            res.send(err);
        }
        else{
            console.log("companies",company);
            res.send(company);
        }
    })
}
exports.createNewCompany=(req,res)=>{
    //console.log("req data",req.body);
    const companyReqData=new companyModel(req.body);
    console.log("req data",req.companyReqData);
    if(req.body.constructor===Object&&Object(req.body).length===0)
    {
        res.send(400).send({success:false,message:"Please check once again"});
    }
    else{
        console.log("valid");
        companyModel.createCompany(companyReqData,(err,company)=>{
         if(err)
         {
             console.log("error is there",err);
             res.send(err);
             res.json({status:false,messgae:'something missing',data:company});
         }
         else{
             console.log("company created");
             res.json({status:true,messgae:'Employee created',data:company.insertId});
         }
        });
    }
}
exports.updateCompany=(req,res)=>{
    
    const companyReqData=new companyModel(req.body);
    console.log("company update req data",companyReqData);
    if(req.body.constructor===Object&&Object.keys(req.body).length===0)
    {
        res.send(400).send({success:false,message:"Please check once again"});
    }
    else{
        // console.log("valid");
        companyModel.updateCompany(req.params.id,companyReqData,(err,company)=>{
         if(err)
         {
             console.log("error is there",err);
             res.send(err);
             res.json({status:false,message:'something missing'});
         }
         else{
             console.log("company updated");
             res.json({status:true,message:'updated'});
         }
        });
    }
}
exports.deleteCompany=(req,res)=>{
    companyModel.deleteCompany(req.params.id,(err,employee)=>{
        if(err)
        {
            res.send(err);
        }
        else{
            res.json({success:true,message:'company deleted'});
        }
    })
}