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
//'https://testboomi.india.rsystems.com/ws/rest/v1/Checkdetails1/';
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
    //'https://testboomi.india.rsystems.com/ws/rest/v1/Checkdetails1/';
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
      //='https://testboomi.india.rsystems.com/ws/rest/v1/Checkdetails1/';
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
      const url ='https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/NewUserRegistration1/';
         // console.log(res.status);
         const res = await  axios.post(url,data, {
          headers: {
            'Authorization': basicAuth
          }
        });
        console.log(res);
        return res;
      }

      export const approveAPI=async(userDetails)=>{
        
        const username = 'rsystems-N4VE35';
        const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
        const data = userDetails;
       
        
        var basicAuth = 'Basic ' + btoa(username + ':' + password);
        const url ='https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/Requestor/';//'https://testboomi.india.rsystems.com:9090/ws/rest/v3/NewUserRegistration1/';
           // console.log(res.status);
           const res = await  axios.post(url,data, {
            headers: {
              'Authorization': basicAuth
            }
          });
         // console.log(res);
          return res;
        }

        export const approveRejectAPI=async(userDetails)=>{
        
          const username = 'rsystems-N4VE35';
          const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
          const data = userDetails;
         
          
          var basicAuth = 'Basic ' + btoa(username + ':' + password);
          const url ='https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/ApproveReject/';
             // console.log(res.status);
             const res = await  axios.post(url,data, {
              headers: {
                'Authorization': basicAuth
              }
            });
           // console.log(res);
            return res;
          }
          export const getInvoice810=async(userDetails)=>{
        
            const username = 'rsystems-N4VE35';
            const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
            const data = userDetails;
           
            
            var basicAuth = 'Basic ' + btoa(username + ':' + password);
            const url ='https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/810_TransactionalSearch/';
               // console.log(res.status);
               const res = await  axios.post(url,data, {
                headers: {
                  'Authorization': basicAuth
                }
              });
              return res;
            }
            export const getPo850=async(userDetails)=>{
        
              const username = 'rsystems-N4VE35';
              const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
              const data = userDetails;
             
              
              var basicAuth = 'Basic ' + btoa(username + ':' + password);
              const url ='https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/850_TransactionalSearch/';
                 // console.log(res.status);
                 const res = await  axios.post(url,data, {
                  headers: {
                    'Authorization': basicAuth
                  }
                });
                return res;
              }

              export const getShipment856=async(userDetails)=>{
        
                const username = 'rsystems-N4VE35';
                const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
                const data = userDetails;
               
                
                var basicAuth = 'Basic ' + btoa(username + ':' + password);
                const url ='https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/856_TransactionalSearch/';
                   // console.log(res.status);
                   const res = await  axios.post(url,data, {
                    headers: {
                      'Authorization': basicAuth
                    }
                  });
                  return res;
                }
                export const getacknowledgemt997=async(userDetails)=>{
        
                  const username = 'rsystems-N4VE35';
                  const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
                  const data = userDetails;
                 
                  
                  var basicAuth = 'Basic ' + btoa(username + ':' + password);
                  const url ='https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/997_TransactionalSearch/';
                     // console.log(res.status);
                     const res = await  axios.post(url,data, {
                      headers: {
                        'Authorization': basicAuth
                      }
                    });
                    return res;
                  }
                  export const acknowledgementdetail=async(userDetails)=>{
        
                    const username = 'rsystems-N4VE35';
                    const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
                    const data = userDetails;
                   
                    
                    var basicAuth = 'Basic ' + btoa(username + ':' + password);
                    const url ='https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/TS997Details/';
                       // console.log(res.status);
                       const res = await  axios.post(url,data, {
                        headers: {
                          'Authorization': basicAuth
                        }
                      });
                     // console.log(res);
                      return res;
                    }

                    export const shipmentDetails=async(userDetails)=>{
        
                      const username = 'rsystems-N4VE35';
                      const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
                      const data = userDetails;
                     
                      
                      var basicAuth = 'Basic ' + btoa(username + ':' + password);
                      const url ='https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/TS856Details/ ';    
                      // console.log(res.status);
                         const res = await  axios.post(url,data, {
                          headers: {
                            'Authorization': basicAuth
                          }
                        });
                       // console.log(res);
                        return res;
                      }


                      export const invoiceDetails=async(userDetails)=>{
        
                        const username = 'rsystems-N4VE35';
                        const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
                        const data = userDetails;
                       
                        
                        var basicAuth = 'Basic ' + btoa(username + ':' + password);
                        const url ='https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/TS810Details/';    
                        // console.log(res.status);
                           const res = await  axios.post(url,data, {
                            headers: {
                              'Authorization': basicAuth
                            }
                          });
                         // console.log(res);
                          return res;
                        }
                        export const adminDetails=async(userDetails)=>{
        
                          const username = 'rsystems-N4VE35';
                          const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
                          const data = userDetails;
                         
                          
                          var basicAuth = 'Basic ' + btoa(username + ':' + password);
                          const url ='https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/AdminUser/';
                          // console.log(res.status);
                             const res = await  axios.post(url,data, {
                              headers: {
                                'Authorization': basicAuth
                              }
                            });
                            return res;
                          }
                          export const poTracking=async(poNumberDetails)=>{
        
                            const username = 'rsystems-N4VE35';
                            const password = 'a4d2743a-bbe6-4114-8902-f0534eb62d4b';
                            const data = poNumberDetails;
                           
                            
                            var basicAuth = 'Basic ' + btoa(username + ':' + password);
                            const url ='https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/POTracking/';
                            // console.log(res.status);
                               const res = await  axios.post(url,data, {
                                headers: {
                                  'Authorization': basicAuth
                                }
                              });
                              return res;
                            }
                            export const searchAPI = async (searchDetails) => {
                              // console.log('api triggered')
                              console.log("searchDetails", JSON.stringify(searchDetails));
                              const username = "rsystems-N4VE35";
                              const password = "a4d2743a-bbe6-4114-8902-f0534eb62d4b";
                              const data = searchDetails;
                            
                              var basicAuth = "Basic " + btoa(username + ":" + password);
                              const url =
                                "https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/GeneralSerach1/";
                              const res = await axios.post(url, data, {
                                headers: {
                                  Authorization: basicAuth,
                                },
                              });
                              console.log("res data", res);
                              return res;
                            };
                            // searchAPI
                            
                            export const poaAPI = async (searchDetails) => {
                              // console.log('api triggered')
                              console.log("searchDetails", JSON.stringify(searchDetails));
                              const username = "rsystems-N4VE35";
                              const password = "a4d2743a-bbe6-4114-8902-f0534eb62d4b";
                              const data = searchDetails;
                            
                              var basicAuth = "Basic " + btoa(username + ":" + password);
                              const url =
                                "http://localhost:3001/Purchase_Order_Acknowledgement_855db";
                              // console.log(res.status);
                              const res = await axios.post(url, data, {
                                headers: {
                                  Authorization: basicAuth,
                                },
                              });
                              console.log("res data", res);
                              return res;
                            };
                            export const poa1API = async (searchDetails1) => {
                              // console.log('api triggered')
                              console.log("searchDetails1", JSON.stringify(searchDetails1));
                              const username = "rsystems-N4VE35";
                              const password = "a4d2743a-bbe6-4114-8902-f0534eb62d4b";
                              const data = searchDetails1;
                            
                              var basicAuth = "Basic " + btoa(username + ":" + password);
                              const url =
                                "https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/TS850Details/";
                              // console.log(res.status);
                              const res = await axios.post(url, data, {
                                headers: {
                                  Authorization: basicAuth,
                                },
                              });
                              console.log("res data1", res);
                              return res;
                            };
                            // searchAPI
                            export const pocAPI = async (searchDetails) => {
                              // console.log('api triggered')
                              console.log("searchDetails", JSON.stringify(searchDetails));
                              const username = "rsystems-N4VE35";
                              const password = "a4d2743a-bbe6-4114-8902-f0534eb62d4b";
                              const data = searchDetails;
                            
                              var basicAuth = "Basic " + btoa(username + ":" + password);
                              const url =
                                "https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/850_TransactionalSearch/";
                              // console.log(res.status);
                              const res = await axios.post(url, data, {
                                headers: {
                                  Authorization: basicAuth,
                                },
                              });
                              console.log("res data", res);
                              return res;
                            };
                            
                            export const poc1API = async (searchDetails1) => {
                              // console.log('api triggered')
                              console.log("searchDetails1", JSON.stringify(searchDetails1));
                              const username = "rsystems-N4VE35";
                              const password = "a4d2743a-bbe6-4114-8902-f0534eb62d4b";
                              const data = searchDetails1;
                            
                              var basicAuth = "Basic " + btoa(username + ":" + password);
                              const url =
                                "https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/TS850Details/";
                              // console.log(res.status);
                              const res = await axios.post(url, data, {
                                headers: {
                                  Authorization: basicAuth,
                                },
                              });
                              console.log("res data1", res);
                              return res;
                            };
                            export const pocaAPI = async (searchDetails) => {
                              // console.log('api triggered')
                              console.log("searchDetails", JSON.stringify(searchDetails));
                              const username = "rsystems-N4VE35";
                              const password = "a4d2743a-bbe6-4114-8902-f0534eb62d4b";
                              const data = searchDetails;
                            
                              var basicAuth = "Basic " + btoa(username + ":" + password);
                              const url =
                                "https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/850_TransactionalSearch/";
                              // console.log(res.status);
                              const res = await axios.post(url, data, {
                                headers: {
                                  Authorization: basicAuth,
                                },
                              });
                              console.log("res data", res);
                              return res;
                            };
                            export const poca1API = async (searchDetails1) => {
                              // console.log('api triggered')
                              console.log("searchDetails1", JSON.stringify(searchDetails1));
                              const username = "rsystems-N4VE35";
                              const password = "a4d2743a-bbe6-4114-8902-f0534eb62d4b";
                              const data = searchDetails1;
                            
                              var basicAuth = "Basic " + btoa(username + ":" + password);
                              const url =
                                "https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/TS850Details/";
                              // console.log(res.status);
                              const res = await axios.post(url, data, {
                                headers: {
                                  Authorization: basicAuth,
                                },
                              });
                              console.log("res data1", res);
                              return res;
                            };
                            export const osrAPI = async (searchDetails) => {
                              // console.log('api triggered')
                              console.log("searchDetails", JSON.stringify(searchDetails));
                              const username = "rsystems-N4VE35";
                              const password = "a4d2743a-bbe6-4114-8902-f0534eb62d4b";
                              const data = searchDetails;
                            
                              var basicAuth = "Basic " + btoa(username + ":" + password);
                              const url =
                                "https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/850_TransactionalSearch/";
                              // console.log(res.status);
                              const res = await axios.post(url, data, {
                                headers: {
                                  Authorization: basicAuth,
                                },
                              });
                              console.log("res data", res);
                              return res;
                            };
                            export const osr1API = async (searchDetails1) => {
                              // console.log('api triggered')
                              console.log("searchDetails1", JSON.stringify(searchDetails1));
                              const username = "rsystems-N4VE35";
                              const password = "a4d2743a-bbe6-4114-8902-f0534eb62d4b";
                              const data = searchDetails1;
                            
                              var basicAuth = "Basic " + btoa(username + ":" + password);
                              const url =
                                "https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/TS870Details/";
                              // console.log(res.status);
                              const res = await axios.post(url, data, {
                                headers: {
                                  Authorization: basicAuth,
                                },
                              });
                              console.log("res data1", res);
                              return res;
                            };
                            
                            export const Allemployees1 = async (Allemployees2) => {
                              // console.log('api triggered')
                              console.log("Allemployees2", JSON.stringify(Allemployees2));
                              const username = "rsystems-N4VE35";
                              const password = "a4d2743a-bbe6-4114-8902-f0534eb62d4b";
                              const data = Allemployees2;
                            
                              var basicAuth = "Basic " + btoa(username + ":" + password);
                              const url =
                                "https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/AdminUser/";
                              // console.log(res.status);
                              const res = await axios.post(url, data, {
                                headers: {
                                  Authorization: basicAuth,
                                },
                              });
                              console.log("res data", res);
                              return res;
                            };
                            
                            export const offboardAPI = async (Offboard1) => {
                              // console.log('api triggered')
                              console.log("Offboard1", JSON.stringify(Offboard1));
                              const username = "rsystems-N4VE35";
                              const password = "a4d2743a-bbe6-4114-8902-f0534eb62d4b";
                              const data = Offboard1;
                            
                              var basicAuth = "Basic " + btoa(username + ":" + password);
                              const url =
                                "https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/Offboard/";
                              // console.log(res.status);
                              const res = await axios.post(url, data, {
                                headers: {
                                  Authorization: basicAuth,
                                },
                              });
                              console.log("res data", res);
                              return res;
                            };
                            
                            export const ChartAPI = async (Chart1) => {
                               console.log('api triggered')
                              console.log("Chart1", JSON.stringify(Chart1));
                              const username = "rsystems-N4VE35";
                              const password = "a4d2743a-bbe6-4114-8902-f0534eb62d4b";
                              const data = {Chart1};
                             
                            
                            
                              var basicAuth = "Basic " + btoa(username + ":" + password);
                              const url ="https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/850Chart/";
                              
                              const res = await axios.get(url, data, {
                                method: 'GET',
                                mode:'no-cors',
                                headers: {
                                  "Access-Control-Request-Headers": "*",
                                  "Access-Control-Request-Method": "*",
                                  'X-Requested-With': 'XMLHttpRequest',
                                  'Authorization': basicAuth
                                  
                                  
                                },
                                
                              });
                              console.log("res data", res);
                              return res;
                            };  

                   