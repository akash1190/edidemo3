import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "./ApiServices";


const ForgotPassword=()=>{
    const navigate=useNavigate();
    const [userName,setUserName]=useState("");
    const gobackToPage=()=>{
        navigate("/resetpassword");
   }
   const submitRequest=async()=>{

    const res = await forgotPassword(userName);
    if(res.status==200)
    {
        if(res.data.Status==='Success')
            navigate("/resetpassword");
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
           <div className="account forgetPassward">
           <div className="sub-block">
               <h1>Forgot Password</h1>
               <div className="form_section">
                   <div className="form-group">
                       <label>Enter Email ID <span>*</span></label>
                       <input type="text" placeholder="Enter Email" className="form-control"
                        value={userName} onChange={e => setUserName(e.target.value)}
                       />
                   </div>
                   <div class="d-grid gap-2 d-md-block">
                        <button class="btn01" type="button" onClick={submitRequest}>Submit</button>
                        <button class="btn02" type="button" onClick={gobackToPage}>Cancel</button>
                    </div>
                   
               </div>
              </div>
           </div>
        </div>
        )
}


export default ForgotPassword;