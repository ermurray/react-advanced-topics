import { useState, useRef } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const prevVal = useRef(count);


  return (
    <div>
      <h1>Counter</h1>
      <h4>val: {count}</h4>
      <button
        onClick={()=> setCount(prev => {
          prevVal.current = prev
          return prev + 1;
        })}
      >
        increase
      </button>
      <h5>prevVal: {prevVal.current}</h5>
    </div>
  )
}

export default Counter;
