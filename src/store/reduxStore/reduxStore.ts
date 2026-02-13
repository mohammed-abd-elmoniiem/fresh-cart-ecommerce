
import { cartReducer } from "@/src/features/cart/cartReducer/cartReducer"
import { authReducer } from "@/src/features/login/reducers/authReducer"
import {configureStore} from "@reduxjs/toolkit"


export const store = configureStore({
    reducer:{
        authReducer,
        cartReducer
    }
}) 

// Get the type of our store variable
export type storeType = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type stateStype = ReturnType<storeType['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = storeType['dispatch']