import { createSlice } from "@reduxjs/toolkit";

export const descSlice = createSlice({
    name: "desc",
    initialState: [],
    reducers: {
        show: (state, action) => { state.push(action.payload) }, // payload is used to access the input parameter
        hide: (state, action) => { return state.filter((item) => item.id != action.payload) }
    }
})

export const { show, hide } = descSlice.actions;
export default descSlice.reducer;