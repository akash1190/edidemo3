import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { approveAPI, approveRejectAPI, SupervisorAPI } from "./ApiServices";

const Supervisor=(props)=>{
    //console.log(props);
    
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    let semailID = query.get('semailID');
    let Email_Id =query.get('Email_Id');
    const [details, setDetails] = useState({});
    const [isDuplicate, setIsDuplicate] = useState(false)
        
        const navigate=useNavigate();
        const gobackToPage=()=>{
            navigate(-1);
       }
       useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const data={
            "Supervisor_Email_Id":semailID,
            "Email_Id":Email_Id
            }
        const res = await approveAPI(data);
        if(res.data.Status!=undefined && res.data.Status==='Duplicate'){
            console.log(res.data.Status);
            setIsDuplicate(true);
        }else{
            console.log(res.data);
            setIsDuplicate(false);
            setDetails(res.data);
        }
       

    }
       
      const approveEmployee=async()=>{
          const approveDetails = {
            "First_Name":details.FirstName,
            "Email_Id":details.Email_Id,
            "Request_Type":"Approve",
            "Role":"Employee"
          };
        const res = await approveRejectAPI(approveDetails);
        console.log(res.status);
        
      if(res.status==200){
       const response = res.data;
       console.log(res);
       if(response.Status==='Approve'){
            navigate('/success');
       }else{
           alert(response.Status)
       }
      }else{
          alert("fail")
      }
      
      //console.log(response.Status);
    
    }
    if(isDuplicate)
        return(<div><h4>Duplicate Data!</h4></div>)
    else
return (
        <div className="login_page">
        
           <div className="table-wrapper">
            <div className="row new_registration_Details">
               <h4>New User Registration Form!</h4>
               <div className="detailsUser"></div>
               <div className="form_section">
                    <div className="row ">
                   <div className="form-group col-md-6">
                       <label>First Name <span>*</span></label>
                       <input type="text"  value={details.FirstName && details.FirstName} className="form-control" disabled />
                   </div>
                   
                   <div className="form-group col-md-6">
                       <label>Last Name <span>*</span></label>
                       <input type="text" value={details.LastName && details.LastName} className="form-control" disabled />
                   </div>
                   <div className="form-group col-md-6">
                       <label>Phone Number <span>*</span></label>
                       <input type="text" value={details.PhoneNumber && details.PhoneNumber} className="form-control"  disabled/>
                   </div>
                   <div className="form-group col-md-6">
                       <label>Email Id <span>*</span></label>
                       <input type="text" value={details.Email_Id && details.Email_Id} className="form-control" disabled/>
                   </div>
               
                   <div className="form-group col-md-6">
                   <label>Assign Role  <span>*</span></label>
                   <select className="form-control" name="admins" id="admins">
                    <option value="Admin">Admin</option>
                    <option value="Supervisor">Supervisor</option>
                    <option value="Employee">Employee</option>
                    </select>
                    </div>
                    <div className="form-group col-md-6">
                       <label>Street  <span>*</span></label>
                       <input type="text" value={details.Street && details.Street} className="form-control" disabled/>
                   </div>
                   <div className="form-group col-md-6">
                       <label>City  <span>*</span></label>
                       <input type="text"value={details.City && details.City} className="form-control" disabled/>
                   </div>
                   <div className="form-group col-md-6">
                       <label>Zipcode <span>*</span></label>
                       <input type="number" value={details.Pin && details.Pin} className="form-control" disabled/>
                   </div>
                   <div className="form-group col-md-6">
                       <label>State  <span>*</span></label>
                       <input type="text" value={details.State && details.State} className="form-control" disabled/>
                   </div>
                   <div className="form-group col-md-6">
                       <label>Country <span>*</span></label>
                       <input type="text" value={details.Country && details.Country} className="form-control" disabled/>
                   </div>
               </div>
               <div className="officeAddress">
               <div className="row">
                   
                  

                   </div>
               
                       <div class="d-grid gap-2 d-md-block">
  <button class="btnfor" type="button" onClick={approveEmployee}>Approve</button>
  <button class="btnfor" type="button"  onClick={gobackToPage}>Reject</button>
</div>
           </div>
               </div>
              </div>
           </div>
           
        </div>
        )
}


export default Supervisor;