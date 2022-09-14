const sql = require("mssql");
// var cors = require('cors')
const express = require("express");
const app = express();
const config= {
server: "10.131.10.15",
port: process.env.PORT || 1433,
user: "sa",
password: "sa$432!@",
database: "ReactJS",
options:{
enableArithAbort: true,
trustServerCertificate: true,
},
requestTimeout: 300000,
pool: {
max:10,
min:0,
idleTimeoutMillis: 30000,
},
};

// app.use(cors());
// Body Parser Middleware
app.use(express.json());

app.post('/offboarddb', function (req, res){
    
    sql
    .connect(config)
    .then((pool) =>{
    return pool
    .request()
    .input('First_Name', sql.VarChar,(req.body.First_Name))
    .input('Last_Name', sql.VarChar, (req.body.Last_Name))
    .input('Supervisor_Email_Id',sql.VarChar,(req.body.Supervisor_Email_Id))
    .input('Action', sql.VarChar, (req.body.Action))
    .input('Status', sql.VarChar, (req.body.Status))
    
    .query("SELECT City, Country, Email_Id, Entry1, Entry2, Entry3, Entry4, Entry5, First_Name, Flag, Last_Name, Middle_Name, Password, Phone_Number, Plants, Role, State, Status, Street, Suite_No, Supervisor_Email_Id, Supervisor_Name, Zipcode FROM EDIA_LoginTable where Supervisor_Email_Id = Supervisor_Email_Id AND Status!= Status");
    })
    
    .then((result) => {
        console.log(req.body);
          res.status(200).send('result:success');
    sql.close();
})
    .catch((err)=>{
    console.log(err.message);
    sql.close();

});
});
app.listen ( process.env.PORT || 3001, () => {
console.log("listening on port 3001");
});