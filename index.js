const express=require("express");
const bodyParser=require("body-parser");
//create express app
const app=express();
//setup the server port
const port=process.env.PORT||3000;
//define route
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
res.send("hello");
});
//importing
const employeeRoutes=require("./src/routes/employee.route");
const companyRoutes=require("./src/routes/company.route");

//create employee
app.use("/api/v1/employees",employeeRoutes);
app.use("/api/v1/company",companyRoutes);
//app.use("/api/v1/employees/:id",employeeRoutes);
//listen to the port
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
});