import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'
const Header=()=>{
    const amount = useSelector((state) => state.counter.amount)
    
    return(
        <div>
            <h1>Redux Toolkit</h1>
            <h2>Amount:{amount}</h2>
        </div>
    )
}

export default Header