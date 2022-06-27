import React, { Component, useState } from 'react'
import { questions } from './api';
import "./accordian.css";
import MyAccordian from '../MyAccordian';



const Accordian = () =>{
   const [data, setData] = useState(questions);
  //const data=questions;
  var namesList = data.map((item) =>{
    return <MyAccordian key={item.id} item={item}/>
  })
  
//   var namesList = data.map((item) =>{
//     <MyAccordian key={item.id} item={item}/>
//     });
  console.log(data);
    return (
                // data.map((item) =>{
                //     <MyAccordian key={item.id} item={item}/>
                // })
                <ul>
                 {namesList}
                 </ul>
      )
}

export default Accordian;


