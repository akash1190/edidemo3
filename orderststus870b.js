const sql = require("mssql");
const express = require("express");
const app = express();
const config= {
server: "10.131.10.15",
port:process.env.PORT || 1433,
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

app.post("/orderstatus870", function (req, res){
    
    sql
    .connect(config)
    .then((pool) =>{
    return pool
    .request()
    .input("PurchaseOrderNumber", sql.Int, parseInt(req.body.PurchaseOrderNumber))
    .input("PO_Type", sql.Int, parseInt(req.body.PO_Type))
    .input("Status_From_Date", (req.body.Status_From_Date))
    .input("Status_To_Date", (req.body.Status_To_Date))
    .input("RequestedShipmentDate",(req.body.RequestedShipmentDate))
    .input("BuyerPartNumber", sql.Int, parseInt(req.body.BuyerPartNumber))
    .input("VendorPartNumber", sql.Int, parseInt(req.body.VendorPartNumber))
    .input("UPC_Code", sql.Int, parseInt(req.body.UPC_Code))
    .input("ShipTo_PartyLocation", sql.Int, parseInt(req.body.ShipTo_PartyLocation))
    .input("ShipTo_PartyName", sql.Int, parseInt(req.body.ShipTo_PartyName))
    .input("ShipTo_CityName", sql.Int, parseInt(req.body.ShipTo_CityName))
    .input("ShipTo_StateCode", sql.Int, parseInt(req.body.ShipTo_StateCode))
    .input("ShipTo_ZipCode", sql.Int, parseInt(req.body.ShipTo_ZipCode))
    .input("ShipTo_CountryCode", sql.Int, parseInt(req.body.ShipTo_CountryCode))
    .input("SenderName", sql.Int, parseInt(req.body.SenderName))
    .input("SenderId", sql.Int, parseInt(req.body.SenderId))
    .input("ReceiverName", sql.Int, parseInt(req.body.ReceiverName))
    .input("ReceiverId", sql.Int, parseInt(req.body.ReceiverId))
    .execute("dbo.Usp_TS_870");
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