import { useEffect, useState } from "react";
import { acknowledgementdetail, approveAPI, invoiceDetails, shipmentDetails } from "../ApiServices";
import CustomTable from "./CustomTable";

const InvoiceDetails810=()=>{
    const requestBody = {
        "PurchaseOrderNumber": "1028122021",
        "Transaction Type":"856"
        };
        const tableHeader= ["Line ID","Buyer Part Number","Vendor Part Number","Product Description"
        ,"IQuantity","Unit price"
        ,"Total Price"];
    
    const [details, setDetails] = useState({});
    const [itemDetails, setitemDetails] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const res = await invoiceDetails(requestBody);
        if(res.data.Status==='Success'){
            setDetails(res.data);
            const body=[];
            res.data.ItemsResponse.forEach(function (arrayItem) {
                const rowData=[];
                rowData.push(arrayItem.LineNumber);
                rowData.push(arrayItem.BuyerPartNumber);
                rowData.push(arrayItem.VendorPartNumber);
                rowData.push(arrayItem.ProductDescription);
                rowData.push(arrayItem.Quantity);
                rowData.push(arrayItem.UnitPrice);
                rowData.push(arrayItem.TotalPrice);
                body.push(rowData);
            });
            setitemDetails(body);

            
            
        }
    }
    
    return (
        <div class="container">
            <div className="companyName">
                <div className="two_cloumn">
                    <h4><strong>Company Name:</strong> R Systems International Ltd</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <p><strong>Bill To</strong></p>
                            <ul>
                                <li><span>{details.BillTo_AdditionalNameInfo}</span></li>
                                <li><span>{details.BillTo_PartyName}</span></li>
                                <li><span>{details.BillTo_PartyLocation}</span></li>
                                <li><span>{details.BillTo_GeographicLocation}</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <p><strong>Ship To</strong></p>
                            <ul>
                                <li><span>{details.ShipTo_PartyName}</span></li>
                                <li><span>{details.ShipTo_AdditionalNameInfo}</span></li>
                                <li><span>{details.ShipTo_PartyLocation}</span></li>
                                <li><span>{details.ShipTo_GeographicLocation}</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li><strong>PO Number</strong><span>:{details.PurchaseOrderNumber}</span></li>
                                <li><strong>Shipment ID</strong><span>:{details.InvoiceNumber}</span></li>
                                <li><strong>ASN Type</strong><span>:{details.InvoiceDate}</span></li>
                                <li><strong>Interchange Date Time</strong><span>:{details.ISADateTime}</span></li>
                                <li><strong>Control Number </strong><span>:{details.ISA13_ControlNumber}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grpSummry">
                <div className="row">
                    <div className="col-md-3">
                        <div class="form-group">
                            <label>Shipment ID</label>
                            <input type="text"class="form-control" disabled value={details.ShippingID}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="form-group">
                        <label>Requested Shipment Date</label>
                            <input type="text"class="form-control" disabled value={details.ActualShipmentDate}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="form-group">
                        <label>Total Shipping Quantity</label>
                            <input type="text"class="form-control" disabled value={details.TotalQuanity}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="form-group">
                        <label>Invoice Total</label>
                            <input type="text"class="form-control" disabled value={details.InvoiceTotal}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="data_tables">
                 <CustomTable heading={tableHeader} data={itemDetails}/>
                
            </div>
            <div className="two_btn">
                <a href="javascript:void(0);" className="btn">Back</a>
                <a href="javascript:void(0);" className="btn">View EDI</a>
               

            </div>
        </div>
    );
}
export default InvoiceDetails810;