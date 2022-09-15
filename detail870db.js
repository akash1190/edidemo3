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

app.post('/detail870db', function (req, res){
    
    sql
    .connect(config)
    .then((pool) =>{
    return pool
    .request()
   
   
    .query("declare @PurchaseOrderNumber VARCHAR(256) = null ;select distinct ROW_NUMBER() OVER(ORDER BY  max(TRIM(CAST( COALESCE(st_870.UnitPrice , st_850.UnitPrice ) as Char)))) AS Row#,max(TRIM(CAST(COALESCE(st_870.purchaseordernumber,st_850.purchaseordernumber) as Char))) as PurchaseOrderNumber,max(TRIM(CAST(COALESCE(dbo.EDI_GetToValue('850', st_850.PurchaseOrderType), st_850.PurchaseOrderType) as Char))) as PurchaseOrderType,max(TRIM(CAST(st_850.PO_Date  as Char))) as  PO_Date, max(TRIM(CAST(COALESCE(st_870.VendorPartNumber, st_850.VendorPartNumber,'NA') as char))) VendorPartNumber, max(TRIM(CAST(COALESCE(st_870.BuyerPartNumber,st_850.BuyerPartNumber,'NA') as char))) BuyerPartNumber, max(TRIM(CAST(COALESCE(st_870.UPCCode,st_850.UPCCode,'NA') as char))) UPCCode, max(TRIM(CAST(COALESCE(st_870.I_ProductDescription,st_850.ProductDescription,'NA') as char))) ProductDescription,max(TRIM(CAST(COALESCE(st_870.I_QuantityOrdered,st_850.QuantityOrdered) as Char))) as QuantityOrdered,max(TRIM(CAST(COALESCE(st_870.I_QuantityShipped,'NA') as Char))) as QuantityShipped,max(TRIM(CAST( st_870.O_ShipmentOrderStatus  as CHAR))) as O_ShipmentOrderStatus,max(TRIM(CAST( st_870.SenderName  as CHAR))) as SenderName,max(TRIM(CAST( st_870.ReceiverName  as CHAR))) as ReceiverName,max(TRIM(CAST( st_870.SupplierRefNumber  as CHAR))) as SupplierRefNumber,max(TRIM(CAST( COALESCE(st_870.UnitPrice,st_850.UnitPrice) as Char))) as UnitPrice,max(TRIM(CAST( st_870.LineItemTotalPrice as char))) as LineItemTotalPrice,max(TRIM(CAST(st_870.I_ProductDescription as Char))) as ProductDescription,max(TRIM(CAST( COALESCE(dbo.EDI_GetToValue('870', st_870.I_ShipmentOrderStatusCode), st_870.I_ShipmentOrderStatusCode)    as Char))) as I_ItemStatus,max(TRIM(CAST(COALESCE(dbo.EDI_GetToValue('870', st_870.I_StatusReasonCode), st_870.I_StatusReasonCode)  as Char))) as I_ItemStatusDetails ---- Date and time,max(TRIM(CAST(st_850.ISA_DateTime_850  as CHAR))) as ISA_DateTime_850,max(TRIM(CAST(st_870.ISA_DateTime_870  as CHAR))) as ISA_DateTime_870,max(TRIM(CAST(st_870.ReportCreationDateTime  as CHAR))) as CreationDateTime,max(TRIM(CAST(COALESCE(st_870.RequestedShippingDate,st_850.RequestedShippingDate) as CHAR))) as RequestedShippingDate,max(TRIM(CAST(COALESCE(st_870.RequestedDeliveryDate,st_850.RequestedDeliveryDate) as CHAR))) as RequestedDeliveryDate,max(TRIM(CAST(st_870.ActualShipmentDate as CHAR))) as ActualShipmentDate ----control nos,max(TRIM(CAST( st_850.ISA13_ControlNumber_850  as CHAR))) as ISA13_ControlNumber_850,max(TRIM(CAST( st_870.ISA13_ControlNumber_870  as CHAR))) as ISA13_ControlNumber_870 ---FileName,max(TRIM(st_870.FileName_870)) as FileName_870 from (SELECT DISTINCT st_870_hdr.purchaseordernumber as purchaseordernumber,COALESCE([dbo].[EDI_GetToValue]('870',st_870_hdr.O_ShipmentOrderStatusCode),st_870_hdr.O_ShipmentOrderStatusCode) as O_ShipmentOrderStatus,CONVERT(VARCHAR,CAST (st_870_hdr.ReportCreationDate AS DATE),112) + ' ' + COALESCE(st_870_hdr.ReportCreationTime,'00.00') as ReportCreationDateTime ,CONVERT(VARCHAR,CAST (isa.ISA09_Date AS DATE),112) + ' ' + COALESCE(isa.ISA10_Time,'00.00') as ISA_DateTime_870 ,COALESCE([dbo].[GetEDIPartnerName] ('',isa.ISA06_SenderId),    isa.ISA06_SenderId) as SenderName,COALESCE([dbo].[GetEDIPartnerName] ('',isa.ISA08_ReceiverId),isa.ISA08_ReceiverId) as ReceiverName,st_870_hdr.SenderRefNumber as SupplierRefNumber,CAST(st_870_dtl.QuantityShipped as Char) as I_QuantityShipped,CAST(st_870_dtl.QuantityOrdered as Char) as I_QuantityOrdered,CAST(st_870_dtl.I_ShipmentOrderStatusCode as Char) as I_ShipmentOrderStatusCode,CAST(st_870_dtl.ProductDescription as Char) as I_ProductDescription,CAST(st_870_dtl.I_StatusReasonCode as Char) as I_StatusReasonCode,CAST( isa.ISA13_ControlNumber  as CHAR) as ISA13_ControlNumber_870,CAST(st_870_dtl.VendorPartNumber as char) VendorPartNumber,CAST(st_870_dtl.BuyerPartNumber as char) BuyerPartNumber,CAST(st_870_dtl.UPCCode as char) UPCCode,CAST(st_870_dtl.UnitPrice as Char) as UnitPrice,CAST(st_870_dtl.RequestShippingDate  as CHAR) as RequestedShippingDate,CAST(st_870_dtl.RequestedDeliveryDate  as CHAR) as RequestedDeliveryDate,CAST(st_870_dtl.ActualShipmentDate  as CHAR) as ActualShipmentDate,CAST( st_870_dtl.QuantityOrdered * st_870_dtl.UnitPrice  as char) as LineItemTotalPrice,isa.ISA05_SenderIdQualifier + '_' + TRIM(isa.ISA06_SenderId) + '_' +  isa.ISA07_RecieverIdQualifier + '_' + TRIM(isa.ISA08_ReceiverId) + '_' + isa.ISA13_ControlNumber + '_870.txt' as FileName_870 FROM [Transaction870_OrderStatusReport] st_870_hdr ,[FunctionalGroupEnvelope] gs,[InterchangeEnvelope] isa,[Transaction870_OrderStatusReportLineItems] st_870_dtl WHERE st_870_hdr.GS06_GroupControlNumber = gs.GS06_GroupControlNumber and gs.ISA13_ControlNumber = isa.ISA13_ControlNumber and st_870_hdr.PurchaseOrderNumber = st_870_dtl.PurchaseOrderNumber and st_870_hdr.GS06_GroupControlNumber = st_870_dtl.GS06_GroupControlNumber and st_870_hdr.GS02_SendersCode = st_870_dtl.GS02_SendersCode and st_870_hdr.GS03_ReceiversCode = st_870_dtl.GS03_ReceiversCode and st_870_hdr.ST01_TransactionSetIdentifierCode = st_870_dtl.ST01_TransactionSetIdentifierCode and st_870_hdr.ST02_TransactionSetControlNumber = st_870_dtl.ST02_TransactionSetControlNumber AND st_870_hdr.PurchaseOrderNumber = @PurchaseOrderNumber)");
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
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen ( process.env.PORT || 3001, () => {
console.log("listening on port 3001");
});