import styles from './css/MainPage.module.css';
import Contents from './Contents';

export default function MainPage(){
  const name = '병아리'
  return (
    <>
    <div className={styles.contain}>
      <h2 className={styles.main_title}>{name} 프론트 도전기</h2>
      <Contents/>
    </div>
    </>
  )
}