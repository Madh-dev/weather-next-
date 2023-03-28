'use client';

import React from 'react';
import { foreC,options,data } from '../data';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import './today.css'
import Link from 'next/link';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Today = () => {
const tempArr =  foreC?.forecast?.forecastday[0]?.hour?.map(cool =>(
     cool.temp_c 
  ) );
  console.log(tempArr)

  return (
    <>
    <Link href={`/`}> Today Forecast</Link>
    <Link href={`/about`}><h2>7 day Forecast</h2></Link>
    <div className='today'>
        <div className='today-special-card'>
            {/* <Image src={`https:${data?.current?.condition?.icon}`} alt='icon' width={70}  height={30}/> */}
            <h3>{foreC.current?.temp_c}<sup>oC</sup></h3>
            <h5>{foreC.current?.condition?.text}</h5>
            <hr/>
            <p>{foreC.location?.name},{foreC.location?.country}</p>
            <p>{foreC.location?.name},{foreC.current?.last_updated}</p>
        </div>
        <div className='today-special-card'>
           <h2>Wind Status</h2>
            <h3>{foreC.current?.wind_kph}<sub>km/h</sub></h3>
            <h5>{foreC.current?.wind_degree}<sup>o</sup></h5>
            <h6>Direction:{foreC.current?.wind_dir} </h6>
        </div>
        <div className='today-special-card'>
           
            <h3>Cloud:{foreC.current?.cloud}</h3>
            <h5>Humidity:{foreC.current?.humidity}</h5>
            <h6>Visibility:{foreC.current?.vis_km} <sub>km</sub> </h6>
        </div>
        <div className='today-special-card'>
           <h2>Uv Index</h2>
           <SemiCircleProgressBar percentage={33} showPercentValue />;
            <h6>UV:{foreC.current?.uv} <sub>km</sub> </h6>
        </div>
     
        
    </div>
      <div   className='line-chart'>
        <Line options={options} data={data} />;
      </div>
    
    </>
  )
}

export default Today