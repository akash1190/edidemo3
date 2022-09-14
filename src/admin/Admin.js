import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { adminDetails } from "../ApiServices";
import './Admin.css';
import AdminTable from "./AdminTable";


const Admin = () => {
  const [userList, setUserList] = useState([]);
  const requestBody={
    "Supervisor_Email_Id":"surendhar.rangineni@rsystems.com",
    "Email_Id":"surendhar582@gmail.com"
    };
    useEffect(()=>{
      fetchData();
  },[]);
  const fetchData=async()=>{
      const res = await adminDetails(requestBody);
      if(res.data.Status==='Success'){
        setUserList(res.data.User_List);
       // console.log(res.data.User_List);
      }
  }
 
  return (
<>

<div className="insiderLoader">
<div className="outer_loader"></div>
<div className="loader"></div>
</div>
<div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div className="col-sm-6"><h2>Active <b>Users</b></h2></div>
                    <div class="col-sm-3 dis col-sm-33">
                    <div class="col-sm-2 dis2"> <h3>Export as:</h3></div>
           
                    <div class="col-sm-2">
           
     <div className="download-link">
     <a className="export-csv" title="Export.csv" href="#" download="">Export .csv</a></div>
</div>
        
                    </div>
                    <div class="col-sm-3">
                    <div className="sb-example-1">
  <div className="search">
    <input type="text" className="searchTerm" placeholder="Search" />
    <button type="submit" className="searchButton">
      <i className="fa fa-search" />
    </button>
  </div>
</div>

                    </div>
                </div>
            <AdminTable data={userList}/>
            <ul class="pagination pagination-sm"><li class="page-item"><a href="#" class="page-link">«</a></li><li class="page-item"><a href="#" class="page-link">1</a></li><li class="page-item"><a href="#" class="page-link">2</a></li><li class="page-item"><a href="#" class="page-link">3</a></li><li class="page-item"><a href="#" class="page-link">»</a></li></ul>
          
        </div>
        </div>
</>
  )
}
export default Admin;