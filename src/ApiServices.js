import axios from "axios";

export const loginApi=async(userName,userPwd)=>{
        
const username = 'rsystems-N4VE35';
const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
const data =
{
 "Email_Id": userName,
  "Password": userPwd,
  "Action":"validate"
    }

var basicAuth = 'Basic ' + btoa(username + ':' + password);
const url ='https://testboomi.india.rsystems.com/ws/rest/v1/Checkdetails1/';
   // console.log(res.status);
   const res = await  axios.post(url,data, {
    headers: {
      'Authorization': basicAuth
    }
  });
  console.log(res);
  return res;
}

export const resetPassword=async(userName,userPwd)=>{
        
    const username = 'rsystems-N4VE35';
    const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
    const data =
    {
        "Email_Id": userName,
        "Password": userPwd,
        "Action": null
        }
    
    var basicAuth = 'Basic ' + btoa(username + ':' + password);
    const url ='https://testboomi.india.rsystems.com/ws/rest/v1/Checkdetails1/';
       // console.log(res.status);
       const res = await  axios.post(url,data, {
        headers: {
          'Authorization': basicAuth
        }
      });
      console.log(res);
      return res;
    }
    export const forgotPassword=async(userName)=>{
        
      const username = 'rsystems-N4VE35';
      const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
      const data =
      {
          "Email_Id": userName
          }
      
      var basicAuth = 'Basic ' + btoa(username + ':' + password);
      const url ='https://testboomi.india.rsystems.com/ws/rest/v1/Checkdetails1/';
         // console.log(res.status);
         const res = await  axios.post(url,data, {
          headers: {
            'Authorization': basicAuth
          }
        });
        console.log(res);
        return res;
      }
    export const createAccountAPI=async(userDetails)=>{
        
      const username = 'rsystems-N4VE35';
      const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
      const data = userDetails;
     
      
      var basicAuth = 'Basic ' + btoa(username + ':' + password);
      const url ='https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/NewUserRegistration1/';//'https://testboomi.india.rsystems.com:9090/ws/rest/v3/NewUserRegistration1/';
         // console.log(res.status);
         const res = await  axios.post(url,data, {
          headers: {
            'Authorization': basicAuth
          }
        });
        console.log(res);
        return res;
      }