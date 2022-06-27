import { useLocation } from "react-router-dom";
import React from 'react';
import './accordian.css';
const Shipment = () => {
  return (
   <div class="container">
     <div className="genral_search">
          <h2 className="mt2">Ship Notice - 856</h2>
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
                      <label>Actual Shipment</label>
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
              <div className="dateBox">
                      <h5 className="font-weight-bold">Doc Details</h5>
                      <div class="row">
  <div class="col-4 ">
  <label>Partner Name</label>
  <input type="text" className="form-control" />
  </div>
   <div class="col-4 ">
  <label>ASN Type</label>
                        <select class="form-control">
                        <option></option>
                          <option>Original</option>
                          <option>Cancellation</option>
                          <option>Add</option>
                          <option>Delete</option>
                          <option>Change</option>
                          <option>Replace</option>
                          
                        </select>
                    </div>
                    <div class="col-4 ">
                    <label>Shipment ID</label>
  <input type="text" className="form-control" />
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
                  <button type="submit" className="btnsearch">Search</button>  <button type="submit" className="btnsearch">Cancel</button>
                  </div>
    </div>

  )
}
export default Shipment;


