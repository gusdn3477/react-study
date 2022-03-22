import { useRef } from "react";

const UseInput = () => {
  // useRef는 component의 어떤 부분을 선택할 수 있는 방법입니다.
  // document.getElementByID() 비슷한 기능을 함!
  const input = useRef();

  // 3초 후에 input element의 value를 console.log에 찍어라는 함수
  // input.current가 현재 선택된 element를 말합니다.
  setTimeout(() => {
    console.log(input.current.value);
  }, 3000);

  return (
    <div className="App">
      <input ref={input} placeholder="test" value="hahaha" />
    </div>
  );
};

export default UseInput;