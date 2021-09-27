const mysql=require("mysql");
//create connection
const dbConn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mysqlprac"
});
dbConn.connect(function(error){
    if(error)throw error;
    console.log("connected successfully");
});
module.exports=dbConn;