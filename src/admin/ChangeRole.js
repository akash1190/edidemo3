import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { adminDetails } from "../ApiServices";

const ChangeRole = () =>{
    const [userDetail, setUserDetail] = useState({});
    const [role, setRole] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
  const requestBody=
    {"Action":"M",
    "Supervisor_Email":location.state.Supervisor_Email_Id,
    "Email_Id":location.state.Email_Id};
    console.log(requestBody);
    const [roleData,setRoleData]=useState( 
    {"Supervisor_Email":location.state.Supervisor_Email_Id,
    "Status":null,
    "Action":"AssignRole",
    "Email_Id":location.state.Email_Id,
    "Assign role":"",
    "FirstName":"",
    "LastName":"",
    "LastRole":""
    });
    
    
    useEffect(()=>{
      fetchData();
  },[]);
  const fetchData=async()=>{
      const res = await adminDetails(requestBody);
      if(res.data.Status==='Success'){
        const details = res.data.User_List[0];
       // console.log(details);
        setUserDetail(details);
      }
  }
  const back=()=>{
       navigate(-1);
  }
  const submit=async()=>{
    if(roleData["Assign role"]==""){
        alert("Please select assign role before submit");
        return;
    }
    setRoleData({
        ...roleData,
        "FirstName": userDetail.First_Name,
        "LastName": userDetail.Last_Name,
        "LastRole": userDetail.Flag
      });
      const response = await adminDetails(roleData);
      if(response.data.Status==='Success'){
            back();
      }
  }
  const handleChange=(evt)=> {
    const value = evt.target.value;
    setRole(value);
    setRoleData({
      ...roleData,
      [evt.target.name]: value
    });
  }
    
    return(
        <div>
            <div className="changeRole">
                <div className="container">
                     <div className="roleSection">
                        <h3>Are you sure you want to change role to the below User ? If Yes, please select the role below</h3>
                        <ul>
                            <li><strong>First Name</strong>: {userDetail.First_Name}</li>
                            <li><strong>Last Name</strong>: {userDetail.Last_Name}</li>
                            <li><strong>Email Id</strong>: {userDetail.Email_Id}</li>
                            <li><strong>Current Role</strong>: {userDetail.Flag}</li>
                        </ul>
                        <div className="form-group">
                        <label for="roles"><strong>Please select a role </strong><span>*</span></label>

                            <select className="form-control" 
                              value={role} 
                              onChange={handleChange}
                            name="Assign role" id="main_role">
                                <option value=""></option>
                                <option value="Employee">Employee</option>
                                <option value="Supervisor">Supervisor</option>
                            </select>
                        </div>
                        
                     </div>
                     <div className="btnSubmit">
                            <ul>
                                <li><a href="javascript:void(0)" className="btn submit_btn" onClick={()=>submit()}>Submit </a></li>
                                <li><a href="javascript:void(0)" className="btn back_btn" onClick={()=>back()}>Back</a></li>
                            </ul>
                        </div>
                </div>
            </div>
         </div> 
    )
  
}

export default ChangeRole;