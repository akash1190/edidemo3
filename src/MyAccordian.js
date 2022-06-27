import { useState } from "react";


const MyAccordian=({item})=>{
    const [show, setShow] = useState(false);
    
    return (
        <div className="accordian">
        <div className="main-heading">
            <p onClick={()=>setShow(!show)}>{show?"-":"+"}</p>
            <h3>{item.questions}</h3>
            
        </div>
        { show && <p className="answers">{item.answer } </p>}
        </div>
    )
};

export default MyAccordian;