const sql = require("mssql");
const config={
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

sql.on('error', err => {
    console.log(err.message)
    })
    // Async Await
    async function getDBUsersAsyncFunction(){
    try{
        let pool = await sql.connect(config)
let result1 = await pool.request().query('select * from EDIA_LoginTable')
console.log(result1)
sql.close()
    }
    catch (err){

        console.log(err.message);
         sql.close();
    }
    }
    getDBUsersAsyncFunction();