
const TrackPoTable=(props)=>{
    console.log(props.data);
    return(
<div>

   <div class="trackTable table-title">
    <table className="table">
        <thead>
        <tr>
            <th width="5.5%">Line No</th>
            <th width="8%">UPC Code</th>
            <th width="8%">Vendor Part Number</th>
            <th width="6.5%">Buyer Part Number</th>
            <th width="20%">Product Description</th>
            <th width="6%">Order Qunatity</th>
            <th width="5%">Shipped Qunatity</th>
            <th width="5%">Invoiced Qunatity</th>
            <th width="7.8%">Unit Price</th>
            <th  width="8%">Total Price</th>
        </tr>
        </thead>

        {props.data.map((val,key)=>{
            return(
                <tr key={key}>
                <td>{val.RowNumber}</td>
                <td>{val.UPCCode}</td>
                <td>{val.VendorPartNumber}</td>
                <td>{val.BuyerPartNumber}</td>
                <td>{val.ProductDescription}</td>
                <td>{val.QuantityOrdered}</td>
                <td>{val.QuantityShipped}</td>
                <td>{val.QuantityInvoiced}</td>
                <td>{val.UnitPrice}</td>
                <td>{val.LineItemTotalPrice}</td>
            
                </tr>
            )
        })}
    </table>
    </div>
</div>
    );
}
export default TrackPoTable;