import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

import './accordian/accordian.css';
import { createAccountAPI } from "./ApiServices";
const Onboard = () => {
  const navigate=useNavigate();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    middleName:"",
    phoneNo:"",
    emailId:"",
    supervisorname:"",
    supervisoremail:"",
    street:"",
    city:"",
    zipcode:"",
    state:"",
    country:""
  });
  const handleChange=(evt)=> {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  const callCreateAccount=async()=>{
      console.log(state);
    //   navigate('/success');
    //   return;
    const res = await createAccountAPI(state);
    console.log(res.status);
    
  if(res.status==200){
   const response = res.data;
   console.log(res);
   if(response.status==='success'){
        navigate('/RegistrationNewUser');
   }else{
       alert(response.Status)
   }
  }else{
      alert("fail")
  }
  
  //console.log(response.Status);

}
  return (
    <div class="container">
    <h3>Welcome to EDI Registration Portal!</h3>

    <div className="row">
      <div className="col-md-6">
      <div className="daterange1">
       <div className="dateBox mgt50 ">
          <h5 className="font-weight-bold">Personal Information:</h5>
          <div class="row">
             <div class="col-3">  <label>FIrst Name</label>
                <input type="text"  name="firstName" onChange={handleChange} className="form-control" />
             </div>
             <div class="col-3">
                <label>Middle Name</label>
                <input type="text" name="middleName" onChange={handleChange} className="form-control" />
             </div>
             <div class="col-3">
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={handleChange} className="form-control" />
             </div>
             <div class="col-3">
                <label>Email</label>
                <input type="text" name="emailId" onChange={handleChange} className="form-control" />
             </div>
          </div>
          <div class="row">
             <div class="col-3 ">
                <label>Phone Number</label>
                <input type="number" name="phoneNo" onChange={handleChange} className="form-control" />
             </div>
             <div class="col-3">
                <label>Assign</label>
                <select class="form-control">
                   <option></option>
                   <option>Employee</option>
                   <option>Supervisor</option>
                   <option>Admin</option>
                </select>
             </div>
             <div class="col-3">
                <label>Supervisor Name</label>
                <input type="text" name="supervisorname" onChange={handleChange} className="form-control" />
             </div>
             <div class="col-3">
                <label>Supervisor Email</label>
                <input type="text" name="supervisoremail" onChange={handleChange} className="form-control" />
             </div>
          </div>
       </div>
    </div>
      </div>
      <div className="col-md-6">
      <div className="daterange1">
       <div className="dateBox no-margin" >
          <h5 className="font-weight-bold">Office Address:</h5>
          <div class="row">
             <div class="col-4 ">
                <label>Street</label>
                <input type="text" name="street" onChange={handleChange} className="form-control" />
                <label>City</label>
                <input type="text" name="city" onChange={handleChange} className="form-control" />
             </div>
             <div class="col-4 ">
                <label>State</label>
                <input type="text" name="state" onChange={handleChange} className="form-control" />
                <label>Zip Code</label>
                <input type="number" name="zipcode" onChange={handleChange} className="form-control" />
             </div>
             <div class="col-4 ">
                <label>Country</label>
                <input type="text" name="country" onChange={handleChange} className="form-control" />
             </div>
          </div>
       </div>
    </div>
      </div>
    </div>


    
   
    <div className="mt2 pd20">
       <button type="submit" className="btn01" onClick={callCreateAccount}>Search</button>
       <button type="submit" className="btn02">Cancel</button>
    </div>
 </div>

  )
}
export default Onboard;
