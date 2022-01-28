import styles from './css/Score.module.css';
import { Link } from 'react-router-dom';
import React from 'react';


export default function Score() {
  const [count, setCount]=React.useState(0);
  const score_count = Array.from({length : 5},(v,i) => i);
  //유사배열객체 만듦! span에 배열 넣어서 계산 할 수 있게 도와쭘! 알럽 유사배열
  const scoreCount = (params) => { //화살표함수 함수 표현식 
    console.log(params);
    console.log(params.idx);
    setCount(params.idx+1)
  };
  //화살표함수 setcount숫자 업데이트 해줌 / params로는  

  return (
    <>
      <div className={styles.score_box}>
        {score_count.map((idx) =>{
          // span에 붙일 인덱스 생성됨
          // console.log(count)
          return( // 결과물이 하나가 아니니까 return해줌... (이건정확하지않음 -> map함수공부 ) //return뒤는 출력되는 부분
            <>    
              <span 
              className={styles.score} 
              onClick={() => {scoreCount ({ idx }); }}
              key={idx}
              style={
                idx < count
                  ? { backgroundColor: "#ffe066" }
                  : { backgroundColor: "white" }
              }>
              </span>
            </>
          )
        })}
      </div>
    </>
  )
}
// span태그에 속성으로 className(css주기) 
// onClick (event) => scoreCount함수실행 params받는다... 이거가... 화살표함수에서 클릭한 map으로만든 저 idx를 받아서 함수에 보냄
// 위쪽에 scoreCount가 아래에 idx로 보낸 거 (뭐라고해?) 이거 받아서 scoreCount실행 (저 모양은) 화살표함수 함수 표현식 
// scoreCount가 인자를 받아서 setCount가 실행되는데 params값이 {idx:2} 이런형태//이런형태로 받아짐/ 그래서 params.idx로 값만 추출
// 추출한 값을 setCount() 함수로 보냄 => 아마 setCount는 react 컴포넌트관리 state 그런거임/
// react가 상태를 업데이트해줌 상태업데이트 해준게 숫자 누르면 idx 랑 연결된 스타일 변하게 해주는거 
