import { useEffect } from "react"

export default function SomeList({someState}) {
  useEffect(() => {
    console.log('im re rendering')
  },[someState]);
  
  return (
    <div>SomeList</div>
  )
}
