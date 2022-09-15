const sql = require("mssql");
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
connectionTimeout: 150000,
pool: {
max:10,
min:0,
idleTimeoutMillis: 30000,
},
};


// Body Parser Middleware
app.use(express.json());

app.get("/employeelist", function (req, res){
    sql
    .connect(config)
    .then((pool) =>{
    return pool
    .request()
    .input('page', req.query.page || 1)
    .input('size', req.query.size || 5)
    .query("select * from EDIA_LoginTable");
    })
    .then((result1) => {
    res.status(200).json({
    result: result1.recordsets,
    });
    sql.close();
})
    .catch((err)=>{
    console.log(err.message);
    sql.close();

});
});

app.listen (process.env.PORT || 3001, () => {
console.log("listening on port 3001");
});
