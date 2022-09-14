import { useLocation } from "react-router-dom";
import React, { useState } from 'react'
import './Trackpo.css'
import './accordian.css';
import { poTracking } from "../ApiServices";
import TrackPoTable from "./TrackPoTable";

const Trackpo = () => {
  const [showResults,setShowResults]=useState(false);
  const [apiCall,SetApiCall]=useState(0);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [poNumber,setPoNumber]=useState('');
  const [poDetail, setPoDetail] = useState({});

  const handleChange=(evt)=> {
    const value = evt.target.value;
    setPoNumber(value);
  }
  const callApi=async ()=>{
    console.log(poNumber);
    if(poNumber==='')
      return;
    const value={"PONumber":poNumber};
    console.log(value);
    const apiResponse = await poTracking(value);
    if(apiResponse.data.Status==='Success'){
      setShowResults(true);
      setPoDetail(apiResponse.data);
      setPosts(apiResponse.data["Item details"]);
      SetApiCall(1);
    }
    else{
      setError("No Data Found");
      SetApiCall(2);
    }
  }
return (
  <div class="container">
    <div className="genral_search">
<div className="table-wrapper trackpo no-space">
<div className="row detail-block">
   <div className="big-block plain-block">
      <div className="detail-contact">
         <div className="align-self-start col-sm-9">
            <hr className="d-sm-none" />
            <h2 className="mt2">Track PO</h2>
         </div>
         <div className="col-sm-3">

         <div className="search">
         <input type="text" placeholder="Enter PO Number *" name="search" class="searchTerm" value={poNumber} onChange={handleChange}/>
    <button type="submit" className="searchButton" onClick={callApi}>
      <i className="fa fa-arrow-right" />
    </button>
  </div>

      
    </div>
        </div>
   </div>
 
    {/* <div className="col-sm-5">
        <div className="trackNumberSearch">
          <img src="dist/img/search.jpg"/>
        </div>
    </div> */}
</div>
{ showResults ? <PurchaseOrderDetail data={poDetail}/> :null}
{ showResults ? <AddressRefrence/> : null}
{ showResults ? <TrackPoTable data={posts}/> : null }

</div>
</div>
</div>
)
}

const PurchaseOrderDetail=(props)=>{
  const poDetail = props.data;
  return(<div>
    <div className="row">
<div className="big-block">
<div className="po-row-1">
   <div>
      <div className="desc-text"><strong>PO Date</strong><br />
         21-Jan-2020
      </div>
      <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
      <div className="first numblock">121</div>
   </div>
   <div>
      <div className="desc-text"><strong>PO Date</strong><br />
         21-Jan-2020
      </div>
      <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
      <div className="second numblock">222</div>
   </div>
   <div>
      <div className="desc-text"><strong>PO Date</strong><br />
         21-Jan-2020
      </div>
      <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
      <div className="second numblock">10</div>
   </div>
   <div>
      <div className="desc-text"><strong>PO Date</strong><br />
         21-Jan-2020
      </div>
      <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
      <div className="second numblock">49</div>
   </div>
   <div>
      <div className="desc-text"><strong>PO Date</strong><br />
         21-Jan-2020
      </div>
      <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
      <div className="first numblock">965</div>
   </div>
   <div>
      <div className="desc-text"><strong>PO Date</strong><br />
         21-Jan-2020
      </div>
      <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
      <div className="second numblock">68</div>
   </div>
   <div>
      <div className="desc-text"><strong>PO Date</strong><br />
         21-Jan-2020
      </div>
      <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
      <div className="second numblock">111</div>
   </div>
   <div>
      <div className="desc-text"><strong>PO Date</strong><br />
         21-Jan-2020
      </div>
      <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
      <div className="second numblock">664</div>
   </div>
   <div>
      <div className="desc-text"><strong>PO Date</strong><br />
         21-Jan-2020
      </div>
      <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
      <div className=" numblock">22</div>
   </div>
</div>
<div className="po-row-2">
<div>
   <div className="second numblock">333</div>
   <div className="desc-text"><strong>PO Date</strong><br />
      21-Jan-2020
   </div>
   <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
</div>
<div>
   <div className="third numblock">56</div>
   <div className="desc-text"><strong>PO Date</strong><br />
      21-Jan-2020
   </div>
   <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
</div>
<div>
<div className="desc-text" />
<div className="triple-icons" />
<div />
</div>
<div>
<div className="desc-text" />
<div className="triple-icons" />
   <div />
   </div>
   <div>
      <div className="second numblock" >121</div>
      <div className="desc-text"><strong>PO Date</strong><br />
         21-Jan-2020
      </div>
      <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
   </div>
   <div>
      <div className="second numblock">45</div>
      <div className="desc-text"><strong>PO Date</strong><br />
         21-Jan-2020
      </div>
      <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
   </div>
   <div>
      <div className="second numblock">867</div>
      <div className="desc-text"><strong>PO Date</strong><br />
         21-Jan-2020
      </div>
      <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
   </div>
   <div>
      <div className="numblock">23</div>
      <div className="desc-text"><strong>PO Date</strong><br />
         21-Jan-2020
      </div>
      <div className="triple-icons">
        <span className="eye1"><i class="ionicons ion-ios-eye-outline"></i></span>
        <span className="eye2"><i class="ionicons ion-ios-download-outline"></i></span>
        <a href="850-po.html" className="eye3"><i class="ionicons ion-document"></i></a>
      </div>
   </div>
   <div>
      <div className="desc-text" />
         <div className="triple-icons" />
            <div />
            </div>
         </div>
      </div>
   </div>

    <div className="trackHeards">
    <h2 className="mt2">Purcahse Order</h2>
        <div className="search_Section">
              <div className="search_box">
                
                 
      <h5>General Information</h5>

      <table width="100%">
         <tr>
          <td>Purchase Order</td>
          <td align="right">{poDetail.PurchaseOrderNumber}</td>
        </tr>
        <tr>
          <td>Shipment ID</td>
          <td align="right"> {poDetail.ShipmentId}</td>
        </tr>
        <tr>
          <td>Invoice ID</td>
          <td align="right">{poDetail.InvoiceNumber}</td>
        </tr>
        <tr>
          <td>PO Type</td>
          <td align="right">{poDetail.PurchaseOrderType}</td>
        </tr>
        <tr>
          <td>Total Amount</td>
          <td align="right">{poDetail.PO_TotalAmount}</td>
        </tr>
      </table>
      </div>
      <div className="search_box">
    <h5>Date References</h5>
      <table width="100%">
      <tr>
          <td>Purchase Order Type</td>
          <td align="right">{poDetail.PurchaseOrderType}</td>
        </tr>
        <tr>
          <td>Requested Shipping Date</td>
          <td align="right">{poDetail.RequestedShippingDate}</td>
        </tr>
        <tr>
          <td>Requested Delivery Date</td>
          <td align="right">{poDetail.RequestedDeliveryDate}</td>
        </tr>
        <tr>
          <td>Purchase Order Change Date</td>
          <td align="right">{poDetail.RequestedDeliveryDate}</td>
        </tr>
        <tr>
          <td>Actual Shipment Date</td>
          <td align="right">{poDetail.ActualDeliveryDate}</td>
        </tr>
        <tr>
          <td>Estimated Delivery Date</td>
          <td align="right">{poDetail.EstimatedDeliveryDate}</td>
        </tr>
        <tr>
          <td>Actual Delivery Date</td>
          <td align="right">{poDetail.RequestedDeliveryDate}</td>
        </tr>
        <tr>
          <td>Invoice Date</td>
          <td align="right">{poDetail.RequestedDeliveryDate}</td>
        </tr>

      </table>

    </div>
    <div className="search_box">
    <h5>Quantity References</h5>

      <table width="100%">
        <tr>
          <td>Ordered</td>
          <td align="right">{poDetail.TotalQuantityOrdered}</td>
        </tr>
        <tr>
          <td>Shipped</td>
          <td align="right">{poDetail.TotalQuantityShipped}</td>
        </tr>
        <tr>
          <td>Invoiced</td>
          <td align="right">{poDetail.TotalQuantityInvoiced}</td>
        </tr>
        <tr>
          <td>Pending</td>
          <td align="right">{poDetail.TotalQuantityPending}</td>
        </tr>

        
      </table>
    


      </div>      
        </div>
    </div>
    
    
    </div>);
}

const AddressRefrence=()=>{
  return(<div>
    <div className="trackHeards addressRefrence"><br/>
    <h2 className="mt2">Address Refrence</h2>
      <div className="search_Section">
          <div className="search_box">
          <h5>Ship To</h5>
    <table width="100%">
      <tr>
      <td>Party Name</td>
      <td align="right">0</td>
      </tr>
      <tr>
      <td>Location</td>
      <td align="right">1</td>
      </tr>
      <tr>
      <td>Location</td>
      <td align="right">1</td>
      </tr>      
    </table>
          </div>
          <div className="search_box">
          <h5>Bill To</h5>
    <table width="100%">
      <tr>
        <td>Street, City</td>
      </tr>
      <tr>
        <td>State, Country</td>
      </tr>
      <tr>
        <td><i className="fa fa-phone fa-flip-horizontal text-secondary" /> <b className="text-600">111-111-111</b></td>
      </tr>          
    </table>
          </div>
          <div className="search_box">
          <h5>Ship From</h5>
    <table width="100%">
      <tr>
        <td>Street, City</td>
      </tr>
      <tr>
        <td>State, Country</td>
      </tr>
      <tr>
        <td><i className="fa fa-phone fa-flip-horizontal text-secondary" /> <b className="text-600">111-111-111</b></td>
      </tr>          
    </table>
     
          </div>
      </div>
    </div>


    </div>);
}

export default Trackpo