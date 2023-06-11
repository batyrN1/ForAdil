import React from "react"
import { CounterContext } from "../../context/CounterContext"
// provider on components
export const CounterProvaider = function CounterProvider({children}) {
    const [count, setCount] = React.useState(0)
   
    const increment = () => {
     setCount(count + 1)
    }
   
    const decrement = () => {
     setCount(count - 1)
    }
   
    // value context 
    const counterContextValue = {
     count,
     increment,
     decrement,
    }
   
    return (
     <CounterContext.Provider value={counterContextValue}>
      {children}
     </CounterContext.Provider>
    )
   }
   