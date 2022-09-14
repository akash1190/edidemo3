import { useEffect, useState } from "react";
import { acknowledgementdetail, approveAPI } from "../ApiServices";
import CustomTable from "./CustomTable";

const AcknowledgementDetail=()=>{
    const requestBody = {"fg.ISA13_ControlNumber":"108501997",
    "isa.ISA13_ControlNumber":"108501997",
    "fg.GS06_GroupControlNumber":"108501997",
    "fg_997.GS02_SendersCode":"SUPPLIER1",
    "fg_997.GS03_ReceiversCode":"INTL"
    };
    const tableHeader= ["PO#","Ack For","Document Id","Document Date"
                        ,"TS Status"," Segment Details(In Error)"
                        ,"Data Element Details(In Error)"];
    
    const [details, setDetails] = useState({});
    const [itemDetails, setitemDetails] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async()=>{
        const res = await acknowledgementdetail(requestBody);
        if(res.data.Status==='Success'){
            setDetails(res.data);
            const body=[];
            res.data.Response.forEach(function (arrayItem) {
                const rowData=[];
                rowData.push(arrayItem.PO_Number);
                rowData.push(arrayItem.DocName_detail);
                rowData.push(arrayItem.Doc_Id);
                rowData.push(arrayItem.Doc_Date);
                rowData.push(arrayItem.TS_Status);
                rowData.push("");
                rowData.push("");
                body.push(rowData);
            });
            setitemDetails(body);

            
            
        }
    }
    
    return (
        <div class="container">
            <div className="companyName">
                <div className="two_cloumn">
                    <h4><strong>Company Name:</strong> R Systems International Ltd</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <p><strong>Acknowledgement Details</strong></p>
                            <ul>
                                <li><strong>Name</strong><span>:Acknowledgement</span></li>
                                <li><strong>Interchange Date Time</strong><span>:{details.ISA_DateTime_997}</span></li>
                                <li><strong>Control #</strong><span>:{details.ISA_ControlNumber_997}</span></li>
                                <li><strong>Sender Name</strong><span>:{details.SenderName_997}</span></li>
                                <li><strong>Receiver Name</strong><span>:{details.ReceiverName_997}</span></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <p><strong>Document Details (Being Acknowledged)</strong></p>
                            <ul>
                                <li><strong>Ack. For</strong><span>:{details.DocName}</span></li>
                                <li><strong>Interchange Date Time</strong><span>:{details.ISA_DateTime_Doc}</span></li>
                                <li><strong>Group Control #</strong><span>:{details.ISA_ControlNumber_997}</span></li>
                                <li><strong>Ack Status</strong><span>:{details.FG_AcknowledgeCode_Doc}</span></li>
                                <li><strong>ACK#</strong><span>:{details.ISA_ControlNumber_997}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grpSummry">
                    <h3>Functional Group Summary</h3>
                <div className="row">
                    <div className="col-md-4">
                        <div class="form-group">
                            <label>Total TS</label>
                            <input type="text"class="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                        <label>Accepted TS</label>
                            <input type="text"class="form-control"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="form-group">
                        <label>Rejected TS</label>
                            <input type="text"class="form-control"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="data_tables">
            <CustomTable heading={tableHeader} data={itemDetails}/>
            </div>
            
        </div>
    );
}
export default AcknowledgementDetail;