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
            navigate("/login");
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
                &nbsp;
           </div>
           <div className="account resetPassword">
           <div className="sub-block">
               <h1>Change Password</h1>
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
  <button class="btn01" type="button" onClick={submitRequest}>Ok</button>
  <button class="btn02" type="button" onClick={gobackToPage}>Cancel</button>
</div>
           </div>
               </div>
               </div>
              
           </div>
           
     
        )
}


export default ResetPassword;