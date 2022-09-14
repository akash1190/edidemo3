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
connectionTimeout: 150000,
pool: {
max:10,
min:0,
idleTimeoutMillis: 30000,
},
};

// app.use(cors());
// Body Parser Middleware
app.use(express.json());

app.post('/detail855db', function (req, res){
    
    sql
    .connect(config)
    .then((pool) =>{
    return pool
    .request()
   
   
    .query("SELECT Transaction855_PurchaseOrderAckLineItems.BillTo_AdditionalNameInfo,Transaction855_PurchaseOrderAckLineItems.BillTo_PartyLocation,Transaction855_PurchaseOrderAckLineItems.BillTo_PartyName,Transaction855_PurchaseOrderAckLineItems.BillTo_CityName,Transaction855_PurchaseOrderAckLineItems.BillTo_StateCode,Transaction855_PurchaseOrderAckLineItems.BillTo_ZipCode,Transaction855_PurchaseOrderAckLineItems.BillTo_CountryCode,Transaction855_PurchaseOrderAck.CustomerName,Transaction855_PurchaseOrderAck.OrderDate,FunctionalGroupEnvelope.ISA13_ControlNumber,Transaction855_PurchaseOrderAck.PurchaseOrderNumber,COALESCE([dbo].[EDI_GetToValue]('855',Transaction855_PurchaseOrderAck.AcknowledgmentType),Transaction855_PurchaseOrderAck.AcknowledgmentType),Transaction855_PurchaseOrderAck.RequestedDeliveryDate,Transaction855_PurchaseOrderAck.RequestedShippingDate,Transaction855_PurchaseOrderAckLineItems.ShipFrom_AdditionalNameInfo,Transaction855_PurchaseOrderAckLineItems.ShipFrom_PartyLocation,Transaction855_PurchaseOrderAckLineItems.ShipFrom_PartyName,Transaction855_PurchaseOrderAckLineItems.ShipFrom_CityName,Transaction855_PurchaseOrderAckLineItems.ShipFrom_StateCode,Transaction855_PurchaseOrderAckLineItems.ShipFrom_ZipCode,Transaction855_PurchaseOrderAckLineItems.ShipFrom_CountryCode,Transaction855_PurchaseOrderAckLineItems.ShipTo_AdditionalNameInfo,Transaction855_PurchaseOrderAckLineItems.ShipTo_PartyLocation,Transaction855_PurchaseOrderAckLineItems.ShipTo_PartyName,Transaction855_PurchaseOrderAckLineItems.ShipTo_CityName,Transaction855_PurchaseOrderAckLineItems.ShipTo_StateCode,Transaction855_PurchaseOrderAckLineItems.ShipTo_ZipCode,Transaction855_PurchaseOrderAckLineItems.ShipTo_CountryCode,Transaction855_PurchaseOrderAck.ShippingMethod,Transaction855_PurchaseOrderAckLineItems.BuyerPartNumber,Transaction855_PurchaseOrderAckLineItems.LineNumber,Transaction855_PurchaseOrderAckLineItems.ProductDescription,Transaction855_PurchaseOrderAckLineItems.QuantityOrdered,Transaction855_PurchaseOrderAckLineItems.TotalPrice,Transaction855_PurchaseOrderAckLineItems.UPCCode,Transaction855_PurchaseOrderAckLineItems.UnitPrice,Transaction855_PurchaseOrderAckLineItems.VendorPartNumber,[dbo].[Get_ISA_DateTime]('855',Transaction855_PurchaseOrderAck.PurchaseOrderNumber) as ISADateTime,[dbo].[EDI_GetToValue] ('855',Transaction855_PurchaseOrderAck.AcknowledgmentType) as TypeCode FROM ((Transaction855_PurchaseOrderAck INNER JOIN Transaction855_PurchaseOrderAckLineItems ON Transaction855_PurchaseOrderAckLineItems.PurchaseOrderNumber = Transaction855_PurchaseOrderAck.PurchaseOrderNumber) INNER JOIN FunctionalGroupEnvelope ON FunctionalGroupEnvelope.GS06_GroupControlNumber = Transaction855_PurchaseOrderAck.GS06_GroupControlNumber) WHERE Transaction855_PurchaseOrderAck.PurchaseOrderNumber = COALESCE (?, Transaction855_PurchaseOrderAck.PurchaseOrderNumber) AND Transaction855_PurchaseOrderAck.GS02_SendersCode = COALESCE (null, Transaction855_PurchaseOrderAck.GS02_SendersCode) AND Transaction855_PurchaseOrderAck.GS03_ReceiversCode = COALESCE (null, Transaction855_PurchaseOrderAck.GS03_ReceiversCode) AND Transaction855_PurchaseOrderAck.GS06_GroupControlNumber = COALESCE (null, Transaction855_PurchaseOrderAck.GS06_GroupControlNumber) AND FunctionalGroupEnvelope.ISA13_ControlNumber = COALESCE (null, FunctionalGroupEnvelope.ISA13_ControlNumber)");
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