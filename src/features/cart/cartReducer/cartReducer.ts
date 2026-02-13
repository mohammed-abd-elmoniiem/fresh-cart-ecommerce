import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartData } from "../cart.type";



const initialState:CartData = {
    status: 'empty',
    message: '',
    numOfCartItems: 0,
    cartId: '',
    data: {
        _id: '',
        cartOwner: '',
        products: [],
        createdAt: '',
        updatedAt: '',
        __v: 0,
        totalCartPrice: 0
    }

}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{

        updateCart:(state,action:PayloadAction<CartData>)=>{

            console.log('action.payload', action.payload)
            state.numOfCartItems = action.payload.numOfCartItems
            state.cartId = action.payload.cartId
            state.data = action.payload.data

        }

    }



})

export const cartReducer = cartSlice.reducer;
export const {updateCart} = cartSlice.actions