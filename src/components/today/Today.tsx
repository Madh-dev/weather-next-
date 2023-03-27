import Image from 'next/image';
import React from 'react';
import data from '../data';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import './today.css'
import Link from 'next/link';


const Today = () => {


  return (
    <>
    <Link href={`/`}> Today Forecast</Link>
    <Link href={`/about`}><h2>7 day Forecast</h2></Link>
    <div className='today'>
        <div className='today-special-card'>
            {/* <Image src={`https:${data?.current?.condition?.icon}`} alt='icon' width={70}  height={30}/> */}
            <h3>{data?.current?.temp_c}<sup>oC</sup></h3>
            <h5>{data?.current?.condition?.text}</h5>
            <hr/>
            <p>{data?.location?.name},{data?.location?.country}</p>
            <p>{data?.location?.name},{data?.current?.last_updated}</p>
        </div>
        <div className='today-special-card'>
           <h2>Wind Status</h2>
            <h3>{data?.current?.wind_kph}<sub>km/h</sub></h3>
            <h5>{data?.current?.wind_degree}<sup>o</sup></h5>
            <h6>Direction:{data?.current?.wind_dir} </h6>
        </div>
        <div className='today-special-card'>
           
            <h3>Cloud:{data?.current?.cloud}</h3>
            <h5>Humidity:{data?.current?.humidity}</h5>
            <h6>Visibility:{data?.current?.vis_km} <sub>km</sub> </h6>
        </div>
        <div className='today-special-card'>
           <h2>Uv Index</h2>
           <SemiCircleProgressBar percentage={33} showPercentValue />;
            <h6>UV:{data?.current?.uv} <sub>km</sub> </h6>
        </div>
        
        
    </div>
    </>
  )
}

export default Today