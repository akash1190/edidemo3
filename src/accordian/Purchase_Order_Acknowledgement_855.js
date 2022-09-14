import { useLocation } from "react-router-dom";
import React from 'react';
import './accordian.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { poaAPI } from "../ApiServices";
import { poa1API } from "../ApiServices";

const Purchase_Order_Acknowledgement_855 = () => {
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])
  const [SenderName, setSenderName] = useState(null)
  const [ReceiverName, setReceiverName] = useState(null)
  const [SenderId, setSenderId] = useState(null)
  const [ReceiverId, setReceiverId] = useState(null)
  const [BuyerPartNumber, setBuyerPartNumber] = useState(null)
  const [VendorPartNumber, setVendorPartNumber] = useState(null)
  const [PONumber, setPONumber] = useState(null)
  const [typeSelect, settypeSelect] = useState(null)
  const [ShipToPartyName, setShipToPartyName] = useState(null)
  const [ShipToCityName, setShipToCityName] = useState(null)
  const [ShipToStateCode, setShipToStateCode] = useState(null)
  const [ShipToZipCode, setShipToZipCode] = useState(null)
  const [ShipToCountryCode, setShipToCountryCode] = useState(null)
 
        const navigate=useNavigate();
        const gobackToPage=()=>{
            navigate(-1);
       }
       
 
      const searchDetail=async()=>{
        console.log('hello search pressed')
         
        const res = await poaAPI({
          "PO Number": PONumber,
          "PO Type": typeSelect, 
           "PO date": null, 
           "Requested Shipment Date": null, 
           "Requested Delivery date": null, 
            "Buyer part Number": BuyerPartNumber, 
             "Vendor Part Number": VendorPartNumber, 
             "UPC code": null, 
             "ShipTo PartyLocation": null, 
              "ShipTo PartyName": ShipToPartyName, 
               "ShipTo CityName": ShipToCityName, 
               "ShipTo StateCode": ShipToStateCode, 
               "ShipTo ZipCode": ShipToZipCode, 
               "ShipTo CountryCode": ShipToCountryCode,
               "Sender Name": SenderName,
               "Sender Id": SenderId,
               "Receiver Name": ReceiverName,
               "Receiver Id": ReceiverId,
               "Transaction Type": 855
      });

      setData(res.data.result[0] || [] )

      //  return res.data.Response
    //   if(res.status==200){
    //    const response = res.data;
 
    //    if(response.status==='success'){
    //         navigate('/success');
    //    }else{
    //        alert(response.Status)
    //    }
    //   }else{
    //       alert("fail")
    //   }
     }

    
    console.log({data})

  
    const searchDetail1 = async(element)=>{
      
       
     
      const res = await poa1API({
        "PurchaseOrderNumber":element.PurchaseOrderNumber,
        "TransactionType": 855,
        "GS02_SendersCode":null,
        "GS03_ReceiversCode":null,
        "GS06_GroupControlNumber":null,
        "ISA13_ControlNumber":null,
      
        
        
       
        
       
    });
  
    setData1(res.data["ItemDetails"]|| [] )
    
    //  return res.data..Response
    //   if(res.status==200){
    //    const response = res.data;
    
    //    if(response.status==='success'){
    //         navigate('/success');
    //    }else{
    //        alert(response.Status)
    //    }
    //   }else{
    //       alert("fail")
    //   }
    }
 
    console.log({data})
  return (
   <div class="container">
     <div className="genral_search">
          <h2 className="mt2">Purchase Order Acknowledgement - 855</h2>
                <div className="search_Section">
                  <div className="search_box">
                      <h5 className="font-weight-bold">Sender</h5>
                      
                      <div class="col-12 ">
  <label>Sender Name</label>
  <input type="text" className="form-control" value={SenderName} onChange={e=>setSenderName(e.target.value)}/>
  <label>Sender Id</label>
                        <input type="text" className="form-control" value={SenderId} onChange={e=>setSenderId(e.target.value)} />
  </div>

                  </div>
                  <div className="search_box">
                      <h5 className="font-weight-bold">Receiver</h5>
                      <div class="col-12 ">
  <label>Receiver Name</label>
  <input type="text" className="form-control" value={ReceiverName} onChange={e=>setReceiverName(e.target.value)}/>
  <label>Receiver Id</label>
                        <input type="text" className="form-control" value={ReceiverId} onChange={e=>setReceiverId(e.target.value)}/>
  </div>

                  </div>
                  <div className="search_box">
                      <h5 className="font-weight-bold">Date Details</h5>
                      <div class="col-12 ">
                      <label>Requested Shipment</label>
                      <input type="date" class="form-control"/>
                      <label>Requested Delivery</label>
                      <input type="date" class="form-control"/>
  </div>

                      
                  </div>

                  <div className="search_box">
                      <h5 className="font-weight-bold">Item Details</h5>
                      <div class="col-12 ">
  <label>Vendor Part Num</label>
  <input type="text" className="form-control" value={VendorPartNumber} onChange={e=>setVendorPartNumber(e.target.value)} />
  <label>Buyer Part Num</label>
                        <input type="text" className="form-control" value={BuyerPartNumber} onChange={e=>setBuyerPartNumber(e.target.value)} />
  </div>

                  </div>
              </div>

              </div>
              <div className="daterange1">
              <div className="dateBox">
                      <h5 className="font-weight-bold">PO Details</h5>
                      <div class="row">
  <div class="col-4 ">
  <label>PO Number</label>
  <input type="text" className="form-control" value={PONumber} onChange={e=>setPONumber(e.target.value)}/>
  </div>
   <div class="col-4 ">
  <label>Type</label>
                       
                        <select class="form-control" value={typeSelect}
onChange={(e) => {const typeSelect = e.target.value
settypeSelect(typeSelect);
}} >
  <option></option>
    <option value="AckDetailandChange">Ack. Detail and Change</option>
    <option value="AckDetailandNOChange">Ack. Detail and NO Change</option>
    <option value="AckNoDetailandChange">Ack. No Detail and Change</option>
    <option value="RejectWithNoDetail">Reject With No Detail</option>
    <option value="RejectedNotAsAgreedpment">Rejected Not As Agreed</option>
    
    
  </select>
  {typeSelect}
                    </div>
                    <div class="col-4 ">
  <label>Date</label>
  <input type="date" class="form-control"/>
  </div>
</div>
                      	
          
                  </div>
                  </div>
                  <div className="daterange1">
              <div className="dateBox">
                      <h5 className="font-weight-bold">ShipTo Details</h5>
                      <div class="row">
  <div class="col-4 ">
  <label>Party Name</label>
  <input type="text" className="form-control" value={ShipToPartyName} onChange={e=>setShipToPartyName(e.target.value)}/>
  <label>Street</label>
  <input type="text" className="form-control" />
  </div>
   <div class="col-4 ">
   <label>City</label>
  <input type="text" className="form-control" value={ShipToCityName} onChange={e=>setShipToCityName(e.target.value)}/>
  <label>State</label>
  <input type="text" className="form-control" value={ShipToStateCode} onChange={e=>setShipToStateCode(e.target.value)}/>
                    </div>
                    <div class="col-4 ">
                    <label>Zip Code</label>
  <input type="text" className="form-control" value={ShipToZipCode} onChange={e=>setShipToZipCode(e.target.value)}/>
  <label>Country</label>
  <input type="text" className="form-control" value={ShipToCountryCode} onChange={e=>setShipToCountryCode(e.target.value)}/>
  </div>
</div>
                      	
          
                  </div>
                  </div>
                  <div className="mt2 pd20">
                  <button type="submit" className="btnsearch" data-toggle="collapse"
        data-target="#generalsearchcollapse" onClick={searchDetail}>Search</button>  <button type="submit" className="btnsearch">Cancel</button>
                  </div>




  <div className="modal fade" id="myModal" role="dialog">
  <div className="modal-dialog modal-xl">
    {/* Modal content*/}
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">×</button>
        <h4 className="modal-title"></h4>
      </div>
      <div className="companyName">
                <div className="two_cloumn">
                    <h4><strong>Company Name:</strong> R Systems International Ltd</h4>
                    <div className="row">
                        <div className="col-md-4">
                            <p><strong>Bill To</strong></p>
                            {data1.map((items2) => {
                      return (
                        <ul>
                          <li>
                        {items2.TotalMonetaryAmt}</li>
                              
                            </ul>
                      );
                    })}
                        </div>
                        <div className="col-md-4">
                            <p><strong>Ship To</strong></p>
                            <ul>
                                <li><span>{}</span></li>
                                <li><span>{}</span></li>
                                <li><span>{}</span></li>
                                <li><span>{}</span></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li><strong>PO Number</strong><span>:</span></li>
                                <li><strong>Shipment ID</strong><span>:</span></li>
                                <li><strong>ASN Type</strong><span>:</span></li>
                                <li><strong>Interchange Date Time</strong><span>:</span></li>
                                <li><strong>Control Number </strong><span>:</span></li>
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
                            <input type="text"class="form-control" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="form-group">
                        <label>Requested Shipment Date</label>
                            <input type="text"class="form-control" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="form-group">
                        <label>Total Shipping Quantity</label>
                            <input type="text"class="form-control" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="form-group">
                        <label>Invoice Total</label>
                            <input type="text"class="form-control" />
                        </div>
                    </div>
                </div>
            </div>
      <div className="modal-body">

<div class="card" >
        <div class="card-body">
          <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12 col-md-6">
              
                  <h1 class="card-title ffont">Details</h1>
               
              </div>
              <div class="col-sm-12 col-md-6 text-right">
                <div className="btn_group">
                  <button className="btn btn-default" title="Reload">
                    <i className="fa fa-sync-alt" />
                  </button>
                  <button className="btn btn-default" title="Pdf">
                    <i className="fa fa-file-pdf" />
                  </button>
                  <button className="btn btn-default" title="Excel">
                    <i className="fas fa-file-excel" />
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <table
                  id="example2"
                  class="table table-bordered table-hover dataTable dtr-inline"
                  role="grid"
                  aria-describedby="example2_info"
                >
                  <thead className="colr">
                    <tr role="row">
                    <th
                        class="sorting sorting_asc"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="Rendering engine: activate to sort column descending"
                      >
                       Line Item ID
                      </th>
                      <th
                        class="sorting sorting_asc"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="Rendering engine: activate to sort column descending"
                      >
                        Line Number
                      </th>
                      <th
                        class="sorting sorting_asc"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="Rendering engine: activate to sort column descending"
                      >
                        Buyer Part Number
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Browser: activate to sort column ascending"
                      >
                      Product Description
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Platform(s): activate to sort column ascending"
                      >
                       Product ID
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Engine version: activate to sort column ascending"
                      >
                       Quantity Ordered
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Total Price
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        UPC code
                      </th> 
                      
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                     Unit Price
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Vendor Part Number
                      </th>
           
                    </tr>
                  </thead>
                  <tbody className="ffont" >
                    {data1.map((items2) => {
                      return (
                        <tr class="odd">
                          <td class="dtr-control sorting_1" tabindex="0">
                        {items2.LineItemID}</td>
                              <td>{items2.LineNumber}</td>
                              <td>{items2.BuyerPartNumber}</td>

                              <td>{items2.ProductDescription}</td>
                              <td>{items2.ProductID}</td>
                              <td>{items2.QuantityOrdered}</td>
                              <td>{items2.TotalPrice}</td>
                              <td>{items2.UPCcode}</td>
                              <td>{items2.UnitPrice}</td>
                              <td>{items2.VendorPartNumber}</td>
                            </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          
          </div>
        </div>
      </div>
       </div>
      
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<div class="card collapse" id="generalsearchcollapse">
        <div class="card-body">
          <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12 col-md-6">
              
                  <h1 class="card-title ffont">Search Result</h1>
               
              </div>
              <div class="col-sm-12 col-md-6 text-right">
                <div className="btn_group">
                  <button className="btn btn-default" title="Reload">
                    <i className="fa fa-sync-alt" />
                  </button>
                  <button className="btn btn-default" title="Pdf">
                    <i className="fa fa-file-pdf" />
                  </button>
                  <button className="btn btn-default" title="Excel">
                    <i className="fas fa-file-excel" />
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12">
                <table
                  id="example2"
                  class="table table-bordered table-hover dataTable dtr-inline"
                  role="grid"
                  aria-describedby="example2_info"
                >
                  <thead className="colr">
                    <tr role="row">
                    <th
                        class="sorting sorting_asc"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="Rendering engine: activate to sort column descending"
                      >
                       Details
                      </th>
                      <th
                        class="sorting sorting_asc"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="Rendering engine: activate to sort column descending"
                      >
                        Purchase Order Number
                      </th>
                      <th
                        class="sorting sorting_asc"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-sort="ascending"
                        aria-label="Rendering engine: activate to sort column descending"
                      >
                        Purchase Order Type
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Browser: activate to sort column ascending"
                      >
                       Order Date
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Platform(s): activate to sort column ascending"
                      >
                       Interchange Date Time
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Engine version: activate to sort column ascending"
                      >
                       Sender Name
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Receiver Name
                      </th>
                      {/* <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        ST01 Transaction Set Identifier Code
                      </th> */}
                      {/* <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                       ST02 Transaction Set Control Number
                      </th> */}
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                     Ship To
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Bill To
                      </th>
           
                    </tr>
                  </thead>
                  <tbody className="ffont" >
                    {data.map((items) => {
                      return (
                        <tr class="odd">
                          <td class="dtr-control sorting_1" tabindex="0">
                          <button type="submit" className="btnsearch" data-toggle="modal" data-target="#myModal" onClick={() => searchDetail1(items)}>Details</button>
                          </td>
          
                  <td>{items.PO_Number}</td>
                 <td>{items.PO_Type}</td>
                 <td>{items.PO_Date}</td>
                 <td>{items.Interchange_DateTime}</td>
                 <td>{items.SenderName}</td>
                 <td>{items.ReceiverName}</td>
                 {/* <td>{items.ST01_TransactionSetIdentifierCode}</td>
                 <td>{items.ST02_TransactionSetControlNumber}</td> */}
                 <td>{items.ShipTo}</td>
                 <td>{items.BillTO}</td>
                 </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          
          </div>
        </div>
      </div>

    </div>

  )
}
export default Purchase_Order_Acknowledgement_855;


