import { useState, useRef, useEffect } from "react";
import MyList from "./MyList";

export default function Layout({children, headerComponent}) {
  const [state, setState] = useState([
    {
      name: 'Luke'
    },
    {
      name: 'Han'
    },
    {
      name: 'R2'
    }
  ]);

  const itemRef = useRef(null);

  useEffect(()=> {
    console.log('item', itemRef);
  },[itemRef]);

  return(
    <div>
      {headerComponent}
      { children }
      <input type='text' ref={itemRef}></input>
      <MyList someState={state} changeState={setState}
        
      />
      <button
        onClick={() => itemRef.current.focus()}
      >focus input</button>
    </div>
  )
}