import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
import './accordian.css';
import { getPo850 } from "../ApiServices";
import Po_850_table from "./Po_850_table";
const Po_850 = () => {
   const [apiCall,SetApiCall]=useState(0);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');


  const callApi=async ()=>{
    const value={"Transaction Type":"850"};
    
    const apiResponse = await getPo850(value);
    if(apiResponse.data.Status==='success'){
      setPosts(apiResponse.data["Response_List"]);
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
      <h2 className="mt2">Purchase Order - 850/XML/CSV</h2>
      <div className="search_Section">
         <div className="search_box">
            <h5 className="font-weight-bold">Sender</h5>
            <div class="col-12 ">
               <label>Sender Name</label>
               <input type="text" className="form-control" />
               <label>Sender Id</label>
               <input type="text" className="form-control" />
            </div>
         </div>
         <div className="search_box">
            <h5 className="font-weight-bold">Receiver</h5>
            <div class="col-12 ">
               <label>Receiver Name</label>
               <input type="text" className="form-control" />
               <label>Receiver Id</label>
               <input type="text" className="form-control" />
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
               <input type="text" className="form-control" />
               <label>Buyer Part Num</label>
               <input type="text" className="form-control" />
            </div>
         </div>
      </div>
   </div>
   <div className="daterange1">
      <div className="dateBox no-margin-right">
         <h5 className="font-weight-bold">PO Details</h5>
         <div class="row">
            <div class="col-3 ">
               <label>Number</label>
               <input type="text" className="form-control" />
            </div>
            <div class="col-3 ">
               <label>Date</label>
               <input type="date" class="form-control"/>
            </div>
            <div class="col-3">
               <label>Standard</label>
               <select class="form-control">
                  <option></option>
                  <option>Original</option>
                  <option>Cancellation</option>
                  <option>New Order</option>
               </select>
            </div>
            <div class="col-3">
               <label>Type</label>
               <select class="form-control">
                  <option></option>
                  <option>Original</option>
                  <option>Cancellation</option>
                  <option>New Order</option>
               </select>
            </div>
         </div>
      </div>
   </div>
   <div className="daterange1">
      <div className="dateBox no-margin-right">
         <h5 className="font-weight-bold">ShipTo Details</h5>
         <div class="row">
            <div class="col-4 ">
               <label>Party Name</label>
               <input type="text" className="form-control" />
               <label>Street</label>
               <input type="text" className="form-control" />
            </div>
            <div class="col-4 ">
               <label>City</label>
               <input type="text" className="form-control" />
               <label>State</label>
               <input type="text" className="form-control" />
            </div>
            <div class="col-4 ">
               <label>Zip Code</label>
               <input type="text" className="form-control" />
               <label>Country</label>
               <input type="text" className="form-control" />
            </div>
         </div>
      </div>
   </div>
   <div className="mt2 pd20">
      <button type="submit" className="btn01" onClick={callApi}>Search</button>  <button type="submit" className="btn02">Cancel</button>
   </div>
   <div className="table_data">
                  {apiCall==0
  ? ''
  : <>
      {apiCall==1
        ? <div><Po_850_table data={posts}/></div>
        : <div>{error}</div>
      }
      
    </>
}

                  </div>
</div>
)
}
export default Po_850;