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

app.post('/offboardtestdb', function (req, res){
    
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
    
    .query("UPDATE EDIA_LoginTable SET Status = @Action where Supervisor_Email_Id = @Supervisor_Email_Id");
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
