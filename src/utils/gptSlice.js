import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
name: 'gpt',
initialState: {
    showGptSearch: false
},
reducers: {
    toggleGptSearchView : (state)=> {
        state.showGptSearch = !state.showGptSearch         //since action is not required here u can remove action from parameters as well
    }
}
})


export const {toggleGptSearchView} = gptSlice.actions;
export default gptSlice.reducer;