import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,getCartItems } from './features/counter/counterSlice'
import Prd from "./Prd";
const Product=()=>{
    const cartItem = useSelector((state) => state.counter.cartItem)
  const dispatch = useDispatch()
    return(
        <div>
             {
                cartItem.map((ct)=>{
                    return(
                     <Prd ct={ct} />
                    )
                })
             }
        </div>
    )
}

export default Product