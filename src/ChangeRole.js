import { useNavigate } from "react-router-dom";

const ChangeRole = () =>{
    const navigate=useNavigate();
    const goToReceiver=()=>{
       // navigate('/generalsearch');
    }
    return(
        <div>
            <div className="changeRole">
                <div className="container">
                     <div className="roleSection">
                        <h3>Are you sure you want to change role to the below User ? If Yes, please select the role below</h3>
                        <ul>
                            <li><strong>First Name</strong>: Robert</li>
                            <li><strong>Last Name</strong>: Husted</li>
                            <li><strong>Email Id</strong>: robert.husted@boomi.com</li>
                            <li><strong>Current Role</strong>: Admin</li>
                        </ul>
                        <div className="form-group">
                        <label for="roles"><strong>Please select a role </strong><span>*</span></label>

                            <select className="form-control"name="role" id="main_role">
                            <option value=""></option>
                                <option value="Employee">Employee</option>
                                <option value="Supervisor">Supervisor</option>
                            </select>
                        </div>
                        
                     </div>
                     <div className="btnSubmit">
                            <ul>
                                <li><a href="javascript:void(0)" className="btn submit_btn">Submit </a></li>
                                <li><a href="javascript:void(0)" className="btn back_btn">Back</a></li>
                            </ul>
                        </div>
                </div>
            </div>
         </div> 
    )
  
}

export default ChangeRole;