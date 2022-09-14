import { useNavigate } from "react-router-dom";

const AdminTable=(props)=>{
    const tableRow = props.data;
    const navigate=useNavigate();
    const changeRole=(emailId,Supervisor_Email_Id)=>{
        navigate('/changeRole',{state:{Email_Id:emailId,Supervisor_Email_Id:Supervisor_Email_Id}});
    };
    return (<div>
<table class="table">
                <thead>
                    <tr>
                       <th>Actions</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                        <th>Phone Number</th>
                        <th>Role </th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {props.data.map((val,key)=>{
            return(
                <tr key={key}>
                <td><button className="btnsearch2" onClick={()=>changeRole(val.Email_Id,val.Supervisor_Email_Id)}>Change Role</button></td>
                <td>{val.First_Name}</td>
                <td>{val.Last_Name}</td>
                <td>{val.Email_Id}</td>
                <td>{val.Phone_Number} </td>
                <td>{val.Flag}</td>
                <td>{val.Status}</td>
                
                </tr>
            )
        })}
                   
                </tbody>
            </table>
            
    </div>);
};

export default AdminTable;