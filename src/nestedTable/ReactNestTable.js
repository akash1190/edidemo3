import axios from 'axios';
import { useEffect, useState } from 'react';
import './Nested.css';
import {userPosts } from "../accordian/table-api";
import NestedData from './NestedData';

const ReactNestTable=(props)=>{
    //const baseUrl="https://jsonplaceholder.typicode.com/posts";
    const [post, setPost] = useState(null);
    const [error, setError] = useState(null);
    useEffect(()=>{
       fetchData();
    },[])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
           // setUserPosts(response);
           console.log("response "+response.data);
          }).catch(error=>{
            setError(error);
          });
    }
    const userData=props.nestData;
    console.log(userData);
    const userPostsData = userPosts.filter((e) => e.userId ===userData.id);
    console.log(userPostsData);
    return(
        <div className="container">
            <div className="nestedTable1">
                <label>{userData.id}</label>
                <label>{userData.name}</label>
                <label>{userData.username}</label>
                <label>{userData.email}</label>
                <label>{userData.phone}</label>
            </div>
           
            <div className="nestedTable">
                <label>Id</label>
                <label>userID </label>
                <label>title</label>
                <label>body</label>
                
            </div>
            <div className="container">
            {userPostsData.map((val,key)=>{
                return(
                    <div className="nestedTable1">
                    <label>{val.id}</label>
                    <label>{val.userId}</label>
                    <label>{val.title}</label>
                    <label>{val.body}</label>
                    </div>
                
                )
            })}
            </div>
        </div>
    )
}
export default ReactNestTable;