import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme:'dark'
}

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        changeTheme:(state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        }
    }
})


export const themeReducer = themeSlice.reducer;
export const {changeTheme} =  themeSlice.actions;