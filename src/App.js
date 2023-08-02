import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Product from "./Product"
import Total from './Total';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,totalPrice,getCartItems } from './features/counter/counterSlice'
import { useEffect } from 'react';


function App() {
  const cartItem = useSelector((state) => state.counter.cartItem)
  const isLoading = useSelector((state) => state.counter.isLoading)
  const dispatch = useDispatch()

  
   useEffect(()=>{
     dispatch(totalPrice())
   },[cartItem])

   useEffect(()=>{
     dispatch(getCartItems()) 
   },[])
  if(isLoading){
    return(
      <div>
        <h1>Loading</h1>
      </div>
    )
  }


  return (
    <div className="App">
       
      <Header/>
      <Product/>
      <hr/>
      <Total/>
    </div>
  );
}

export default App;
