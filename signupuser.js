const sql = require("mssql");
const signupuserSchema= sql.create({
First_Name:String,
Email_Id:String,
Password:String
});
module.exports = sql.model("EDIA_LoginTable",signupuserSchema);