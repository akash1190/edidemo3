
const Acknowledgement_997_table=(props)=>{
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
            <th>Ship To</th>
            <th>Ship To</th>
            <th>Ship To</th>
            <th>Ship To</th>
        </tr>
        {props.data.map((val,key)=>{
            return(
                <tr key={key}>
                <td>Actions</td>
                <td>{val.SenderName}</td>
                <td>{val.ReceiverName}</td>
                <td>{val.AckInterchange_DateTime}</td>
                <td>{val.PO_Number} </td>
                <td>{val.DocName}</td>
                <td>{val.DocID}</td>
                <td>{val.DocDate}</td>
                <td>{val.AckDirection}</td>
                <td>{val.Total_TS_Included}</td>
                <td>{val.Total_TS_Received}</td>
                <td>{val.Total_TS_Accepted}</td>
                </tr>
            )
        })}
    </table>
</div>
    );
}
export default Acknowledgement_997_table;