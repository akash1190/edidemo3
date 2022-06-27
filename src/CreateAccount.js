import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccountAPI, loginApi } from "./ApiServices";

const CreateAccount=()=>{
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
      })
    const navigate=useNavigate();
    const gobackToPage=()=>{
        navigate(-1);
   }
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
        navigate('/success');
   }else{
       alert(response.Status)
   }
  }else{
      alert("fail")
  }
  
  //console.log(response.Status);

}

    return (
        <div className="login_page">
           <div className="banner">
                <img src="dist/img/banner.jpg" />
           </div>
           <div className="account createAccount">
               <h4>Create Account</h4>
               <p><small>Create your account and start your journey</small></p>
               <div className="form_section">
                    <h4>Personal Information:</h4>
                    <div className="row">
                   <div className="form-group col-md-6">
                       <label>First Name <span>*</span></label>
                       <input type="text"  name="firstName" onChange={handleChange} className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Middle Name </label>
                       <input type="text" name="middleName" onChange={handleChange} className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Last Name <span>*</span></label>
                       <input type="text" name="lastName" onChange={handleChange} className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Phone Number <span>*</span></label>
                       <input type="number" name="phoneNo" onChange={handleChange} className="form-control" />
                   </div>
                   <div className="form-group col-md-12">
                       <label>Email Id <span>*</span></label>
                       <input type="text" name="emailId" onChange={handleChange} className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Supervisor Name <span>*</span></label>
                       <input type="text" name="supervisorname" onChange={handleChange} className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Supervisor Email <span>*</span></label>
                       <input type="text" name="supervisoremail" onChange={handleChange} className="form-control" />
                   </div>
               </div>
               <div className="officeAddress">
               <h4>Office Address:</h4>
               <div className="row">
               <div className="form-group col-md-6">
                       <label>Street  <span>*</span></label>
                       <input type="text" name="street" onChange={handleChange} className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>City  <span>*</span></label>
                       <input type="text" name="city" onChange={handleChange} className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Zipcode <span>*</span></label>
                       <input type="number" name="zipcode" onChange={handleChange} className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>State  <span>*</span></label>
                       <input type="text" name="state" onChange={handleChange} className="form-control" />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Country <span>*</span></label>
                       <input type="text" name="country" onChange={handleChange} className="form-control" />
                   </div>
                   </div>
               
                       <div class="d-grid gap-2 d-md-block">
  <button class="btnfor" type="button" onClick={callCreateAccount}>Register</button>
  <button class="btnfor" type="button"  onClick={gobackToPage}>Cancel</button>
</div>
           </div>
               </div>
              
           </div>
           
        </div>
        )
}


export default CreateAccount;