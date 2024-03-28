import { createSlice } from '@reduxjs/toolkit';

const recSlice = createSlice({
    name:"recordings",
    initialState:{
        id: []
    },
    reducers: {
        addRec: (state,action) => {
            state.ids = [...state.ids, action.payload.id];
        },
        delRec: (state,action) => {
            state.ids = state.ids.filter(id => id !== action.payload.id);
        }
    }
});

export const addRec = recSlice.actions.addRec;
export const delRec = recSlice.actions.delRec;
export default recSlice.reducer;