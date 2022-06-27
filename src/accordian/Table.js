import React, { Component } from 'react'
import { Table_details } from './table-api';
import './Table.css';



const Table = () =>{
    const data=Table_details;
    return (
    <div>
       <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>Employee <b>Details</b></h2></div>
                    <div class="col-sm-4">
                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Arun</td>
                        <td>UI Development</td>
                        <td>123456789</td>
                        <td>
							<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons"></i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Satish</td>
                        <td>UI Development</td>
                        <td>8447701450</td>
                        <td>
							<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons"></i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"></i></a>
                        </td>
                    </tr>
                    <tr>
                        <td>Aaksah </td>
                        <td>UI Development</td>
                        <td>123456789</td>
                        <td>
							<a class="add" title="Add" data-toggle="tooltip"><i class="material-icons"></i></a>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"></i></a>
                        </td>
                    </tr>      
                </tbody>
            </table>
            <ul class="pagination pagination-sm"><li class="page-item"><a href="#" class="page-link">«</a></li><li class="page-item"><a href="#" class="page-link">1</a></li><li class="page-item"><a href="#" class="page-link">2</a></li><li class="page-item"><a href="#" class="page-link">3</a></li><li class="page-item"><a href="#" class="page-link">»</a></li></ul>
        </div>
    </div>      
       {/* <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                <table id='customers'>
            <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Date of Birth</th>
                <th>Country</th>
                <th>Phone No</th>
            </tr>
            </thead>
           
            {data.map((val,key)=>{
                return(
                    <tr key={key}>
                    <td>{val.id}</td>
                    <td>{val.first_name}</td>
                    <td>{val.date_of_birth}</td>
                    <td>{val.country}</td>
                    <td>{val.mobile_no}</td>
                </tr>
                )
            })}
           
        </table>
                </div>
            </div>
        </div> */}
       
    </div>);
}

export default Table;


