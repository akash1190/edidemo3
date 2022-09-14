import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import './accordian/accordian.css';

import { useState } from "react";
import { loginApi } from "./ApiServices";
const Login=()=>{
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();
    
    const goToForgotPassword=()=>{
        //navigate('/forgotPassword',{state:{userData:{name:firstName}}});
        navigate('/forgotPassword')
   }
   const goToCreateAccount=()=>{
    //navigate('/forgotPassword',{state:{userData:{name:firstName}}});
    navigate('/createAccount')
}

const goToResetPassword=()=>{
    //navigate('/forgotPassword',{state:{userData:{name:firstName}}});
    navigate('/resetpassword')
}
const callAPi=async()=>{
    try{
     const response = await axios.get('http://18.117.255.68:9090/ws/simple/getAbc');//'https://heroku-boot-demo.herokuapp.com/');
     console.log(response.status);
     console.log(response.data);
    }catch(exception){
        console.log(exception);
    }
}
const callBasicAuthAPi=async()=>{
    const res = await loginApi(userName,password);
    console.log(res.status);
    
  if(res.status==200){
   const response = res.data;
   console.log(res);
   if(response.Status==='Success'){
       navigate('/');
   }else{
       alert(response.message)
   }
  }else{
      alert("fail")
  }
  
  //console.log(response.Status);

}
    // const {state} = useLocation();
    // const {userData } = state; 
    // console.log(userData);
    // const userDetails = Object.entries(userData).map(([key,value])=>{
    //     return (
    //         <div>{key} : {value.toString()}</div>
    //     );
    //   })
    
       
 
    
    return (
       <>
         <div className="insiderLoader">
<div className="outer_loader"></div>
<div className="loader"></div>
</div>
      
        <div className="login_page">
           <div className="banner responsive">
                &nbsp;
           </div>
           <div className="account">
           <div className="sub-block">
      <h1>Welcome</h1>
    
               
               <p><small>Please sign-in to your account and start the adventure</small></p>
               <div className="form_section">
                   <div className="form-group">
                       <label>Email <span>*</span></label>
                       <input type="text" placeholder="Enter Email" className="form-control" 
                       value={userName} onChange={e => setUserName(e.target.value)}
                       />
                   </div>
                   <div className="form-group">
                       <label>Password <span>*</span></label>
                       <input type="password" placeholder="Enter Password" className="form-control" 
                       value={password} onChange={e => setPassword(e.target.value)}
                       />
                   </div>
                   <div className="form-group">
                       <input type="submit" className="btn" value="Login"  onClick={callBasicAuthAPi}/>
                   </div>
                   <div className="password_Details ">
                       <ul>
                           <li><a href="javascript:void(0)" className="btn forgot_Btn font-weight-bold" onClick={goToForgotPassword}>Forgot Password</a></li>
                           <li><a href="javascript:void(0)" className="btn reset_Btn font-weight-bold" onClick={goToResetPassword}>Reset Password</a></li>
                       </ul>
                   </div>
                   <div className="newPlatform">
                       <p>New on our platform?<a href="javascript:void(0);" className="btn create_account font-weight-bold" onClick={goToCreateAccount}>Create account</a></p>
                   </div>
               </div>
           </div>
           </div>
        </div>
      
        </>
        )
}


export default Login;