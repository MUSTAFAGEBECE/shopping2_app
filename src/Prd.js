import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,cancel } from './features/counter/counterSlice'
const Prd=({ct})=>{
  const dispatch = useDispatch()
    return(
        <div>
            <h1>{ct.title}</h1>
            <img src={ct.img} />
            <p>{ct.price}</p>
            <button onClick={()=>dispatch(decrement(ct))}>-</button>
            <h2>{ct.amount}</h2>
            <button onClick={()=>dispatch(increment(ct))}>+</button>
            <button onClick={()=>dispatch(cancel(ct))}>Remove</button> 

        </div>
    )
}

export default Prd