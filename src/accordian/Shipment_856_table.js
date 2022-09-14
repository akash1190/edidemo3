
const Shipment_856_table=(props)=>{
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
                <td>Actions</td>
                <td>{val.SenderName}</td>
                <td>{val.ReceiverName}</td>
                <td>{val.PurchaseOrderNumber}</td>
                <td>{val.ShipmentId} </td>
                <td>{val.ASNType}</td>
                <td>{val["Interchange Date Time"]}</td>
                <td>{val.ShipTo}</td>
                </tr>
            )
        })}
    </table>
</div>
    );
}
export default Shipment_856_table;