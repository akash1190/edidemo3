import { useLocation } from "react-router-dom";
import './Offboard.css';
const Offboard = () => {
  return (
<>
<div className="insiderLoader">
<div className="outer_loader"></div>
<div className="loader"></div>
</div>
<div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div className="col-sm-6"><h2>Active  <b>User List</b></h2></div>
                    <div class="col-sm-3 dis">
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
            </div>
            <table class="table">
                <thead>
                    <tr>
                       <th>Actions</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                        <th>Phone Number</th>
                        <th>Role </th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        <button type="submit" className="btnsearch2">offbaord</button>
                        </td>
                        <td>Arun</td>
                        <td>kumar</td>
                        <td>email@email.com</td>
                        <td>8447701450</td>
                        <td>Admin</td>
                        <td>Active</td>
                        
                    </tr>
                    <tr><td>
                        <button type="submit" className="btnsearch2">offbaord</button>
                        </td>
                        <td>Arun</td>
                        <td>kumar</td>
                        <td>email@email.com</td>
                        <td>8447701450</td>
                        <td>Admin</td>
                        <td>Active</td>
                        
                    </tr>
                    <tr><td>
                        <button type="submit" className="btnsearch2">offbaord</button>
                        </td>
                        <td>Arun</td>
                        <td>kumar</td>
                        <td>email@email.com</td>
                        <td>8447701450</td>
                        <td>Admin</td>
                        <td>Active</td>
                        
                    </tr>      
                </tbody>
            </table>
            <ul class="pagination pagination-sm"><li class="page-item"><a href="#" class="page-link">«</a></li><li class="page-item"><a href="#" class="page-link">1</a></li><li class="page-item"><a href="#" class="page-link">2</a></li><li class="page-item"><a href="#" class="page-link">3</a></li><li class="page-item"><a href="#" class="page-link">»</a></li></ul>
        </div>
       
</>
  )
}
export default Offboard;