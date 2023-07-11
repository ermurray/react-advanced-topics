import {useState, useRef, useMemo} from 'react';
import SomeList from './SomeList';

const Counter = () => {
  const prevVal = useRef(0);
  const [someState, setSomeState] = useState('im state')
  const [counter, setCounter] = useState(0);

  const memoizedList = useMemo(() => {
    return <SomeList someState={someState} /> 
  },[someState])



  return (
    <div>
      <h1>Counter</h1>
      <h4>val: {counter}</h4>
      <button
        onClick={() => setCounter(prev => {
          prevVal.current = prev;
          return prev + 1
        })}
      >increase</button>
      <div>prevVal: {prevVal.current}</div>
      {memoizedList}
    </div>
  )
}

export default Counter;
