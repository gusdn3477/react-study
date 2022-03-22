import InputSample from "./InputSample";
import TextInputWithFocusButton from "./TextinputWithFocousButton";
import UseInput from "./UseInput";
import React, { useState, useRef, useEffect } from "react";


function App() {

  const [count, setCount] = useState(1);
  // const [renderCount, setRenderCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log('렌더링 수: ', renderCount.current);
  })
  // useEffect(() => {
  //   console.log("렌더링!");
  //   setRenderCount(renderCount + 1);
  // }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  )
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
