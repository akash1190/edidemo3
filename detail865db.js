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

app.post('/detail865db', function (req, res){
    
    sql
    .connect(config)
    .then((pool) =>{
    return pool
    .request()
   
   
    .query("SELECT Transaction865_PurchaseOrderChangeReqLineItems.BillTo_AdditionalNameInfo,Transaction865_PurchaseOrderChangeReqLineItems.BillTo_PartyLocation,Transaction865_PurchaseOrderChangeReqLineItems.BillTo_PartyName,Transaction865_PurchaseOrderChangeReqLineItems.BillTo_CityName,Transaction865_PurchaseOrderChangeReqLineItems.BillTo_StateCode,Transaction865_PurchaseOrderChangeReqLineItems.BillTo_ZipCode,Transaction865_PurchaseOrderChangeReqLineItems.BillTo_CountryCode,Transaction865_POChangeAcknowdgement.CustomerName,Transaction865_POChangeAcknowdgement.OrderDate,FunctionalGroupEnvelope.ISA13_ControlNumber,Transaction865_POChangeAcknowdgement.PurchaseOrderNumber,COALESCE([dbo].[EDI_GetToValue]('865',Transaction865_POChangeAcknowdgement.AcknowledgmentType),Transaction865_POChangeAcknowdgement.AcknowledgmentType),Transaction865_POChangeAcknowdgement.RequestedDeliveryDate,Transaction865_POChangeAcknowdgement.RequestedShippingDate,Transaction865_PurchaseOrderChangeReqLineItems.ShipFrom_AdditionalNameInfo,Transaction865_PurchaseOrderChangeReqLineItems.ShipFrom_PartyLocation,Transaction865_PurchaseOrderChangeReqLineItems.ShipFrom_PartyName,Transaction865_PurchaseOrderChangeReqLineItems.ShipFrom_CityName,Transaction865_PurchaseOrderChangeReqLineItems.ShipFrom_StateCode,Transaction865_PurchaseOrderChangeReqLineItems.ShipFrom_ZipCode,Transaction865_PurchaseOrderChangeReqLineItems.ShipFrom_CountryCode,Transaction865_PurchaseOrderChangeReqLineItems.ShipTo_AdditionalNameInfo,Transaction865_PurchaseOrderChangeReqLineItems.ShipTo_PartyLocation,Transaction865_PurchaseOrderChangeReqLineItems.ShipTo_PartyName,Transaction865_PurchaseOrderChangeReqLineItems.ShipTo_CityName,Transaction865_PurchaseOrderChangeReqLineItems.ShipTo_StateCode,Transaction865_PurchaseOrderChangeReqLineItems.ShipTo_ZipCode,Transaction865_PurchaseOrderChangeReqLineItems.ShipTo_CountryCode,Transaction865_POChangeAcknowdgement.ShippingMethod,Transaction865_PurchaseOrderChangeReqLineItems.BuyerPartNumber,Transaction865_PurchaseOrderChangeReqLineItems.LineNumber,Transaction865_PurchaseOrderChangeReqLineItems.ProductDescription,Transaction865_PurchaseOrderChangeReqLineItems.QuantityOrdered,Transaction865_PurchaseOrderChangeReqLineItems.TotalPrice,Transaction865_PurchaseOrderChangeReqLineItems.UnitPrice,Transaction865_PurchaseOrderChangeReqLineItems.VendorPartNumber,[dbo].[Get_ISA_DateTime]('865',Transaction865_POChangeAcknowdgement.PurchaseOrderNumber) as ISADateTime,[dbo].[EDI_GetToValue] ('865',Transaction865_POChangeAcknowdgement.AcknowledgmentType) as TypeCode FROM ((Transaction865_POChangeAcknowdgement INNER JOIN Transaction865_PurchaseOrderChangeReqLineItems ON Transaction865_PurchaseOrderChangeReqLineItems.PurchaseOrderNumber = Transaction865_POChangeAcknowdgement.PurchaseOrderNumber) INNER JOIN FunctionalGroupEnvelope ON FunctionalGroupEnvelope.GS06_GroupControlNumber = Transaction865_POChangeAcknowdgement.GS06_GroupControlNumber) WHERE Transaction865_POChangeAcknowdgement.PurchaseOrderNumber = COALESCE (null, Transaction865_POChangeAcknowdgement.PurchaseOrderNumber)");
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
app.listen (3001, () => {
console.log("listening on port 3001");
});