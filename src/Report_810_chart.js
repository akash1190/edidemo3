import React from 'react'
// import { useEffect} from 'react'
 import axios from 'axios'
 import { Base64 } from 'js-base64';

 import {useEffect, useState} from 'react';
 import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     PointElement,
     BarElement,
     LineElement,
     Title,
     Tooltip,
     Legend,
   } from 'chart.js';
 
 import { Bar } from 'react-chartjs-2';
 import { Line } from 'react-chartjs-2';
 ChartJS.register(
     CategoryScale,
     LinearScale,
     BarElement,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend
   );
  
  
 
 const options = {
     indexAxis: 'x',
     elements: {
       bar: {
         borderWidth: 0,
       },
     },
     responsive: true,
     maintainAspectRatio: false,
     plugins: {
       legend: {
         position: 'top',
       },
       title: {
         display: true,
         text: 'Bar Representation',
       },
     },
   };
   const options1 = {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Line Representation',
      },
    },
  };
 
 const Report_856_chart =() => {
     const [data, setData] = useState({
         labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
         datasets: [
           {
             label: 'Dataset 1',
             data:[],
             borderColor: 'rgb(255, 99, 132)',
             backgroundColor: 'rgba(25, 90, 13, 0.5)',
           },
           {
             label: 'Dataset 2',
             data:[],
             borderColor: 'rgb(53, 162, 235)',
             backgroundColor: 'rgba(53, 162, 235, 0.5)',
           },
           {
            label: 'Dataset 3',
            data:[],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
         ],
       });
   
      const Charttest = ()=>{
        console.log("hit1")
        const tok = 'rsystems-N4VE35:a4d2743a-bbe6-4114-8902-f0534eb62d4b';
        const hash = Base64.encode(tok);
          const Basic = 'Basic ' + hash;
          const labelSet = [];
          const dataSet1 = []
          const dataSet2 = []
          const dataSet3 = []
      axios.get('https://testboomi.india.rsystems.com:9090/ws/rest/dashboard/v1/810Chart/',{headers : { 'Authorization' : Basic }})
      .then((response)=>{
  
        console.log("ressss", JSON.stringify(response.data))
        // const chartData= JSON.parse(response.data)
       
     
             for (const data of response.data[0]) {
                  console.log("data :",data['Month'])
                 labelSet.push(data['Month'])
                 dataSet1.push(data["2019DataCount"])
                 dataSet2.push(data["2020DataCount"])
                 dataSet3.push(data["2021DataCount"])
                
             }
             setData({
                 labels:labelSet,
                 datasets: [
                   {
                     label: 'Year 2019',
                     data:dataSet1,
                     borderColor: 'rgb(255, 99, 132)',
                     backgroundColor: '#f48fb1',
                   },
                   {
                     label: 'Year 2020',
                     data:dataSet2,
                     borderColor: 'rgb(53, 162, 235)',
                     backgroundColor: '#ce93d8',
                   },
                   {
                    label: 'Year 2021',
                    data:dataSet3,
                    borderColor: 'rgb(32, 162, 125)',
                    backgroundColor: '#64ffda',
                  },
                 ],
               })
             console.log("arrData", labelSet,dataSet1,dataSet2,dataSet3)
          }).catch(e => {
                 console.log("error", e)
             })
         }
         console.log("dataaaaaaaa", data)
         
         useEffect(()=> {
          Charttest()
            },[]);
          
          
      
     return(
      <div>
      <div class="container">


  <div className='row'>
  <div className="col-sm-12 pad1">
  <div className='card'>
<div className="two alt-two">
<h5>810-REPORTS
<span>Graphical representation of yearly reports</span>
</h5>
</div>


</div>

<div className="card">
<ul className="nav nav-pills ml-auto">
<li className="nav-item">
  <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Bar</a>
</li>
<li className="nav-item">
  <a className="nav-link" href="#sales-chart" data-toggle="tab">Line</a>
</li>
</ul>
<div className="tab-content p-0">
<div className="chart tab-pane active" id="revenue-chart" style={{position: 'relative',width:'100%',height:'350px'}}>
<Bar data={data} options={options}/>
</div>
<div className="chart tab-pane" id="sales-chart" style={{position: 'relative',width:'100%',height:'350px'}}>
<Line options={options1} data={data} />
</div>
</div>
</div>
</div>



</div>

      </div>
      </div>
          )
 }
 export default Report_856_chart;