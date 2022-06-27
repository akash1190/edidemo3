import { useLocation } from "react-router-dom";
import React from 'react';
import './accordian/accordian.css';
const Onboard = () => {
  return (
   <div class="container">
 
              <div className="daterange1">
              <div className="dateBox mgt50">
                      <h5 className="font-weight-bold">Personal Information:</h5>
                      <div class="row">
  <div class="col-4 ">
  <label>FIrst Name</label>
  <input type="text" className="form-control" />
  </div>
  <div class="col-4 ">
  <label>Middle Name</label>
  <input type="text" className="form-control" />
  </div>
  <div class="col-4 ">
  <label>Last Name</label>
  <input type="text" className="form-control" />
  </div>
</div>
<div class="row">
  <div class="col-4 ">
  <label>Email</label>
  <input type="text" className="form-control" />
  </div>
  <div class="col-4 ">
  <label>Phone Number</label>
  <input type="text" className="form-control" />
  </div>
   <div class="col-4 ">
  <label>Assign</label>
                        <select class="form-control">
                        <option></option>
                          <option>Employee</option>
                          <option>Supervisor</option>
                          <option>Admin</option>
                          
                        </select>
                    </div>

</div>
<div class="row">
  <div class="col-4 ">
  <label>Supervisor Name</label>
  <input type="text" className="form-control" />
  </div>
  <div class="col-4 ">
  <label>Supervisor Email</label>
  <input type="text" className="form-control" />
  </div>

</div>
                      	
          
                  </div>
                  </div>
                  <div className="daterange1">
              <div className="dateBox">
                      <h5 className="font-weight-bold">Office Address:</h5>
                      <div class="row">
  <div class="col-4 ">
  <label>Street</label>
  <input type="text" className="form-control" />
  <label>City</label>
  <input type="text" className="form-control" />
  </div>
   <div class="col-4 ">
   
  <label>State</label>
  <input type="text" className="form-control" />
  <label>Zip Code</label>
  <input type="text" className="form-control" />
                    </div>
                    <div class="col-4 ">
                    
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
export default Onboard;


