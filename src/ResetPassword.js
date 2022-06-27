import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "./ApiServices";

const ResetPassword=()=>{
    const navigate=useNavigate();
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const gobackToPage=()=>{
        navigate(-1);
   }
   const submitRequest=async()=>{

    const res = await resetPassword(userName,password);
    if(res.status==200)
    {
        if(res.data.Status==='success')
            navigate(-1);
        else
            alert(res.data.Status)
    }
    else{
        alert("Failure")
    }
   }

    return (
        <div className="login_page">
           <div className="banner">
                <img src="dist/img/banner.jpg" />
           </div>
           <div className="account resetPassword">
               <h4>Change Password</h4>
               <div className="form_section">
               <div className="form-group">
                       <label>User Name <span>*</span></label>
                       <input type="text"  className="form-control"
                       value={userName} onChange={e => setUserName(e.target.value)}
                       />
                   </div>
                   <div className="form-group">
                       <label>New Password  <span>*</span></label>
                       <input type="password" className="form-control" 
                       value={password} onChange={e => setPassword(e.target.value)}
                       />
                   </div>
                   <div className="form-group">
                       <label>Confirm Password <span>*</span></label>
                       <input type="password" className="form-control" 
                       value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
                       />
                   </div>
            
                    <div class="d-grid gap-2 d-md-block">
  <button class="btnfor" type="button" onClick={submitRequest}>ok</button>
  <button class="btnfor" type="button" onClick={gobackToPage}>Cancel</button>
</div>
           </div>
               </div>
              
           </div>
           
     
        )
}


export default ResetPassword;