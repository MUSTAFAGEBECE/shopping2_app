import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
const url = 'http://course-api.com/react-useReducer-cart-project';

const initialState = {
  isLoading:true,
  cartItem:[],
  amount:0,
  total:0
}

export const getCartItems = createAsyncThunk(
    'cart/getCartItems',
    async (name, thunkAPI) => {
      try {
       
        const resp = await axios(url);
  
        return resp.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('something went wrong');
      }
    }
  );
  


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    remove: (state) => {
      
        state.cartItem=[]
      },
    increment: (state,action) => {
      state.cartItem=state.cartItem.map((cm)=>cm.id===action.payload.id?{...cm,amount:cm.amount+1}:cm)
      },
    
    decrement: (state,action) => {
      state.cartItem=state.cartItem.map((mc)=>mc.id===action.payload.id?{...mc,amount:mc.amount>1&&mc.amount-1}:mc).filter((ft)=>ft.amount>0)
    },
    cancel: (state, action) => {
        state.cartItem=state.cartItem.filter((ccm)=>ccm.id!==action.payload.id)
      },
    totalPrice:(state,action)=>{
       state.total=state.cartItem.reduce((acc,current)=>(acc+current.amount*current.price),0)
       state.amount=state.cartItem.reduce((acc,current)=>(acc+current.amount),0)
    },
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.cartItem = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
})


export const { increment, decrement, remove,cancel,totalPrice } = counterSlice.actions

export default counterSlice.reducer