import { useLocation } from "react-router-dom";
import React from "react";
// import './Table.css';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchAPI } from "../ApiServices";
import ReactPaginate from "react-paginate";
import ClipLoader from "react-spinners/ClipLoader";




const Generalsearch = () => {
  const [data, setData] = useState([]);
  const [SenderName, setSenderName] = useState(null);
  const [ReceiverName, setReceiverName] = useState(null);
  const [SenderId, setSenderId] = useState(null);
  const [ReceiverId, setReceiverId] = useState(null);
  const [typeSelect, settypeSelect] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const gobackToPage = () => {
    navigate(-1);
  };


  const searchDetail = async () => {
    console.log("hello search pressed");
    setLoading(true)
    const res = await searchAPI({
      SenderName: null,
      ReceiverName: null,
      SenderId: null,
      ReceiverId: null,
      DocumentType: null,
      DocumentDirection: null,
      FromDate: "2022-04-01",
      ToDate: "2022-07-01",
      Page_Number: currentPage,
      Page_Size: "20",
    });
    console.log(res.data.TotalPages)
     setLoading(false)
    setTotalPage(parseInt(res.data.TotalPages))
    setData(res.data.Response || []);
  };


  const handlePageClick = async (event) => {
    console.log(event, 'evnt')
    setLoading(true)
    setCurrentPage(parseInt(event.selected))
    const res = await searchAPI({
      SenderName: null,
      ReceiverName: null,
      SenderId: null,
      ReceiverId: null,
      DocumentType: null,
      DocumentDirection: null,
      FromDate: "2022-04-01",
      ToDate: "2022-07-01",
      Page_Number: event.selected + 1,
      Page_Size: "20",
    });
    console.log(res.data.TotalPages)
    setLoading(false)
    setTotalPage(parseInt(res.data.TotalPages))
    setData(res.data.Response || []);
  };
  // console.log({data})

  return (
    <div>
      {loading && (
      <div className="sweet-loading">
       
       <ClipLoader

         size={150}
         color={"#123abc"}
         loading={loading}
         speedMultiplier={1.5}
       />
     </div>)}

<div class="container">


      <div className="genral_search">
        <h2 className="mt2">General search</h2>
        <div className="search_Section">
          <div className="search_box">
            <h5 className="font-weight-bold">Sender</h5>

            <div class="col-12 ">
              <label>Sender Name</label>
              <input
                type="text"
                className="form-control"
                value={SenderName}
                onChange={(e) => setSenderName(e.target.value)}
              />
              <label>Sender Id</label>
              <input
                type="text"
                className="form-control"
                value={SenderId}
                onChange={(e) => setSenderId(e.target.value)}
              />
            </div>
          </div>
          <div className="search_box">
            <h5 className="font-weight-bold">Receiver</h5>
            <div class="col-12 ">
              <label>Receiver Name</label>
              <input
                type="text"
                className="form-control"
                value={ReceiverName}
                onChange={(e) => setReceiverName(e.target.value)}
              />
              <label>Receiver Id</label>
              <input
                type="text"
                className="form-control"
                value={ReceiverId}
                onChange={(e) => setReceiverId(e.target.value)}
              />
            </div>
          </div>
          <div className="search_box">
            <h5 className="font-weight-bold">Date Details</h5>
            <div class="col-12 ">
              <label>Type</label>
              <select
                class="form-control"
                value={typeSelect}
                onChange={(e) => {
                  const typeSelect = e.target.value;
                  settypeSelect(typeSelect);
                }}
              >
                <option></option>
                <option value="PO_850">PO(850)</option>
                <option value="PO_Ack_855">PO Ack (855)</option>
                <option value="PO_Change_860">PO Change (860)</option>
                <option value="PO_Ack_Change_865">PO Ack Change (865)</option>
                <option value="Shipment">Shipment</option>
                <option value="Invoice">Invoice</option>
                <option value="Order Status Report">Order Status Report</option>
                <option value="Acknowledgement">Acknowledgement </option>
              </select>
              {typeSelect}
            </div>
          </div>

          {/* <div className="search_box">
                      <h5 className="font-weight-bold">Item Details</h5>
                      <div class="col-12 ">
  <label>Vendor Part Num</label>
  <input type="text" className="form-control" />
  <label>Buyer Part Num</label>
                        <input type="text" className="form-control" />
  </div>

                  </div> */}
        </div>
      </div>
      <div className="row daterange1">
        
        <div class=" col-md-6">
          <div className="dateBox">
            <h5 className="font-weight-bold">Date Range</h5>
            <div class="form-group">
              <div class="form-check-inline">
                <label class="customradio">
                  <span class="radiotextsty font-weight-bold">
                    Custom Date Range
                  </span>
                  <input type="radio" name="radio" />{" "}
                  <span class="checkmark"></span>{" "}
                </label>
                <label class="customradio">
                  <span class="radiotextsty font-weight-bold">
                    Transaction Dates Occurring
                  </span>
                  <input type="radio" name="radio" />{" "}
                  <span class="checkmark"></span>{" "}
                </label>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label>From</label>
                <input type="date" class="form-control" />{" "}
              </div>
              <div class="form-group col-md-6">
                <label>To</label>
                <input type="date" class="form-control" />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 dateBox2">
          <h5 className="font-weight-bold">Direction</h5>
          <div class="form-group">
            <div class="form-check-inline">
              <label class="customradio">
                <span class="radiotextsty font-weight-bold">Inbound</span>
                <input type="radio" name="radio" />{" "}
                <span class="checkmark"></span>{" "}
              </label>
              <label class="customradio">
                <span class="radiotextsty font-weight-bold">Outbound</span>
                <input type="radio" name="radio" />{" "}
                <span class="checkmark"></span>{" "}
              </label>
              <label class="customradio">
                <span class="radiotextsty font-weight-bold">All</span>
                <input type="radio" name="radio" />{" "}
                <span class="checkmark"></span>{" "}
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt2 pd20">
        <button type="submit" className="btnsearch"  data-toggle="collapse"
        data-target="#generalsearchcollapse" onClick={searchDetail}>
          Search
        </button>{" "}
        <button type="submit" className="btnsearch">
          Cancel
        </button>
      </div>

      <div class="card collapse" id="generalsearchcollapse">
        <div class="card-body">
          <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
            <div class="row">
              <div class="col-sm-12 col-md-6">
              
                  <h1 class="card-title ffont">Search Result</h1>
               
              </div>
              <div class="col-sm-12 col-md-6 text-right">
                <div className="btn_group">
                  <button className="btn btn-default" title="Reload">
                    <i className="fa fa-sync-alt" />
                  </button>
                  <button className="btn btn-default" title="Pdf">
                    <i className="fa fa-file-pdf" />
                  </button>
                  <button className="btn btn-default" title="Excel">
                    <i className="fas fa-file-excel" />
                  </button>
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
                        Sender Name
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Browser: activate to sort column ascending"
                      >
                        Receiver Name
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Platform(s): activate to sort column ascending"
                      >
                        PO #
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="Engine version: activate to sort column ascending"
                      >
                        Document Name
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Document #
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Document Type Code
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Document Date
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        ISA Date Time
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Ack Status
                      </th>
                      <th
                        class="sorting"
                        tabindex="0"
                        aria-controls="example2"
                        rowspan="1"
                        colspan="1"
                        aria-label="CSS grade: activate to sort column ascending"
                      >
                        Ack Date Time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="ffont" >
                    {data.map((item) => {
                      return (
                        <tr class="odd">
                          <td class="dtr-control sorting_1" tabindex="0">
                            {item.SenderName}
                          </td>
                          <td>{item.ReceiverName}</td>
                          <td>{item.PO_Number}</td>

                          <td>{item.DocumentName}</td>
                          {/* <td>{item.TsName}</td> */}
                          <td>{item.DocumentID}</td>

                          <td>{item.DocumentTypeCode}</td>
                          <td>{item.DocumentDate}</td>
                          <td>{item.InterchangeDateTime}</td>
                          <td>{item.AckStatus_997_ST}</td>
                          <td>{item.AckDateTime}</td>

                          {/* <td>{item.Direction}</td>
                      <td>{item.GS06_GroupControlNumber}</td>
                      <td>{item.ISA13_ControlNumber}</td> */}
                          {/* <td>{item.EdiFileName}</td> */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-5">
                <div
                  class="dataTables_info"
                  id="example2_info"
                  role="status"
                  aria-live="polite"
                ></div>
              </div>
              <div class="col-sm-12 col-md-7">
                <div
                  class="dataTables_paginate paging_simple_numbers floatr"
                  id="example2_paginate"
                >
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPage}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    // breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"
                   
                  />
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
export default Generalsearch;
