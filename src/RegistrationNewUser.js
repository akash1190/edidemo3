import { useNavigate } from "react-router-dom";

const RegistrationNewUser = () =>{
    const navigate=useNavigate();
    const goToReceiver=()=>{
        navigate('/generalsearch');
    }
    return(
        <div>
            <div className="successMessage">
                <div className="container">
                    <h3>Registration for new User has been successfully Activated.</h3>
                    <a href="" className="btn backBtn" onClick={goToReceiver}>Back</a>
                </div>
            </div>
         </div> 
    )
  
}

export default RegistrationNewUser;