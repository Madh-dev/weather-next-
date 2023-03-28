import  { foreC } from '@/components/data'
import Link from 'next/link';
import React from 'react'
import SemiCircleProgressBar from "react-progressbar-semicircle";
import style from './page.module.css'

const page = () => {
  // const UvPercent = (foreC?.current?.uv / 11) * 100;

  return (
    <>
    <Link href={`/`}> Today Forecast</Link>
    <Link href={`/about`}><h2 className={style.centre}>7 day Forecast</h2></Link>
    <div className={style.days}>
      {foreC?.forecast.forecastday?.map(cast => (
        <div className={style.day_special_card} key={cast.date_epoch}>
          <h3 className={style.ptb}>{cast.date}</h3>
          <h3 className={style.ptb}>Max/Min Temp (oC): {cast?.day?.maxtemp_c} / {cast?.day?.mintemp_c}</h3>
          <h3 className={style.ptb}>Max windSpeed (km/h): {cast?.day?.maxwind_kph}</h3>
          <h5 className={style.ptb}>{cast?.day?.condition?.icon}</h5>
          <h5 className={style.ptb}>Condition: {cast?.day?.condition?.text}</h5>
          <p className={style.ptb}>Sunrise: {cast?.astro?.sunrise}</p>
          <p className={style.ptb}> Sunset: {cast?.astro?.sunset}</p>
          <p className={style.ptb}>Average Visibility (km): {cast?.day?.avgvis_km}</p>
          <p className={style.ptb}>Average Humidity: {cast?.day?.avghumidity}</p>
        </div>
      ))
      }                   
    </div>
    </>
  )
}

export default page