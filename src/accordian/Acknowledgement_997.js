import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
import './Table.css';
import { getacknowledgemt997 } from "../ApiServices";
import Acknowledgement_997_table from "./Acknowledgement_997_table";

const Acknowledgement_997 = () => {
  const [apiCall,SetApiCall]=useState(0);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');


  const callApi=async ()=>{
    const value={"Transaction Type":"997"};
    
    const apiResponse = await getacknowledgemt997(value);
    //if(apiResponse.data.Status==='success'){
      if(apiResponse.data.CurrentDate!=''){
      setPosts(apiResponse.data["Response"]);
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
          <h2 className="mt2">Functional Acknowledgement - 997</h2>
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
                      <h5 className="font-weight-bold">Acknowledgement</h5>
                      <div class="col-12 ">
                      <label>Status</label>
  <select class="form-control">
  <option></option>
    <option>Accepted</option>
    <option>Rejected</option>
    <option>Partially Accepted</option>
  </select>
  <label>Generated For</label>
  <select class="form-control">
  <option></option>
    <option>PO(850)</option>
    <option>PO Ack (855)</option>
    <option>PO Change (860)</option>
    <option>PO Ack Change (865)</option>
    <option>Shipment</option>
    <option>Invoice</option>
    <option>Order Status Report</option>
  </select>
  </div>

                      
                  </div>

                  {/* <div className="search_box">
                      <h5 className="font-weight-bold">Item Details</h5>
                      <div class="col-12 ">
  <label>Vendor Part Num</label>
  <input type="text" className="form-control" />
  <label>Buyer Part Num</label>
                        <input type="text" className="form-control" />
  </div>

                  </div> */}
              </div>

              </div>
              <div className="row daterange1">

              <div class=" col-md-6">
				<div className="dateBox">
					<h5 className="font-weight-bold">Date Range</h5>
					<div class="form-group">
						<div class="form-check-inline">
							<label class="customradio"><span class="radiotextsty font-weight-bold">Custom Date Range</span>
								<input type="radio" name="radio" /> <span class="checkmark"></span> </label>
							<label class="customradio"><span class="radiotextsty font-weight-bold">Transaction Dates Occurring</span>
								<input type="radio" name="radio" /> <span class="checkmark"></span> </label>
						</div>
					</div>
					<div class="row">
						<div class="form-group col-md-6">
							<label>From</label>
							<input type="date" class="form-control" /> </div>
						<div class="form-group col-md-6">
							<label>To</label>
							<input type="date" class="form-control" /> </div>
					</div>
				</div>
			</div>

      <div className="col-md-6 dateBox2">
			
					<h5 className="font-weight-bold">Direction</h5>
					<div class="form-group">
						<div class="form-check-inline">
							<label class="customradio"><span class="radiotextsty font-weight-bold">Inbound</span>
								<input type="radio" name="radio" /> <span class="checkmark"></span> </label>
							<label class="customradio"><span class="radiotextsty font-weight-bold">Outbound</span>
								<input type="radio" name="radio" /> <span class="checkmark"></span> </label>
							<label class="customradio"><span class="radiotextsty font-weight-bold">All</span>
								<input type="radio" name="radio" /> <span class="checkmark"></span> </label>
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
        ? <div><Acknowledgement_997_table data={posts}/></div>
        : <div>{error}</div>
      }
      
    </>
}
 </div>
        
    </div>

  )
}
export default Acknowledgement_997;


