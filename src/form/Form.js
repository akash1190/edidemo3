import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form(){
    const navigate=useNavigate();
    const [firstName,setFirstName]=useState("");
    
    const fNameChangeHandler=(event)=> {
        //console.log(event.target.value);
        setFirstName(event.target.value);
        
      }
    const goToReceiver=()=>{
         navigate('/details',{state:{userData:{name:firstName}}});
    }
    return(
    <form>
    <div className='form-group'>
        <input type="text" placeholder="First Name" onChange={fNameChangeHandler} value={firstName}></input>
    </div>
    {/* <div className='form-group'>
        <input type="text" placeholder="Last Name" onChange={lNameChangeHandler}></input>
    </div>
    <div className='form-group'>
        <input type="text" placeholder="Email" onChange={emailChangeHandler}></input>
    </div>
    <div className='form-group'>
        <input type="text" placeholder="Phone Number" onChange={phoneNumberChangeHandler}></input>
    </div>
    <div className='form-group'>
        <input type="text" placeholder="Address" onChange={addressChangeHandler}></input>
    </div> */}
    <div className='form-group'>
        <button className="btn-danger" onClick={goToReceiver}>Submit</button>
    </div>
</form>
);
}
export default Form;