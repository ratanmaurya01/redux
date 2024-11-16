import { createSlice , PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    username : string;
    password: string;
}

const initialState : AuthState = {
    username : '',
    password : ''
};

const authSlice  =createSlice({
    name : 'auth',
    initialState ,
    reducers : {
        setLogindData:(state , action: PayloadAction <AuthState>)=>{
           state.username = action.payload.username;
           state.password = action.payload.password;
        },

        clearLoginData :(state)=>{
            state.username='';
            state.password='';
        }
    }
})

export const {setLogindData , clearLoginData} = authSlice.actions;
export default authSlice.reducer