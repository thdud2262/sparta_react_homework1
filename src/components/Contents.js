import styles from './css/Contents.module.css';
import DetailPage from './DetailPage';
import { Link } from 'react-router-dom';


export default function Contents() {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  // const dayList = days.map((day,index) => <li key={index}>{day}</li>)
  const daylists = Array.from({ length:5 }, ( v , i ) => i ) ;

  return (
    <>
      <div className={styles.box}>
        <ul className={styles.boxUl}>
          {days.map((day, id) => {
            let scoreBox = Math.floor(Math.random() * 5);
              // console.log(scoreBox)
              // console.log(id)
            return (<li className={styles.boxLi} key={id}>
              <span className={styles.toDay}> {day}</span>
              <div className={styles.cont_box}>
                {/* 맵 돌릴때 / days.map 한거처럼 day가 배열이 아니면 어케하나염!!??? 아래는 sapn인데!! */}
                
                <span className={styles.cont_score} style={scoreBox >= 1 ? {backgroundColor : 'white'} : {backgroundColor : '#ffe066'}}></span>
                <span className={styles.cont_score} style={scoreBox >= 2 ? {backgroundColor : 'white'} : {backgroundColor : '#ffe066'}}></span>
                <span className={styles.cont_score} style={scoreBox >= 3 ? {backgroundColor : 'white'} : {backgroundColor : '#ffe066'}}></span>
                <span className={styles.cont_score} style={scoreBox >= 4 ? {backgroundColor : 'white'} : {backgroundColor : '#ffe066'}}></span>
                <span className={styles.cont_score} style={scoreBox >= 5 ? {backgroundColor : 'white'} : {backgroundColor : '#ffe066'}}></span>
              </div>
              <button className={styles.moveBtn}>
                <Link to={`/detail/${day}`}>수정</Link>
              </button>
            </li>)
          })}

        </ul>
      </div>
    </>
  )
}