import { useNavigate } from "react-router-dom";

const Invoice_810_table=(props)=>{
    const navigate = useNavigate();
    return(
<div>
    <table>
        <tr>
            <th>Actions</th>
            <th>Sender Name</th>
            <th>Reciever Name</th>
            <th>PO#</th>
            <th>Invoice No </th>
            <th>Invoice Date</th>
            <th>ISA Date Time</th>
            <th>Ship To</th>
        </tr>
        {props.data.map((val,key)=>{
            return(
                <tr key={key}>
                <td>
                    <ul className="views_details">
                        <li><a href="javascript:void(0)" className="btn" 
                        onClick={() => navigate('/invoiceDetail',{state:{po:val.PO_Number}})}>
                            <i class="fa fa-eye" aria-hidden="true"></i></a></li>
                        <li><a href="javascript:void(0)" className="btn"><i class="fa fa-download" aria-hidden="true"></i></a></li>
                    </ul>
                   
                    
                </td>
                <td>{val.SenderName}</td>
                <td>{val.ReceiverName}</td>
                <td>{val.PO_Number}</td>
                <td>{val.InvoiceNumber} </td>
                <td>{val.InvoiceDate}</td>
                <td>{val.Interchange_DateTime}</td>
                <td>{val.ShipTo}</td>
                </tr>
            )
        })}
    </table>
</div>
    );
}
export default Invoice_810_table;