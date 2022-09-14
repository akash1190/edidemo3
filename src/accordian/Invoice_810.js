import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
import './accordian.css';
import { getInvoice810 } from "../ApiServices";
import Invoice_810_table from "./Invoice_810_table";
const Invoice_810 = () => {
  const [apiCall,SetApiCall]=useState(0);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');


  const callApi=async ()=>{
    const value={"Transaction Type":"810"};
    
    const apiResponse = await getInvoice810(value);
    if(apiResponse.data.Status==='success' || apiResponse.data.Status==='Success'){
      setPosts(apiResponse.data["810 response"]);
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
          <h2 className="mt2">Invoice - 810</h2>
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
                      <label>Shipment</label>
                      <input type="date" class="form-control"/>
                      <label>Invoice Date</label>
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
              <div className="dateBox">
                      <h5 className="font-weight-bold">Doc Details</h5>
                      <div class="row">
  <div class="col-4 ">
  <label>PO Number</label>
  <input placeholder="Enter Minimum 3 Characters" type="text" className="form-control" />
  </div>
  
                    <div class="col-4 ">
  <label>Invoice Num</label>
  <input type="text"  placeholder="Enter Minimum 3 Characters" className="form-control" />
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
  <input  type="text" className="form-control" />
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
                  <button type="submit" className="btnsearch" onClick={callApi}>Search</button>  <button type="submit" className="btnsearch">Cancel</button>
                  </div>
                  <div className="table_data">
                  {apiCall==0
  ? ''
  : <>
      {apiCall==1
        ? <div><Invoice_810_table data={posts}/></div>
        : <div>{error}</div>
      }
      
    </>
}

                  </div>
    </div>

  )
}
export default Invoice_810;


