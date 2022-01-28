import styles from './css/DetailPage.module.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React from 'react';
import Score from './Score';


export default function DetailPage({ day }){
  const today = useParams().day
  // console.log(today)


  return(
    <>
    <div className={styles.detail_box}>
      <div className={styles.title_box}>
        <p className={styles.dayTit}>{today}DAY</p>
        <h2 className={styles.textTit}>오늘의 평점을 매기자</h2>
      </div>
      <Score/>
      <div className={styles.movebtn}><Link to ='/'>평점남기기</Link></div>
    </div>
    </>
  )
}

