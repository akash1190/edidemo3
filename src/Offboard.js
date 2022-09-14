import { useLocation } from "react-router-dom";
import "./accordian/accordian.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert2';
import { offboardAPI } from "./ApiServices";
// import { Allemployees1 } from "./ApiServices";

const Offboard = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [searchApiData, setSearchApiData] = useState([]);
  const [filterVal, setFilterVal] = useState('');
  
  useEffect(() => {
    changeBoard();
   
    Offboard1();
  }, []);



  const changeBoard = async (element, currentBoard) => {

    const res = await offboardAPI({
      Supervisor_Email: element.Supervisor_Email_Id,
      Status: null,
      Action: currentBoard,
      Email_Id: element.Email_Id,
      FirstName: element.First_Name,
      LastName: element.Last_Name,
    });
    console.log("lets offboard", res);

    setData1(res.data.User_Offboard || []);
    if (data1 !== null) {
      swal.fire({
        title: 'Your work has been saved',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(function(){
        window.location.reload();
      })
                   

  }
  
  };
 

  console.log({ data });
 

  const Offboard1 = async () => {
    console.log("hello search pressed");

    const res = await offboardAPI({
      Supervisor_Email: "saiprakash.ganji@rsystems.com",
      Status: null,
      Action: null,
      Email_Id: null,
    });

    setData(res.data.User_Offboard || []);
  };

  console.log({ data });

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
        confirmButtonText: 'OK'
      }).then(function(){
        window.location.reload();
      })
    }
   
    }
    setFilterVal(e.target.value)
  }


  return (
    <div className="">
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
            <ul className="nav nav-pills ml-auto">
<li className="nav-item">
  <a className="nav-link active" href="#act" data-toggle="tab">Active <b>User List</b></a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#inact" data-toggle="tab">Inactive <b>User List</b></a>
</li>
</ul>
              
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
            <div className="tab-content">
            <div class="row tab-pane active" id="act">
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
                      Actions
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
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Browser: activate to sort column ascending"
                      >
                      Email ID
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Platform(s): activate to sort column ascending"
                      >
                      Phone Number
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Engine version: activate to sort column ascending"
                      >
                       Role
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Status
                      </th>
           
                    </tr>
                  </thead>
                  <tbody className="ffont" >
                  {data.map((item) => {
            if(item.Status != 'Offboard'){
            return (
                        <tr class="odd">
                          <td class="dtr-control sorting_1" tabindex="0">
                          <button
                      type="submit"
                      className="btnsearch2"
                      onClick={() => changeBoard(item, "Offboard")}
                    >
                      OFFBOARD
                    </button>
                          </td>
          
                          <td>{item.First_Name}</td>
                  <td>{item.Last_Name}</td>
                  <td>{item.Email_Id}</td>
                  <td>{item.Phone_Number}</td>
                  <td>{item.Flag}</td>
                  <td>{item.Status}</td>
                 </tr>
                      );
}})}
                  </tbody>
                </table>
              </div>
            </div>
          



            <div class="row tab-pane" id="inact">
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
                      Actions
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
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Browser: activate to sort column ascending"
                      >
                      Email ID
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Platform(s): activate to sort column ascending"
                      >
                      Phone Number
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Engine version: activate to sort column ascending"
                      >
                       Role
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Status
                      </th>
           
                    </tr>
                  </thead>
                  <tbody className="ffont" >
                  {data.map((item) => {
            if(item.Status == 'Offboard'){
            return (
                        <tr class="odd">
                          <td class="dtr-control sorting_1" tabindex="0">
                          <button
                      type="submit"
                      className="btnsearch2"
                      onClick={() => changeBoard(item, "Re-onboard")}
                    >
                      RE-ONBOARD
                    </button>
                          </td>
          
                          <td>{item.First_Name}</td>
                  <td>{item.Last_Name}</td>
                  <td>{item.Email_Id}</td>
                  <td>{item.Phone_Number}</td>
                  <td>{item.Flag}</td>
                  <td>{item.Status}</td>
                 </tr>
                      );
}})}
                  </tbody>
                </table>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

        </div>
       


    </div>
  );
};
export default Offboard;
