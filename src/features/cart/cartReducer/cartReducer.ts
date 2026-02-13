import { createSlice } from "@reduxjs/toolkit";
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

    }



})