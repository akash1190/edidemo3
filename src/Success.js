import { useNavigate } from "react-router-dom";

const Success = () =>{
    const navigate=useNavigate();
    const goToReceiver=()=>{
        navigate('/login');
    }
    return(
        <div>
            <div className="successMessage">
                <div className="container">
                    <h3>Your Registration form is submitted successfully to your supervisor for approval. Once the form is approved/rejected you will receive a notification.</h3>
                    <a href="" className="btn backBtn" onClick={goToReceiver}>Back</a>
                </div>
            </div>
         </div> 
    )
  
}

export default Success;