const sql = require("mssql");
const express = require("express");
const signupuser = require("./signupuser");
const app = express();
const config= {
server: "10.131.10.15",
port: 1433,
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


app.post("/register", async (req,resp)=>{
let user= new signupuser(req.body);
let result =await user.save();
resp.send(result);
});
app.listen (3001, () => {
console.log("listening on port 3001");
});