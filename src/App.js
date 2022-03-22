import InputSample from "./InputSample";
import TextInputWithFocusButton from "./TextinputWithFocousButton";
import UseInput from "./UseInput";
import React, { useState, useRef, useEffect } from "react";
import Timer from "./component/Timer";

const heavyWork = () =>{
  console.log("엄청 무거운 작업!!!");
  return ['홍길동', '김민수'];
}

function App() {

  const [showTimer, setShowTimer] = useState(false);
 
  // 마운트 : 화면에 컴포넌트가 렌더링 되었을 때
  // 언마운트 : 화면에 컴포넌트가 사라질 때 -> useEffect의 clean-up 기능을 이용하면 된다.
  const handleButtonClick = async () =>{
    setShowTimer(!showTimer)
  }

  return(
    <div>
      {showTimer && <Timer/>}
      <button onClick={handleButtonClick}>Toggle Timer</button>
    </div>
  )
  // const [count, setCount] = useState(1);
  // const [name, setName] = useState('');

  // const handleCountUpdate = () => {
  //   setCount(count + 1);
  // };

  // const handleInputChange = (e) => {
  //   setName(e.target.value);
  // }

  // // 렌더링마다 매번 실행됨 - 렌더링 이후
  // useEffect(() => {
  //   console.log('렌더링');
  // });

  // // 마운트 + count가 변경될 때 마다 실행
  // useEffect(() => {
  //   console.log('count 변화');
  // }, [count]);

  // // 마운트 + [ name ] 변경될 때 마다 실행
  // useEffect(() => {
  //   console.log('name 변화');
  // }, [name]);

  // // 첫 렌더링 시에만 실행됨
  // useEffect(() => {
  //   console.log('마운팅');
  // }, []);

  // return (
  //   <div>
  //     <button onClick={handleCountUpdate}>Update</button>
  //     <span>count: {count}</span>
  //     <input text="text" value={name} onChange={handleInputChange}/>
  //     <span>name: {name}</span>
  //   </div>
  // )

  // useState 관련 자료
  // // 무거운 작업 시 콜백함수를 사용하면 lazy하게 가져와서 효율적이다.
  // const [names, setNames] = useState(() => heavyWork());
  // const [input, setInput] = useState('');

  // const handleInputChange = e => {
  //   setInput(e.target.value);
  // }

  // // 화살표 함수의 경우 중괄호가 있는 경우 return문을 작성해 주어야 한다.
  // const handleUpload = () => {
  //   setNames(prev => 
  //     {
  //       console.log('이전 state: ', prev);
  //       return [input, ...prev]
  //     }
  //   );
  // }

  // return (
  //   <div>
  //     <input type="text" value={input} onChange={handleInputChange}/>
  //     <button onClick={handleUpload}>Update</button>
  //     {names.map((name, idx) => <p key={idx}>{name}</p>)}
  //   </div>
  // )



  // const [count, setCount] = useState(1);
  // // const [renderCount, setRenderCount] = useState(1);
  // const renderCount = useRef(1);

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  //   console.log('렌더링 수: ', renderCount.current);
  // })
  // useEffect(() => {
  //   console.log("렌더링!");
  //   setRenderCount(renderCount + 1);
  // }, [count])

  // return (
  //   <div>
  //     <p>Count: {count}</p>
  //     <button onClick={() => setCount(count + 1)}>올려</button>
  //   </div>
  // )
  // const [renderer, setRenderer] = useState(0);
  // const countRef = useRef(0);
  // let countVar = 0;

  // const doRendering = () => {
  //   setRenderer(renderer + 1);
  // }

  // const increaseRef = () => {
  //   countRef.current = countRef.current + 1;
  //   console.log('ref ', countRef.current);
  // }

  // const increaseVar = () => {
  //   countVar = countVar + 1;
  //   console.log('var : ' + countVar);
  // }

  // const printResults = () => {
  //   console.log(`ref: ${countRef.current}, var: ${countVar}`);
  // }

  // return (
  //   <div>
  //     <p>Ref: {countRef.current}</p>
  //     <p>Ref: {countVar}</p>
  //     <button onClick={doRendering}>렌더!</button>
  //     <button onClick={increaseRef}>Ref 올려</button>
  //     <button onClick={increaseVar}>Var 올려</button>
  //     <button onClick={printResults}>Ref Var 값 출력</button>
  //   </div>
  // )


  // const [count, setCount] = useState(0);
  // const countRef = useRef(0);

  // console.log(countRef);

  // console.log("렌더링");
  
  // const increaseCountState = () => {
  //   setCount(count + 1);
  // }

  // const increaseCountRef = () => {
  //   countRef.current = countRef.current + 1;
  // }

  // return (
  //   <div>
  //     <p>State: {count}</p>
  //     <p>Ref: {countRef.current}</p>
  //     <button onClick={increaseCountState}>State 올려</button>
  //     <button onClick={increaseCountRef}>Ref 올려</button>
  //   </div>
  // )




  // return (
  //   <div className="App">
  //     {/* <TextInputWithFocusButton/> */}
  //     {/* <InputSample/> */}
  //     <UseInput/>
  //   </div>
  // );
}

export default App;
