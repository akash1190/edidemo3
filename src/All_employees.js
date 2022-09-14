import { useLocation } from "react-router-dom";
import React from 'react'
import { useEffect} from 'react'
import { useState} from 'react'
import swal from 'sweetalert2';
import axios from 'axios'
 import { Allemployees1 } from "./ApiServices";
// import './Admin.css';
const All_employees = () => {
    const [data, setData] = useState([])
    const [searchApiData, setSearchApiData] = useState([]);
    const [filterVal, setFilterVal] = useState('');
    useEffect(()=>{
      Allemployees2();
  },[]);
  const Allemployees2=async()=>{
      console.log('hello search pressed')
       
      const res = await Allemployees1({
       
    });
  
    setData(res.data.User_List|| [])
    setSearchApiData(res.data.User_List)
   }
  
   
  console.log({data}) 

  const handleFilter=(e)=> {
  
  if(e.target.value ==''){
  setData(data)
  
  } else {
  const filterResult = data.filter(item => item.First_Name.toLowerCase().includes(e.target.value.toLowerCase()) || item.Last_Name.toLowerCase().includes(e.target.value.toLowerCase())  ||  item.Email_Id.toLowerCase().includes(e.target.value.toLowerCase()) ||  item.Phone_Number.toLowerCase().includes(e.target.value.toLowerCase())  ||  item.Status.toLowerCase().includes(e.target.value.toLowerCase()))
  if (filterResult.length > 0){
    setData(filterResult)
  }
  else{
    
    swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No User Found!',
      
    })
  }
 
  }
  setFilterVal(e.target.value)
}
  return (
    <>
      <div className="insiderLoader">
        <div className="outer_loader"></div>
        <div className="loader"></div>
      </div>
 

      <div class="table-wrapper">
      

      <div class="card">
      <div class="card-body">
        <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
          <div class="row">
          <div className="col-sm-6">
            <h5>
             All <b>User List</b>
            </h5>
          </div>
          <div class="col-sm-3 dis">
            <div class="col-sm-2 dis2">
              {" "}
              <h3>Export as:</h3>
            </div>

            <div class="col-sm-2">
              <div className="download-link">
                <a
                  className="export-csv"
                  title="Export.csv"
                  href="#"
                  download=""
                >
                  Export .csv
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div className="sb-example-1">
              <div className="search">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="Search"
                  value={filterVal} onInput={(e)=>handleFilter(e)}
                />
                <button type="submit" className="searchButton">
                  <i className="fa fa-search" />
                </button>
              </div>
            </div>
          </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <table
                id="example2"
                class="table table-bordered table-hover dataTable dtr-inline"
                role="grid"
                aria-describedby="example2_info"
              >
                <thead className="colr">
                  <tr role="row">
                  <th
                      class="sorting sorting_asc"
                      tabindex="0"
                      aria-controls="example2"
                      rowspan="1"
                      colspan="1"
                      aria-sort="ascending"
                      aria-label="Rendering engine: activate to sort column descending"
                    >
                  First Name
                    </th>
                    <th
                      class="sorting sorting_asc"
                      tabindex="0"
                      aria-controls="example2"
                      rowspan="1"
                      colspan="1"
                      aria-sort="ascending"
                      aria-label="Rendering engine: activate to sort column descending"
                    >
                       Last Name
                    </th>
                    <th
                      class="sorting sorting_asc"
                      tabindex="0"
                      aria-controls="example2"
                      rowspan="1"
                      colspan="1"
                      aria-sort="ascending"
                      aria-label="Rendering engine: activate to sort column descending"
                    >
                      Email ID
                    </th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="example2"
                      rowspan="1"
                      colspan="1"
                      aria-label="Browser: activate to sort column ascending"
                    >
                   Phone Number
                    </th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="example2"
                      rowspan="1"
                      colspan="1"
                      aria-label="Platform(s): activate to sort column ascending"
                    >
                  Role
                    </th>
                    <th
                      class="sorting"
                      tabindex="0"
                      aria-controls="example2"
                      rowspan="1"
                      colspan="1"
                      aria-label="Engine version: activate to sort column ascending"
                    >
                    Status
                    </th>
         
                  </tr>
                </thead>
                <tbody className="ffont" >
                {data.map((item) => {
              return (
                
                             <tr class="odd">
                          <td class="dtr-control sorting_1" tabindex="0">
                          {item.First_Name}
                          </td>
                   
                    <td>{item.Last_Name}</td>
                    <td>{item.Email_Id}</td>
                    <td>{item.Phone_Number}</td>
                    <td>{item.Flag}</td>
                    <td>{item.Status}</td>
                  </tr>
               
              );
            })}
                </tbody>
              </table>
            </div>
          </div>
        
        </div>
      </div>
    </div>



      <ul class="pagination pagination-sm">
        <li class="page-item">
          <a href="#" class="page-link">
            «
          </a>
        </li>
        <li class="page-item">
          <a href="#" class="page-link">
            1
          </a>
        </li>
        <li class="page-item">
          <a href="#" class="page-link">
            2
          </a>
        </li>
        <li class="page-item">
          <a href="#" class="page-link">
            3
          </a>
        </li>
        <li class="page-item">
          <a href="#" class="page-link">
            »
          </a>
        </li>
      </ul>
    </div>
    </>
  );
}
export default All_employees;