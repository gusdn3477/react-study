import React, { useEffect, useCallback, useState } from "react";
import Box from "./Box";

function App() {
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);
  // 부모 컴포넌트가 바뀔 때 자식도 바뀐다고 해서 일부러 자식에 영향가지 않는 state를 만들고 실험해 봤다.
  // prac이라는 숫자를 바꾸면 props로 넘겨주지 않아도 렌더링이 된다.
  // Box.js 주석처리된 6~8 라인이 실험 코드
  const [prac, setPracs] = useState(0);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div
      style={{
        background: isDark ? "black" : "white",
      }}
    >
      <div>
        <input
          type="number"
          value={size}
          onChange={(e) => setSizes(e.target.value)}
        />
        <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
        <Box createBoxStyle={createBoxStyle} />
      </div>
      <div>
        <input
          type="number"
          value={prac}
        />
        <button onClick={() => setPracs(prac+1)}>Change Theme</button>
      </div>
    </div>
  );
  // const [number, setNumber] = useState(0);
  // const [toggle, setToggle] = useState(true);

  // // 함수도 객체이기 때문에 렌더링 시 새로 만들어진다.
  // // 새로 생성된 함수의 주소를 someFunction가 참조한다.
  // // const someFunction = () => {
  // //   console.log(`someFunc: number: ${number}`);
  // //   return;
  // // };

  // // 메모이제이션 된 someFunction을 사용할 수 있다.
  // const someFunction = useCallback(() => {
  //   console.log(`someFunc: number: ${number}`);
  //   return ;
  // }, [number]);

  // useEffect(() => {
  //   console.log("someFunction이 변경되었습니다.");;
  // }, [someFunction])

  // return (
  //   <div>
  //     <input
  //       type="number"
  //       value={number}
  //       onChange={e => setNumber(e.target.value)}
  //     />
  //     <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
  //     <br />
  //     <button onClick={someFunction}>Call someFunc</button>
  //   </div>
  // );
}

export default App;
