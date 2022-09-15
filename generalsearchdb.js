const sql = require("mssql");
// var cors = require('cors')
const express = require("express");
const app = express();
const config= {
server: "10.131.10.15",
port:  1433,
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

app.post('/generalsearchdb', function (req, res){
    
    sql
    .connect(config)
    .then((pool) =>{
    return pool
    .request()
    .input("SenderName", sql.Int, parseInt(req.body.SenderName))
    .input("SenderId", sql.Int, parseInt(req.body.SenderId))
    .input("ReceiverName", sql.Int, parseInt(req.body.ReceiverName))
    .input("ReceiverId", sql.Int, parseInt(req.body.ReceiverId))
    .input("Direction", sql.Int, parseInt(req.body.Direction))
    .input("DocumentType", sql.Int, parseInt(req.body.DocumentType))
   
    .input("Page_Number", sql.Int, parseInt(req.body.Page_Number))
    .input("Page_Size", sql.Int, parseInt(req.body.Page_Size))
   
    .execute("dbo.Usp_GeneralSearch_Pagination");
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

app.listen ( process.env.PORT || 3001, () => {
console.log("listening on port 3001");
});
