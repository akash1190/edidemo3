import { useLocation } from "react-router-dom";
import React from 'react'
import './Trackpo.css'

const Trackpo = () => {
  return (
    <div className="container">

<div className="row detail-block">
    <div className="big-block">
      <div>
        <p className="bill-head"><strong>Company Name:</strong> Texas Instruments</p>
      </div>
      <div className="detail-contact">
      <div className="text-95 col-sm-8 align-self-start d-sm-flex ">
            <hr className="d-sm-none" />
            <h1><strong>850 - PURCHASE ORDER</strong></h1>
          </div>

          <div className="text-95 col-sm-4 align-self-start d-sm-flex ">
            <hr className="d-sm-none" />
            <form action="/action_page.php">
    <input type="text" placeholder="Search.." name="search" />
    <button type="submit" className="btnsearch">Submit</button>
  </form>
          </div>
    

        
      </div>
    </div>
  </div>
  <div className="row detail-block">
    <div className="big-block">
      <div>
        <p className="bill-head"><strong>Company Name:</strong> Texas Instruments</p>
      </div>
      <div className="detail-contact">
      <div className="text-95 col-sm-4 align-self-start d-sm-flex ">
            <hr className="d-sm-none" />
            <div className="text-grey-m2">
              <div className="mt-1 mb-2 text-secondary-m1 text-blue text-600 text-125">
              General Information
              </div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Purchase Order</span> <span className="tabinvoice">:1028122021</span></div>
              
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Shipment ID</span><span className="tabinvoice"> :856658350</span></div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Invoice ID</span><span className="tabinvoice"> :8566583560</span></div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">PO Type</span> <span className="tabinvoice">:Original</span></div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Total Amount</span><span className="tabinvoice">:$379.64</span></div>
              
            </div>
          </div>

          <div className="text-95 col-sm-4 align-self-start d-sm-flex ">
            <hr className="d-sm-none" />
            <div className="text-grey-m2">
              <div className="mt-1 mb-2 text-secondary-m1 text-blue text-600 text-125">
              Date References
              </div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Purchase Order Date</span> <span className="tabinvoice"> :21-Jan-2020</span></div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Requested Shipping Date</span> <span className="tabinvoice"> :21-Jan-2020</span></div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Requested Delivery Date</span> <span className="tabinvoice"> :21-Jan-2020</span></div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Purchase Order Change Date</span> <span className="tabinvoice"> :21-Jan-2020</span></div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Actual Shipment Date</span> <span className="tabinvoice"> :21-Jan-2020</span></div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Estimated Delivery Date</span> <span className="tabinvoice"> :21-Jan-2020</span></div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Actual Delivery Date</span> <span className="tabinvoice"> :21-Jan-2020</span></div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Invoice Date</span> <span className="tabinvoice"> :21-Jan-2020</span></div>
            </div>
          </div>
          <div className="text-95 col-sm-4 align-self-start d-sm-flex">
            <hr className="d-sm-none" />
            <div className="text-grey-m2">
              <div className="mt-1 mb-2 text-secondary-m1 text-blue  text-600 text-125">
              Quantity References
              </div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Ordered:</span> <span className="badge badge-warning badge-pill px-25 ">9</span></div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Shipped:</span> <span className="badge badge-warning badge-pill px-25 ">9</span></div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Invoiced:</span> <span className="badge badge-warning badge-pill px-25 ">9</span></div>
              <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1" /> <span className="text-600 text-90">Pending:</span> <span className="badge badge-warning badge-pill px-25 ">0</span></div>
            </div>
          </div>

        
      </div>
    </div>
  </div>
  <div className="row">
    <div className="big-block">
      <div className="po-row-1">
        <div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
          <div className="first"><img src="images/850-g.svg" alt /></div>
        </div>
        <div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
          <div className="second"><img src="images/997-g.svg" alt /></div>
        </div>
        <div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
          <div className="second"><img src="images/850-g.svg" alt /></div>
        </div>
        <div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
          <div className="second"><img src="images/997-g.svg" alt /></div>
        </div>
        <div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
          <div className="first"><img src="images/850-g.svg" alt /></div>
        </div>
        <div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
          <div className="second"><img src="images/997-g.svg" alt /></div>
        </div>
        <div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
          <div className="second"><img src="images/850-g.svg" alt /></div>
        </div>
        <div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
          <div className="second"><img src="images/997-g.svg" alt /></div>
        </div>
        <div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
          <div><img src="images/850-g.svg" alt /></div>
        </div>
      </div>
      <div className="po-row-2">
        <div>
          <div className="second"><img src="images/850-g.svg" alt /></div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
        </div>
        <div>
          <div className="third"><img src="images/997-g.svg" alt /></div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
        </div>
        <div>
          <div className="desc-text" />
          <div className="triple-icons" />
          <div />
        </div>
        <div>
          <div className="desc-text" />
          <div className="triple-icons" />
          <div />
        </div>
        <div>
          <div className="second"><img src="images/850-g.svg" alt /></div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
        </div>
        <div>
          <div className="second"><img src="images/997-g.svg" alt /></div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
        </div>
        <div>
          <div className="second"><img src="images/850-g.svg" alt /></div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
        </div>
        <div>
          <div><img src="images/997-g.svg" alt /></div>
          <div className="desc-text"><strong>PO Date</strong><br />
            21-Jan-2020</div>
          <div className="triple-icons"><img src="dist/img/view-icon.svg" alt /><img src="dist/img/download-icon.svg" alt /> <a href="850-po.html"><img src="dist/img/details-icon.svg" alt /></a></div>
        </div>
        <div>
          <div className="desc-text" />
          <div className="triple-icons" />
          <div />
        </div>
      </div>
    </div>
  </div>
  <div className="row">
 
    <div className="big-block">
    <div>
        <h3>Address References</h3>
      </div>
    <div className="row">
          <div className="col-sm-4">
            <div>
            
              <span className="text-600 text-110 text-blue align-middle">Ship To</span>
            </div>
            <div className="text-grey-m2">
              <div className="my-1">
                Street, City
              </div>
              <div className="my-1">
                State, Country
              </div>
              <div className="my-1"><i className="fa fa-phone fa-flip-horizontal text-secondary" /> <b className="text-600">111-111-111</b></div>
            </div>
          </div>
          <div className="col-sm-4">
            <div>
        
              <span className="text-600 text-110 text-blue align-middle">Bill To</span>
            </div>
            <div className="text-grey-m2">
              <div className="my-1">
                Street, City
              </div>
              <div className="my-1">
                State, Country
              </div>
              <div className="my-1"><i className="fa fa-phone fa-flip-horizontal text-secondary" /> <b className="text-600">111-111-111</b></div>
            </div>
          </div>
          <div className="col-sm-4">
            <div>
            
              <span className="text-600 text-110 text-blue align-middle">Ship From</span>
            </div>
            <div className="text-grey-m2">
              <div className="my-1">
                Street, City
              </div>
              <div className="my-1">
                State, Country
              </div>
              <div className="my-1"><i className="fa fa-phone fa-flip-horizontal text-secondary" /> <b className="text-600">111-111-111</b></div>
            </div>
          </div>
          
        </div>
    </div>
  </div>
  <div className="row">
    <div className="search-results item-details">
      <div>
        <h3>Item Details</h3>
      </div>
      <table cellSpacing={0}>
        <tbody>
          <tr>
            <th>Line ID</th>
            <th>Vendor Part Number</th>
            <th>Buyer Part Number</th>
            <th>Product Description</th>
            <th>Ordered Quantity</th>
            <th>Shipped Quantity</th>
            <th>Invoiced Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
          </tr>
          <tr>
            <td>1</td>
            <td>CIE-035-4694-001</td>
            <td>CSD95492QVMT</td>
            <td>IC, PWR STAGE, SYNC BUCK, 4X5M</td>
            <td>1,000</td>
            <td>1,000</td>
            <td>1,000</td>
            <td>$1.381</td>
            <td>$1,381.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="row">
    <div className="general-button">
      <button>Back</button>
    </div>
  </div>
</div>


    
  )
}

export default Trackpo
