import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,remove } from './features/counter/counterSlice'
const Total=()=>{

const total = useSelector((state) => state.counter.total)
  const dispatch = useDispatch()
    return(
        <div>
            <h1>Total:{total}</h1>
            <button onClick={()=>dispatch(remove())}>CLEAR CART</button>
        </div>
    )
}

export default Total