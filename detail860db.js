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

app.post('/detail860db', function (req, res){
    
    sql
    .connect(config)
    .then((pool) =>{
    return pool
    .request()
   
   
    .query("SELECT Transaction860_PurchaseOrderChangeRequestLineItems.BillTo_AdditionalNameInfo,Transaction860_PurchaseOrderChangeRequestLineItems.BillTo_PartyLocation,Transaction860_PurchaseOrderChangeRequestLineItems.BillTo_PartyName,Transaction860_PurchaseOrderChangeRequestLineItems.BillTo_CityName,Transaction860_PurchaseOrderChangeRequestLineItems.BillTo_StateCode,Transaction860_PurchaseOrderChangeRequestLineItems.BillTo_ZipCode,Transaction860_PurchaseOrderChangeRequestLineItems.BillTo_CountryCode,Transaction860_PurchaseOrderChangeRequest.CustomerName,Transaction860_PurchaseOrderChangeRequest.OrderDate,FunctionalGroupEnvelope.ISA13_ControlNumber,Transaction860_PurchaseOrderChangeRequest.PurchaseOrderNumber,COALESCE([dbo].[EDI_GetToValue]('860',Transaction860_PurchaseOrderChangeRequest.PurchaseOrderType),Transaction860_PurchaseOrderChangeRequest.PurchaseOrderType),Transaction860_PurchaseOrderChangeRequest.RequestedDeliveryDate,Transaction860_PurchaseOrderChangeRequest.RequestedShippingDate,Transaction860_PurchaseOrderChangeRequestLineItems.ShipFrom_AdditionalNameInfo,Transaction860_PurchaseOrderChangeRequestLineItems.ShipFrom_PartyLocation,Transaction860_PurchaseOrderChangeRequestLineItems.ShipFrom_PartyName,Transaction860_PurchaseOrderChangeRequestLineItems.ShipFrom_CityName,Transaction860_PurchaseOrderChangeRequestLineItems.ShipFrom_StateCode,Transaction860_PurchaseOrderChangeRequestLineItems.ShipFrom_ZipCode,Transaction860_PurchaseOrderChangeRequestLineItems.ShipFrom_CountryCode,Transaction860_PurchaseOrderChangeRequestLineItems.ShipTo_AdditionalNameInfo,Transaction860_PurchaseOrderChangeRequestLineItems.ShipTo_PartyLocation,Transaction860_PurchaseOrderChangeRequestLineItems.ShipTo_PartyName,Transaction860_PurchaseOrderChangeRequestLineItems.ShipTo_CityName,Transaction860_PurchaseOrderChangeRequestLineItems.ShipTo_StateCode,Transaction860_PurchaseOrderChangeRequestLineItems.ShipTo_ZipCode,Transaction860_PurchaseOrderChangeRequestLineItems.ShipTo_CountryCode,Transaction860_PurchaseOrderChangeRequest.ShippingMethod,Transaction860_PurchaseOrderChangeRequestLineItems.BuyerPartNumber,Transaction860_PurchaseOrderChangeRequestLineItems.LineNumber,Transaction860_PurchaseOrderChangeRequestLineItems.ProductDescription,Transaction860_PurchaseOrderChangeRequestLineItems.QuantityOrdered,Transaction860_PurchaseOrderChangeRequestLineItems.TotalPrice,Transaction860_PurchaseOrderChangeRequestLineItems.UPCCode,Transaction860_PurchaseOrderChangeRequestLineItems.UnitPrice,Transaction860_PurchaseOrderChangeRequestLineItems.VendorPartNumber,[dbo].[Get_ISA_DateTime]('860',Transaction860_PurchaseOrderChangeRequest.PurchaseOrderNumber) as ISADateTime,[dbo].[EDI_GetToValue] ('860',Transaction860_PurchaseOrderChangeRequest.PurchaseOrderType) as TypeCode FROM ((Transaction860_PurchaseOrderChangeRequest INNER JOIN Transaction860_PurchaseOrderChangeRequestLineItems ON Transaction860_PurchaseOrderChangeRequestLineItems.PurchaseOrderNumber = Transaction860_PurchaseOrderChangeRequest.PurchaseOrderNumber) INNER JOIN FunctionalGroupEnvelope ON FunctionalGroupEnvelope.GS06_GroupControlNumber = Transaction860_PurchaseOrderChangeRequest.GS06_GroupControlNumber) WHERE Transaction860_PurchaseOrderChangeRequest.PurchaseOrderNumber = COALESCE (null, Transaction860_PurchaseOrderChangeRequest.PurchaseOrderNumber)");
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
