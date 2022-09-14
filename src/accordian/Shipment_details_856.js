import { useEffect, useState } from "react";
import { acknowledgementdetail, approveAPI, shipmentDetails } from "../ApiServices";
import CustomTable from "./CustomTable";

const AcknowledgementDetail=()=>{
    const requestBody = {
        "PurchaseOrderNumber": "1028122021",
        "Transaction Type":"856"
        };
    const tableHeader= ["Line ID","Buyer Part Number","Vendor Part Number","Product Description"
                        ,"Quantity","Unit Price"
                        ,"Total Price"];
    
    const [details, setDetails] = useState({});
    const [itemDetails, setitemDetails] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const res = await shipmentDetails(requestBody);
        if(res.data.Status==='Success'){
            setDetails(res.data);
            const body=[];
            res.data.ItemDetails.forEach(function (arrayItem) {
                const rowData=[];
                rowData.push(arrayItem.LineNumber);
                rowData.push(arrayItem.BuyerPartNumber);
                rowData.push(arrayItem.VendorPartNumber);
                rowData.push(arrayItem.ProductDescription);
                rowData.push(arrayItem.QuantityShipped);
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
                            <p><strong>Ship To</strong></p>
                            <ul>
                                <li><span>{details.ShipToPartyName}</span></li>
                                <li><span>{details.BillToAdditionalNameInfo}</span></li>
                                <li><span>{details.ShipToPartyLocation}</span></li>
                                <li><span>{details.ShipToGeographicLocation}</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <p><strong>Ship From</strong></p>
                            <ul>
                                <li><span>{details.ShipFromPartyName}</span></li>
                                <li><span>{details.BillToAdditionalNameInfo}</span></li>
                                <li><span>{details.ShipFromPartyLocation}</span></li>
                                <li><span>{details.ShipFromGeographicLocation}</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li><strong>PO Number</strong><span>:{details.PurchaseOrderNumber}</span></li>
                                <li><strong>Shipment ID</strong><span>:{details.ShipmentId}</span></li>
                                <li><strong>ASN Type</strong><span>:{details.TypeCode}</span></li>
                                <li><strong>Interchange Date Time</strong><span>:{details.ShipmentDate}</span></li>
                                <li><strong>Control Number </strong><span>:{details.ISA13ControlNumber}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grpSummry">
                    <h3>Functional Group Summary</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div class="form-group">
                            <label>Actual Shipment Date</label>
                            <input type="text"class="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                        <label>Requested Shipment Date</label>
                            <input type="text"class="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                        <label>Total Shipping Quantity</label>
                            <input type="text"class="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                        <label>Estimated Delivery Date</label>
                            <input type="text"class="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                        <label>Requested Delivery Date</label>
                            <input type="text"class="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                        <label>Total Amount</label>
                            <input type="text"class="form-control"/>
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
export default AcknowledgementDetail;