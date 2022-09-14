const CustomTable=(props)=>{
    var heading = props.heading;
    var body =  props.data;
    return (<div>
        
            <table style={{ width: 1000 }}>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(row => <TableRow row={row} />)}
                </tbody>
            </table>
        
    </div>);
}
const TableRow=(props)=>{
    var row = props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
}
export default CustomTable;