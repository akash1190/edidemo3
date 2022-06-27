import { userDetails,userPosts } from "../accordian/table-api";
import NestedData from "./NestedData";
import './Nested.css';
import ReactNestTable from "./ReactNestTable";
import axios from "axios";
import { useEffect, useState } from "react";

const NestedTable=()=>{
    const data=userDetails;
    //const [userDetails, setUserDetails] = useState(null);
    const [userDetail, setUserDetail] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=()=>{
        setLoading(true);
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
           // setUserPosts(response);
           console.log("response "+response.data);
           setUserDetail(response.data);
           setLoading(false);
          }).catch(error=>{
            setError(error);
            setLoading(false);
          });
    }
    if (error) return `Error: ${error.message}`;
    if(loading)
        return(<div>...Data Loading.....</div>);
    return (
        
    <div className="nestedMain">
    
    <div className='container'>
        <div className="main_table">
        <div className='row'>
        <div className='col-md-12'>
        <div className="nestedTable">
                <label>Id</label>
                <label>Name </label>
                <label>UserName</label>
                <label>Email</label>
                <label>Phone No</label>
        </div>
        </div>
        </div>
    {userDetail && userDetail.map((val,key)=>{
        return(
            <ReactNestTable nestData={val}/>
        )
    })}

        </div>
    </div>
</div>);
}

export default NestedTable;


