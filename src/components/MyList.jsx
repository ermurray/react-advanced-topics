import { useCallback, useMemo }from 'react'

export default function MyList({someState, change}) {

  const list = useMemo(() => someState.map((elem) => <div key={elem.name}>{elem.name}</div>), [someState]); // stores the value between renders if dep. does not change

const list2 = useCallback(() => someState.map((elem) => <div key={elem.name}>{elem.name}</div>), [someState]) // stores the function between renders

  return (
    <div>
      <div>MyList</div>
      <ul>
        {list}
      </ul>
      <ol>
        {list2}
      </ol>
    </div>
  )
}
