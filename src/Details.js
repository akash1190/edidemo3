import { useLocation } from "react-router-dom";
import Accordian from "./accordian/Accordian";
import Table from "./accordian/Table";
import NestedTable from "./nestedTable/NestedTable";



const Details=()=>{
    // const {state} = useLocation();
    // const {userData } = state; 
    // console.log(userData);
    // const userDetails = Object.entries(userData).map(([key,value])=>{
    //     return (
    //         <div>{key} : {value.toString()}</div>
    //     );
    //   })
    return (<div>
    
        <div className="container">
            <div className="row">
                {/* <div className="col-md-6">
                    <Accordian/>
                </div>              */}
                {/*<div className="col-md-3">
               <div className="dropdown">
                    <a id="dLabel" role="button" data-toggle="dropdown" className="btn btn-primary" data-target="#" href="/page.html">
                        Dropdown <span className="caret" />
                    </a>
                    <ul className="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                        <li><a href="#">Some action</a></li>
                        <li><a href="#">Some other action</a></li>
                        <li className="divider" />
                        <li className="dropdown-submenu">
                        <a tabIndex={-1} href="#">Hover me for more options</a>
                        <ul className="dropdown-menu">
                            <li><a tabIndex={-1} href="#">Second level</a></li>
                            <li className="dropdown-submenu">
                            <a href="#">Even More..</a>
                            <ul className="dropdown-menu">
                                <li><a href="#">3rd level</a></li>
                                <li><a href="#">3rd level</a></li>
                            </ul>
                            </li>
                            <li><a href="#">Second level</a></li>
                            <li><a href="#">Second level</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>

                </div> */}
             
                
        </div>
       </div>
       {/* {userDetails} */}
      
       <div>
                    <Table/>
                    <NestedTable/>
                </div>
    </div>)
}


export default Details;