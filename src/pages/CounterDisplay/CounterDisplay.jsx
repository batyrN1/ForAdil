import { useContext } from "react"
import { CounterContext } from "../../context/CounterContext"

export const CounterDisplay = function CounterDisplay() {
    const counterContext = useContext(CounterContext)
   
    return (
     <div>
      <p>Count: {counterContext.count}</p>
      <button onClick={counterContext.increment}>increment</button>
      <button onClick={counterContext.decrement}>decrement</button>
     </div> 
    )
   }