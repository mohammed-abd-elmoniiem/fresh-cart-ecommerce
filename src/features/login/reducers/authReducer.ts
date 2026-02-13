
import { createAsyncThunk, createReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserInfoByinitialToken } from "../cookie/tokenCookie";
import build from "next/dist/build";
import { useDispatch } from "react-redux";


export type authStatetype = {
    isAuthentication:boolean,
    userInfo:userInfotype | null
}

export type userInfotype = {
    id?:string
    role?:string,
    name?:string,
    email?:string
}

 
const initialState:authStatetype = {
    isAuthentication:false,
    userInfo:null
}

 const getInitialState = async () => {
      const ReturnedInitialState = await getUserInfoByinitialToken();

      initialState.isAuthentication = ReturnedInitialState.isAuthentication;
      initialState.userInfo = ReturnedInitialState.userInfo
     
    }




export const fetchUserInfo = createAsyncThunk(
    'auth/fetchUserInfo',async ():Promise<authStatetype>=>{

       const response  =  await getUserInfoByinitialToken()
       console.log(response)

       return response

    }
)


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setUserInfo:(state,action:PayloadAction<authStatetype>)=>{

            state.isAuthentication = action.payload.isAuthentication;
            state.userInfo = action.payload.userInfo

        },

     


    },
    extraReducers:(builder)=>{

        builder.addCase(fetchUserInfo.fulfilled,(state,action)=>{
            state.isAuthentication = action.payload.isAuthentication ;
            state.userInfo = action.payload.userInfo;
        })

        builder.addCase(fetchUserInfo.pending,(state,action)=>{
            state.isAuthentication = false;
            state.userInfo = null;
        })
        builder.addCase(fetchUserInfo.rejected,(state,action)=>{
            state.isAuthentication = false;
            state.userInfo = null;
        })
    }

})




export const authReducer = authSlice.reducer;
export const {setUserInfo} = authSlice.actions;

